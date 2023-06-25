import React from 'react';
import { TouchableOpacity, Text, View, Linking } from 'react-native';

const HomeScreen = () => {
  const handleButtonPress = () => {
    Linking.openURL('https://transitapp.com/apis');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ color: 'black', fontSize: 70, fontWeight: 'bold', textAlign: 'center'}}>
        This page is under construction! I plan to use the transit API found here to make my routing:
      </Text>
      <TouchableOpacity onPress={handleButtonPress}>
        <Text style={{ color: 'blue', fontSize: 20 }}>Transit API</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
