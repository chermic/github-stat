import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  background: #222;
  min-height: 100px;
  color: #fff;

  & > h1 {
    margin: 0;
    padding: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 15px;
  transition: .2s ease;

  & > a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background: #777;
    border-radius: 5px;
  }
`;

const HeaderComponent = ({ isAuthorized }) => {
  return (
    <Header>
      <div className='container'>
        <div>
          <h1>Github exploring</h1>
        </div>
        {isAuthorized && (
          <Nav>
            <NavItem>
              <Link to='/stat'>Stat</Link>
            </NavItem>
            <NavItem>
              <Link to='/search'>Search</Link>
            </NavItem>
          </Nav>
        )}
      </div>
    </Header>
  )
}

HeaderComponent.defaultProps = {
  isAuthorized: propTypes.bool.isRequired,
};

export default HeaderComponent;