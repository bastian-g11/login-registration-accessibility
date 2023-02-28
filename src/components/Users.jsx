/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

// import useRefreshToken from '../hooks/useRefreshToken';

const Users = () => {
  const [users, setUsers] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  //   Handling an expired refresh token
  const navigate = useNavigate();
  const location = useLocation();
  //   const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;
    // To cancel the request if the component unmounts
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/users', {
          signal: controller.signal,
        });
        console.log(
          '🚀 ~ file: Users.jsx:18 ~ getUsers ~ response:',
          response?.data
        );
        if (isMounted) setUsers(response.data);
      } catch (err) {
        console.log('🚀 ~ file: Users.jsx:24 ~ getUsers ~ err:', err);
        // With this, if they are redirected to the login from the admin page(let's say)
        // once they log in again, they will be redirected to the admin page (where they were going to)
        navigate('/login', { state: { from: location }, replace: true });
      }
    };
    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>Users list</h2>
      {users?.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user?.name}</li>
          ))}
        </ul>
      ) : (
        <p> No users to display</p>
      )}
      {/* <button
        type='button'
        onClick={() => {
          refresh();
        }}
      >
        Refresh
      </button>
      <br />
      <br /> */}
    </article>
  );
};

export default Users;
