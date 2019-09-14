import React from 'react';
import styled from 'styled-components';
import CardComponent from '../../../../components/Card';
import User from './UserListItemComponent';

import useLoadUsers from '../../../../hooks/useLoadUsers';

const UserList = styled.ul`
  list-decoration: none;
  margin: 0;
  padding: 5px 0;
`;

// TODO: Add user search
const UserListComponent = () => {
  const { error, users, isLoading } = useLoadUsers();

  const userList = users.map(user => (
    <User key={user.id} {...user} />
    ))
    
  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = (
      <div>
        <p> {error.message}</p>
        <p>Error: {error.response.data.message || ''}</p><br />
        {<a href='error.response.data.documentation_url'>Documentation url</a> || ''}
      </div>
    );
  } else {
    content = <UserList>{userList}</UserList>
  }

  return (
    <CardComponent title='Github users' content={content}/>
  );
};

export default UserListComponent;