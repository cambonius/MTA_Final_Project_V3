import * as React from 'react';
import {Button,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SubwayPage from './SubwayPage';
import BusPage from './BusPage';
import MapPage from './MapPage'
import RoutePlannerPage from './RoutePlannerPage'

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
     <View >
            <Button
                title ="Subway Page"
                onPress={() =>
                navigation.navigate('SubwayPage')
                }
            />
              <Button
                title ="Bus Page"
                onPress={() =>
                navigation.navigate('BusPage')
                }
            />
             <Button
                title ="NYC Subway Map"
                onPress={() =>
                navigation.navigate('MapPage')
                }
            />
            <Button
                title ="NYC Route Planner"
                onPress={() =>
                navigation.navigate('RoutePlannerPage')
                }
            />
      </View>
      
    );
  };

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="SubwayPage" component={SubwayPage} />
        <Stack.Screen name="BusPage" component={BusPage} />
        <Stack.Screen name="MapPage" component={MapPage} />
        <Stack.Screen name="RoutePlannerPage" component={RoutePlannerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;