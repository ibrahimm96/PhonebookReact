import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';
import DisplayLogin from "../../components/userVerification/DisplayLogin";
import DisplayVerification from "../../components/userVerification/DisplayVerification";

const LoginScreen = () => {
  const [userExists, setUserExists] = useState(false);

  const handleUserExists = (exists) => {
    setUserExists(exists);
  };

  return (
    <View style={styles.container}>
      {userExists ? (
        <DisplayVerification />
      ) : (
        <DisplayLogin onUserExists={handleUserExists} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default LoginScreen;
