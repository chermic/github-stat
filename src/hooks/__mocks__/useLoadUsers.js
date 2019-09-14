const users = [
  {
    id: 0,
    login: 'login',
    html_url: 'https://somesite.com',
    avatar_url: 'https://someavatar.com',
  },
  {
    id: 1,
    login: 'login',
    html_url: 'https://somesite.com',
    avatar_url: 'https://someavatar.com',
  }
];

export default () => ({
  users,
  error: null,
  isLoading: false,
});