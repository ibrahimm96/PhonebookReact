import React from "react";
import { View, Text, ActivityIndicator, Image, StyleSheet, ScrollView } from "react-native";
import useFetchData from "../hooks/useFetchData";

const TabOneScreen = () => {
  const { textContent, imageContent, isLoading } = useFetchData();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const sortedTextContent = textContent.length > 0 ? textContent.sort((a, b) => a.timestamp - b.timestamp) : [];
  const sortedImageContent = imageContent.length > 0 ? imageContent.sort((a, b) => a.timestamp - b.timestamp) : [];

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

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>{content}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContainer: {
    flexGrow: 1, // Allows content to scroll
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
});

export default TabOneScreen;
