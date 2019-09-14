import React from 'react';
import { ErrorMessage } from 'formik';
import propTypes from 'prop-types';
import styled from 'styled-components';
import InputErrorTooltip from '../../../components/InputErrorTooltip';

const Label = styled.label`
  position: absolute;
  bottom: 7px;
  left: 7px;
  font-size: 13px;
  color: #aaa;
  transition: .3s ease;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 5px 3px;
  border: 1px solid #ccc;

  &:focus ~ span:before,
  &:focus ~ span:after {
    width: 50%;
  }

  &:focus + label,
  &:valid + label {
    bottom: 32px;
    left: 0;
  }

  &:focus + label {
    color: #6040b0;
  }
`;

const InputBlock = styled.div`
  width: 100%;
  position: relative;
  box-sizing: content-box;
`;

const Bar = styled.span`
  position: relative;
  width: 100%;
  display: block;

  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #6040b0;
    transition: .3s ease;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;

const AuthorizationInput = ({ field, form, ...otherProps }) => {
  const {
    name,
    value,
    onChange,
    onBlur
  } = field;
  const {
    required,
    type,
    placeholder,
    label
  } = otherProps;
  return (
    <InputBlock>
      <Input
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={InputErrorTooltip} />
      <Label htmlFor={name}>{label}</Label>
      <Bar />
    </InputBlock>
  );
};

AuthorizationInput.defaultProps = {
  type: 'text',
  required: false,
};

AuthorizationInput.propTypes = {
  required: propTypes.bool,
  type: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
};

export default AuthorizationInput;