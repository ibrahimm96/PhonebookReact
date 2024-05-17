import React from "react";
import { View, Text, ActivityIndicator, Image, StyleSheet, ScrollView, TextInput, Button, Alert, RefreshControl} from "react-native";
import { useState, useCallback } from "react";
import DisplayLogin from "../components/userVerification/DisplayLogin";
import DisplayUserPhonebook from "../components/DisplayUserPhonebook"

const ConnectScreen = () => {
  const [showContent, setShowContent] = useState(false);
  
  const handleUsernameSubmit = () => {
    console.log("Username submitted from ConnectScreen");
  };

  return (
    <View style={styles.container}>
      <DisplayLogin onUsernameSubmit={handleUsernameSubmit} /> 
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContainer: {
    flexGrow: 1, 
  },
  contentContainer: {
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
  },
  timestamp: {
    fontSize: 8,
    textAlign: "center",
    marginTop: 5,
  },
  input: {
    width: 200, 
    height: 40, 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

export default ConnectScreen;
