import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userExistenceStatus, setUserExistenceStatus] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState(null); 

  return (
    <UserContext.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        userExistenceStatus,
        setUserExistenceStatus,
        signedIn,
        setSignedIn,
        username, 
        setUsername, 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
