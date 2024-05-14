import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help Screen:</Text>
      <View style={styles.content}>
        <Text>- This menu provides instructions and resources for using the Phonebook solution.</Text>
        <Text>- It includes a list of available "/" commands and their descriptions.</Text>
        <Text>- Information on how to get additional assistance if needed is also provided.</Text>
        {/* Add additional sections as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    padding: 20,
  },
  content: {
    maxWidth: 300, // Limit width for better readability
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
});

export default HelpScreen;
