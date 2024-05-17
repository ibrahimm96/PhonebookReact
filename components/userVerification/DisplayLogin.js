import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import useCheckUser from "../../hooks/useCheckUser";

const DisplayLogin = ({ showContent }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const userExists = useCheckUser(phoneNumber);

  const handlePhoneNumberChange = (input) => {
    const cleanedInput = input.replace(/\D/g, ''); 
    if (cleanedInput.length <= 10) {
      setPhoneNumber(cleanedInput);
    } else {
      console.log('Invalid phone number', 'Phone number must be exactly 10 digits.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.phoneNumberContainer}>
        <Text style={styles.prefix}>+1</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          placeholder="Enter 10-digit Phone Number"
          keyboardType="numeric"
          maxLength={10} // Limit the input to 10 characters
        />
      </View>
      {userExists === null && <Text>Checking user existence...</Text>}
      {userExists === true && <Text>User exists!</Text>}
      {userExists === false && <Text>User does not exist!</Text>}
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
