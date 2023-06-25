import React from 'react';
import {Image, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Image
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/2/23/Official_New_York_City_Subway_Map_2013_vc.jpg'}}
        style={{width: 1419, height: 1728}}
      />
    </View>
  );
};

export default HomeScreen;