import React, { useState, useRef } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const DisplayVerification = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const inputRefs = useRef([]);
  const digitCount = 6;

  const focusNextInput = (index) => {
    if (index < digitCount - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputChange = (text, index) => {
    if (text.length === 1) {
      focusNextInput(index);
    }
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = text;
    setVerificationCode(newVerificationCode.join(''));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Verification Code:</Text>
      <View style={styles.inputContainer}>
        {[...Array(digitCount).keys()].map((index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleInputChange(text, index)}
          />
        ))}
      </View>
      <Button title="Verify" onPress={() => verifyCode(verificationCode)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    margin: 5,
    textAlign: "center",
  },
});

export default DisplayVerification;
