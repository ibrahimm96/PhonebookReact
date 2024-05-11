import React from 'react';
import { View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native';
import useFetchData from '../hooks/useFetchData';

const MyComponent = () => {
  const { textContent, imageContent, isLoading } = useFetchData();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Render alternating text and image content
  const content = [];
  for (let i = 0; i < Math.max(textContent.length, imageContent.length); i++) {
    if (textContent[i]) {
      content.push(<Text style={styles.text} key={`text-${i}`}>{textContent[i]}</Text>);
    }
    if (imageContent[i] && imageContent[i].length > 0) {
      content.push(
        <View style={styles.imageContainer} key={`image-${i}`}>
          <Image source={{ uri: imageContent[i][0] }} style={styles.image} />
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default MyComponent;
