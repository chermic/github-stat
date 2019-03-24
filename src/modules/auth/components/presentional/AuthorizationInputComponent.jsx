import React from 'react';
import styled from 'styled-components';

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

export default function AuthorizationInput(props) {
    return (
        <InputBlock>
          <Input id={props.id} required={props.required} type={props.type} />
          <Label htmlFor={props.id}>{props.label}</Label>
          <Bar />
        </InputBlock>
    )
  }