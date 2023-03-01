/* eslint-disable no-console */
import { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import loginService from '../../api/services/login';
import useAuth from '../../hooks/useAuth';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // This is used to get where the user wanted to go before being redirected to the login page
  const from = location.state?.from?.pathname || '/';

  const userRef = useRef();
  const errRef = useRef();

  const [user, resetUser, userAttributes] = useInput('user', '');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [check, toggleCheck] = useToggle('persist', false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await loginService({ user, pwd });

      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      // setAuth({ user, pwd, roles, accessToken });

      // XXX: To emulate a successful login
      setAuth({ user, pwd, roles: ['REGULAR'], accessToken: '4444' });

      // setUser('');
      resetUser();
      setPwd('');
      navigate(from, { replace: true });
    } catch (err) {
      console.log('🚀 ~ file: Login.jsx:39 ~ handleSubmit ~ err:', err);
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing username or password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? 'errmsg' : 'offscreen'}
        aria-live='assertive'
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          Username:
          <input
            type='text'
            id='username'
            ref={userRef}
            autoComplete='off'
            {...userAttributes}
            required
          />
        </label>
        <label htmlFor='password'>
          Password:
          <input
            type='password'
            id='password'
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </label>

        <button type='submit'>Sign In</button>
        <div className='persistCheck'>
          <label htmlFor='persist'>
            <input
              type='checkbox'
              name='persist'
              id='persist'
              onClick={toggleCheck}
              checked={check}
            />
            Trust this device
          </label>
        </div>
      </form>

      <p>
        Need an Account?
        <br />
        <span className='line'>
          {/* put router link here */}
          <a href='#'>Sign Up</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
