import React from 'react';
import styled from 'styled-components';
import CardComponent from '../../../core/components/presentional/CardComponent';
import User from './UserListItemComponent';

import axiosInstance from '../../../../axios';

const UserList = styled.ul`
  list-decoration: none;
  margin: 0;
  padding: 5px 0;
`;

class UserListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      error: null,
      isLoading: false,
    }
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    })
    
    try {
      const rateLimit = await axiosInstance.head('rate_limit');
      console.log(`Api request limits: \n
        Limit: ${rateLimit.headers['x-ratelimit-limit']} \n
        Remaining: ${rateLimit.headers['x-ratelimit-remaining']} \n
        Reset: ${new Date(rateLimit.headers['x-ratelimit-reset'] * 1000)}
      `);

      const response = await axiosInstance.get('users?since=');
      this.setState({
        users: response.data,
      });
    } catch (error) {
      this.setState({
        error,
      })
    }

    this.setState({
      isLoading: false,
    })
  }

  render() {
    let content;
    const users = this.state.users.map(user => (
      <User key={user.id} {...user} />
    ))

    if (this.state.isLoading) {
      content = <div>Loading...</div>;
    } else if (this.state.error) {
      content = (
        <div>
          <p> {this.state.error.message}</p>
          <p>Error: {this.state.error.response.data.message || ''}</p><br />
          {<a href='this.state.error.response.data.documentation_url'>Documentation url</a> || ''}
        </div>
      );
    } else {
      content = <UserList>{users}</UserList>
    }

    return (
      <CardComponent title='Github users' content={content}/>
    );
  }
}

export default UserListComponent;