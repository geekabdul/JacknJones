import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useAuth} from '../../util/AuthContext';
import Orders from '../Orders/Orders';
import Discovery from '../Discovery/Discovery';
import Mystore from '../Mystore/Mystore';
import {PRIMARY} from '../../values/Colors';
export default function BottomTab(props) {
  const Tab = createBottomTabNavigator();
  const {user, login} = useAuth();

  console.log(user, 'userrrr');

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: PRIMARY,

        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Discovery"
        {...props}
        component={Discovery}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Feather name="compass" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Feather name="box" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Mystore"
        component={Mystore}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <FontAwesome5 name="store" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
