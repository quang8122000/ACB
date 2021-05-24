import * as React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HomeScreen from '../screens/Home';
import UserInfomation from '../screens/User/userInfomation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Index = (props: any) => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: 'red'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <FontAwesome name="home" color={'black'} size={wp(6)} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserInfomation}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="user" color={'black'} size={wp(6)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Index;
