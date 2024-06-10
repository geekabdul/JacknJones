import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens

import SplashScreen from 'react-native-splash-screen';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {LogBox} from 'react-native';

import {AuthProvider} from './src/util/AuthContext';
import Login from './src/Screens/Login/Login';
import Home from './src/Screens/Home/Home';
import OrderReceived from './src/Screens/OrderReceived/OrderReceived';
import ProductDetailPage from './src/Screens/ProductDetailPage/ProductDetailPage';
import BottomTab from './src/Screens/BottomTab/BottomTab';
import CartOrder from './src/Screens/CartOrder/CartOrder';
import CartDelivery from './src/Screens/CartDelivery/CartDelivery';
import CartAddress from './src/Screens/CartAddress/CartAddress';
import Address from './src/Screens/Address/Address';
import Successfull from './src/Screens/Successfull/Successfull';
import Promotion from './src/Screens/Promotion/Promotion';
import OrderList from './src/Screens/OrderList/OrderList';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <Stack.Navigator initialRouteName={'Login'}>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="BottomTab"
                component={BottomTab}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="OrderReceived"
                component={OrderReceived}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProductDetailPage"
                component={ProductDetailPage}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="CartOrder"
                component={CartOrder}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="CartDelivery"
                component={CartDelivery}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="CartAddress"
                component={CartAddress}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Address"
                component={Address}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Successfull"
                component={Successfull}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Promotion"
                component={Promotion}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="OrderList"
                component={OrderList}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
