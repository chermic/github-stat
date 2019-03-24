import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  width: 100%;
  background: #6040b0;
  text-align: center;
  color: #fff;
  padding: 12px 0;
  border-radius: 2px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function AuthorizationButton(props) {
  return (
    <Button>
      <Link to='/stat'>{props.text}</Link>
    </Button>
  )
}