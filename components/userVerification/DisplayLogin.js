import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from "react-native";
import useCheckUser from "../../hooks/useCheckUser";

const DisplayLogin = ({ onUserExists }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');  
  const { userExists, loading } = useCheckUser(phoneNumber);

  useEffect(() => {
    if (phoneNumber) {
      onUserExists(userExists);
    }
  }, [userExists, phoneNumber, onUserExists]);

  const handlePhoneNumberChange = (input) => {
    setEnteredNumber(input);
  };

  const handlePhoneNumberSubmit = () => {
    setPhoneNumber(enteredNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.prefix}>+1</Text>
        <TextInput
          style={styles.input}
          value={enteredNumber}
          placeholder="Enter 10-digit Phone Number"
          keyboardType="numeric"
          onChangeText={handlePhoneNumberChange}
          maxLength={10} 
        />
        {loading && <ActivityIndicator size="small" color="#0000ff" />}
      </View>
      <Button
        title="Load my Site"
        onPress={handlePhoneNumberSubmit}
      />
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
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  prefix: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: '80%',
  },
});

export default DisplayLogin;
