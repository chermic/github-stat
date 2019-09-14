import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const User = styled.li`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-top: 5px;
  background: inherit;
  color: #fff;
  transition: .4s ease;

  &:hover {
    background: #ccc;
  }

  & > span {
    margin-left: 15px;
  }

  & > a {
    margin-left: auto;
    color: inherit;
    height: 100%;
  }
`;

const Avatar = styled.img`
  height: 30px;
  border-radius: 50%;
`;



const UserListItemComponent = ({ avatar_url, html_url, login }) => (
  <User>
    <Avatar src={avatar_url} alt="avatar" />
    <Link to={`/users/${login}`}>{login}</Link>
    <a href={html_url} target='_blank' rel='noopener noreferrer'>
      Github profile
    </a>
  </User>
);

UserListItemComponent.propTypes = {
  avatar_url: propTypes.string.isRequired,
  login: propTypes.string.isRequired,
  html_url: propTypes.string.isRequired,
};

export default UserListItemComponent;