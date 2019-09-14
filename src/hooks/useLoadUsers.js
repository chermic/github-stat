import { useState, useEffect } from 'react';
import axiosInstance from '../axios';

const useLoadUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadUsers = async () => {
    try {
      setIsLoading(true);
      const rateLimit = await axiosInstance.head('rate_limit');
      console.log(`Api request limits: \n
        Limit: ${rateLimit.headers['x-ratelimit-limit']} \n
        Remaining: ${rateLimit.headers['x-ratelimit-remaining']} \n
        Reset: ${new Date(rateLimit.headers['x-ratelimit-reset'] * 1000)}
      `);

      const response = await axiosInstance.get('users?since=');
      setUsers(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();

  }, []);


  return { users, error, isLoading };
}

export default useLoadUsers;