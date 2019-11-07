import React, {useState} from 'react';

const defaultContext = {
  token: null,
  onTokenChange: () => {},
  isAuthenticated: () => {},
  logout: () => {}
};

const AuthContext = React.createContext(defaultContext);
export default AuthContext

export const AuthContextProvider = props => {
  const [token, setToken] = useState(null);

  const updateToken = newToken => {
    console.log(`NOWY TOKEN: ${newToken}`)
    setToken(newToken)
  }

  const logout = () => {
    console.log(`Logging out...`)
    setToken(null)
  }

  const isAuthenticated  = () => Boolean(token)

  return (
    <AuthContext.Provider value={{
      token: token,
      onTokenChange: updateToken,
      isAuthenticated: isAuthenticated,
      logout: logout,
    }}>
      {console.log(token)}
      {props.children}
    </AuthContext.Provider>
  );
};
