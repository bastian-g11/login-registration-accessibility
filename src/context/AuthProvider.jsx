import { createContext, useState, useMemo } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem('persist')) || false
  );

  /** If your component renders the same result given the same props,
   * you can wrap it in a call to React.memo for a performance boost
   * in some cases by memoizing the result.
   * This means that React will skip rendering the component,
   * and reuse the last rendered result. */

  const value = useMemo(
    () => ({
      auth,
      setAuth,
      persist,
      setPersist,
    }),
    [auth, persist]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
