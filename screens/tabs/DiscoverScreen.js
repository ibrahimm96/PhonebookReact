import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';


const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.heading}>Discover Page:</Text>{"\n\n"}
        - The "Discover" menu item will present a gallery of Phonebook websites for users to explore.{"\n\n"}
        - Users can set their preferences to personalize the displayed sites based on their interests.{"\n\n"}
        - The app will filter and display relevant Phonebook sites according to the user's preferences.{"\n\n"}
        - Users can tap on a site to view its content within the app.{"\n\n"}
        - Users can add sites or specific posts to their favorites for easy access later.{"\n\n"}
        - The app will include a "Favorites" section where users can view their saved sites and posts.{"\n\n"}
        - Users will have the option to recommend posts from Phonebook sites to their social media accounts.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});


export default DiscoverScreen;