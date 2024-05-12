import React from "react";
import { View, Text, ActivityIndicator, Image, StyleSheet } from "react-native";
import useFetchData from "../hooks/useFetchData";

// TabOne displays page of user's phonebook page. 
// Needs better layout of text, images---for now bare minimum. 
// FlatList will most likely be used in future. 

const TabOneScreen = () => {

  //Calls fetch data method:
  const { textContent, imageContent, isLoading } = useFetchData();

  // Makes sure Data is fetched before screen rendering, bypasses errors related to undefined data.
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Sorts text content by timestamp
  const sortedTextContent = textContent.length > 0 ? textContent.sort((a, b) => a.timestamp - b.timestamp) : [];

  // Sorts image content by timestamp
  const sortedImageContent = imageContent.length > 0 ? imageContent.sort((a, b) => a.timestamp - b.timestamp) : [];

// Pushes each text, image into content array. Order is based on timestamp.
const content = [];
let textIndex = 0;
let imageIndex = 0;

while (textIndex < sortedTextContent.length || imageIndex < sortedImageContent.length) {
  if (textIndex < sortedTextContent.length && (imageIndex === sortedImageContent.length || sortedTextContent[textIndex].timestamp <= sortedImageContent[imageIndex].timestamp)) {
    content.push(
      <View key={`text-${textIndex}`} style={styles.contentContainer}>
        <Text style={styles.text}>{sortedTextContent[textIndex].text}</Text>
        <Text style={styles.timestamp}>{sortedTextContent[textIndex].timestamp.toLocaleString()}</Text>
      </View>
    );
    textIndex++;
  } else {
    content.push(
      <View key={`image-${imageIndex}`} style={styles.contentContainer}>
        <Image source={{ uri: sortedImageContent[imageIndex].url }} style={styles.image} />
        <Text style={styles.timestamp}>{sortedImageContent[imageIndex].timestamp.toLocaleString()}</Text>
      </View>
    );
    imageIndex++;
  }
}


  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
    padding: 10,
  },
  imageContainer: {
    marginBottom: 20,
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
    marginTop: 5, // Add margin between text and timestamp
  },
});

export default TabOneScreen;

