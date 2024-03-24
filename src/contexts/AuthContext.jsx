import axios from 'axios';
import React, { useState, useEffect, useContext, createContext } from 'react';
import BASE_URL from '../hooks/baseUrl';

// const AuthContext = React.createContext();

// export function useAuth(){
//     return useContext(AuthContext);
// }

// export function AuthProvider(props){
//     const [authUser, setAuthUser] = useState(null);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     // useEffect(()=>{
//     //     //subscribe to auth service
//     //     const subscribe = AuthService.subscribe((user) => {
//     //         if(user){
//     //             setIsLoggedIn(true)
//     //             setAuthUser(user)
//     //         }else{
//     //             setIsLoggedIn(false)
//     //             setAuthUser(null)
//     //         }
//     //     })
//     //     return subscribe;
//     // }, [])

//     const value = {
//         authUser,
//         setAuthUser,
//         isLoggedIn,
//         setIsLoggedIn
//     }

//     return (
//         <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
//     )
// }

export const AuthContext = createContext({
  token: null,
  setToken: () => {},
  authenticated: null,
  setAuthenticated: () => {},
  wallets: null,
  setWallets: () => {},
  authUser: null,
  setAuthUser: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, _setToken] = useState(localStorage.getItem('authToken'));
  const [authenticated, setAuthenticated] = useState(false);
  const [authUser, setAuthUser] = useState();
  const [wallets, setWallets] = useState(null);

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  };

  useEffect(() => {
    token ? setAuthenticated(true) : setAuthenticated(false);
  }, [token]);

  axios.defaults.headers['Authorization'] = `Bearer ${token}`;

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        authenticated,
        setAuthenticated,
        wallets,
        setWallets,
        authUser,
        setAuthUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
