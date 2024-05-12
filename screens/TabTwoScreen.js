import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import useFetchData from '../hooks/useFetchData';

// Barebones display of data from user_pref
// Needs better UI design
const TabTwoScreen = () => {
  const { userPreferences, isLoading } = useFetchData();
  
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator/>
      </View>
    );
  }

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingBottom: 10, paddingTop:10}}>User Preferences:</Text>
      <FlatList
        data={Object.entries(userPreferences)}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>{item[0]}: </Text>
            <Text>{item[1]}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TabTwoScreen;
