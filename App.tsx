/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Index from './src/routers/index';
import UserInfomation from './src/screens/User/userInfomation';
import {SplashScreen} from './src/screens/Splash/splashScreen';
import index from './src/routers';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="index"
          component={index}
          options={{headerShown: false}}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
