import React, {useState} from 'react';

const defaultContext = {
  token: null,
  onTokenChange: () => {},
  isAuthenticated: () => {}
};

const AuthContext = React.createContext(defaultContext);
export default AuthContext

export const AuthContextProvider = props => {
  const [token, setToken] = useState(null);

  const updateToken = newToken => {
    console.log(`NOWY TOKEN: ${newToken}`)
    setToken(newToken)
  }

  const isAuthenticated  = () => Boolean(token)

  return (
    <AuthContext.Provider value={{
      token: token,
      onTokenChange: updateToken,
      isAuthenticated: isAuthenticated,
    }}>
      {console.log(token)}
      {props.children}
    </AuthContext.Provider>
  );
};
