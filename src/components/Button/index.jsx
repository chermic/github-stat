import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  width: 100%;
  background: ${(props) => props.disabled ? '#ccc' : '#6040b0'};
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
  text-align: center;
  color: #fff;
  padding: 12px 0;
  border-radius: 2px;
`;

const Button = ({ type, disabled, label, onClick }) => (
  <StyledButton
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </StyledButton>
);

Button.defaultProps = {
  label: 'Отправить',
  type: 'button',
}

Button.propTypes = {
  label: propTypes.string,
  disabled: propTypes.bool,
  type: propTypes.oneOf(['submit', 'button', 'reset']),
  onClick: propTypes.func,
};

export default Button;