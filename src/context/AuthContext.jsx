import React, {useState} from 'react';

const defaultContext = {
  token: null,
  onTokenChange: () => {}
};

const AuthContext = React.createContext(defaultContext);
export default AuthContext

export const AuthContextProvider = props => {
  const [token, setToken] = useState(null);

  const updateToken = newToken => {
    console.log(`NOWY TOKEN: ${newToken}`)
    setToken(newToken)
  }

  return (
    <AuthContext.Provider value={{
      token: token,
      onTokenChange: updateToken,
    }}>
      {console.log(token)}
      {props.children}
    </AuthContext.Provider>
  );
};
