import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from "react-native";
import { useContext } from "react";
import useCheckUser from "../../hooks/useCheckUser";
import { UserContext } from "../../UserContext";

const DisplayLogin = () => {
  const { phoneNumber, setPhoneNumber, userExistenceStatus, setUserExistenceStatus } = useContext(UserContext);
  const [enteredNumber, setEnteredNumber] = useState('');  
  const { userExists, loading } = useCheckUser(phoneNumber);
  const [showRegistration, setShowRegistration] = useState(false)

  useEffect(() => { 
    if (phoneNumber && userExists !== undefined) {
      setUserExistenceStatus(userExists);
      if (userExists) {
        setPhoneNumber(phoneNumber);
      }
    }
  }, [userExists, phoneNumber, setUserExistenceStatus, setPhoneNumber]);

  const handlePhoneNumberChange = (input) => {
    const numericInput = input.replace(/[^0-9]/g, '');
    setEnteredNumber(numericInput);
  };

  const handlePhoneNumberSubmit = () => {
    setPhoneNumber(enteredNumber);
  };

  const handleRegistration = () => {
    navigation.navigate('DisplayRegister');
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
        {loading && <ActivityIndicator size="small" color="#0000ff" alignItems='center'/>}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={handleRegistration}
        />
        <Button
          title="Load my Site"
          onPress={handlePhoneNumberSubmit}
        />
      </View>
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
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%', 
  },
});

export default DisplayLogin;
