import React, { useState } from "react";
import DisplayLogin from "../../components/userVerification/DisplayLogin";
import DisplayVerification from "../../components/userVerification/DisplayVerification";

const LoginScreen = ({ onSignedIn }) => {
  const [userExists, setUserExists] = useState(false);

  const handleUserExists = (exists) => {
    setUserExists(exists);
  };

  return (
    <>
      {!userExists ? (
        <DisplayLogin onUserExists={handleUserExists} />
      ) : (
        <DisplayVerification onSignedIn={onSignedIn} />
      )}
    </>
  );
};

export default LoginScreen;