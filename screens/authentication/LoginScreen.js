import React, { useState } from "react";
import DisplayLogin from "../../components/userVerification/DisplayLogin";
import DisplayVerification from "../../components/userVerification/DisplayVerification";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const LoginScreen = ({ onSignedIn }) => {
  const { userExistenceStatus } = useContext(UserContext);

  return (
    <>
      {!userExistenceStatus ? (
        <DisplayLogin />
      ) : (
        <DisplayVerification onSignedIn={onSignedIn} />
      )}
    </>
  );
};

export default LoginScreen;