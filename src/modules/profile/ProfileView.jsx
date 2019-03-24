import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import imagePlaceholder from './image-placeholder.png';

import axiosInstance from '../../axios';

const snakeToNormal = str => str[0].toUpperCase() + str.slice(1).replace('_', ' ');

const ProfileContainer = styled.section`
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const UserInfo = styled.section`
  flex-basis: auto;
`;

const UserLogin = styled.h2`
  color: inherit;
  margin: 0;
  padding: 0;
  font-size: 27px;
  font-weight: bold;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  color: inherit;
`;

const Li = styled.li`
  margin: 10px 0;
  padding: 0;

  & > a {
    color: inherit;
    transition: .2s ease;

    &:hover {
      color: #7387d0;
    }
  }
`;

const AvatarBlock = styled.section`
  height: 100%;
  flex-basis: 20%;
  display: flex;
  align-items: top;
  margin-right: 20px;

  & > img {
    height: 170px;
    border-radius: 15%;

    @media (max-width: 1024px) {
      & {
        height: 115px;
      }
    }
  }
`;

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.slugs = {gists: '', starred: 'stars', followers: 'followers', following: 'following', subscriptions: '', repos: 'repositories'};
    const stateObj = Object.keys(this.slugs).reduce((accum, slug) => {
      accum[slug] = '';
      return accum;
    }, {});

    this.state = {
      error: null,
      isLoading: false,
      userLogin: this.props.match.params.login,
      userInfo: {},
      ...stateObj,
    }
  }
  
  getUserResponsesCount = () => {
    const promises = Object.keys(this.slugs).map(slug => axiosInstance.get(`users/${this.state.userLogin}/${slug}`));
    return axios.all(promises);
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

      const userInfoResponse = await axiosInstance.get(`users/${this.state.userLogin}`);
      this.setState({
        userInfo: userInfoResponse.data
      });

      const responses = await this.getUserResponsesCount();

      const stateObj = responses.reduce((accum, response) => {
        const splittedResponseUrl = response.request.responseURL.split('/')
        const responseName = splittedResponseUrl.pop();
        accum[responseName] = response.data;
        return accum;
      }, {});

      this.setState(stateObj);
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
    // TODO: Refactor this
    const list = Object.keys(this.slugs).map((slug, index) => (
      <Li key={index}>
        {snakeToNormal(slug)}: {this.state[slug].length === 0 
          ? `0`
          : this.slugs[slug] 
            ? (<a href={`https://github.com/${this.state.userLogin}?tab=${this.slugs[slug]}`} target='_blank' rel="noopener noreferrer">
                {this.state[slug].length === 30 ? 'More than 30' : this.state[slug].length}
              </a>)
            : this.state[slug].length === 30 ? 'More than 30' : this.state[slug].length
        }
      </Li>)
    );

    return (
      <ProfileContainer>
        <AvatarBlock>
          <img src={this.state.userInfo.avatar_url || imagePlaceholder} alt='avatar'/>
        </AvatarBlock>
        <UserInfo>
          <UserLogin>{this.state.userInfo.login}</UserLogin>
          <List>
            {list}
          </List>
        </UserInfo>
      </ProfileContainer>
    )
  }
}

export default ProfileView;