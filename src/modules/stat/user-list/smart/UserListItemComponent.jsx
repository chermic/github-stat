import React from 'react';
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



function UserListItemComponent(props){
  return (
    <User>
      <Avatar src={props.avatar_url} alt="avatar" />
      <Link to={`/users/${props.login}`} avatar={props.avatar_url}>{props.login}</Link>
      <a href={props.html_url} target='_blank' rel='noopener noreferrer'>
        Github profile
      </a>
    </User>
  );
}

export default UserListItemComponent;