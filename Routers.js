/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/Home';
import NetworkScreen from './src/screens/Network';
import DetailNetworkItemScreen from './src/screens/DetailNetworkItem';
import NetworkKeysScreen from './src/screens/NetworkKeys';
import ApplicationKeysScreen from './src/screens/ApplicationKeys';
import ElementScreen from './src/screens/Element';
import ServerConfigScreen from './src/screens/ConfigurationServer';
import GenericOnOffServerScreen from './src/screens/GenericOnOffServer/GenericOnOffServer';
import BindApplicationKeyScreen from './src/screens/GenericOnOffServer/BindApplicationKey';
import SubscribeScreen from './src/screens/GenericOnOffServer/Subscribe';
import AddApplicationKeyScreen from './src/screens/AddApplicationKey';

const Stack = createStackNavigator();

const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Network"
          component={NetworkScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#0abde3',
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity style={{marginRight: 20}}>
                <Ionicons
                  name="ios-add"
                  style={{fontSize: 40, color: '#fff'}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DetailNetworkItem"
          component={DetailNetworkItemScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#0abde3',
            },
            headerTintColor: '#fff',
            headerBackTitle: 'Network',
          }}
        />
        <Stack.Screen
          name="NetworkKeys"
          component={NetworkKeysScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#0abde3',
            },
            headerTintColor: '#fff',
            headerBackTitle: 'Node',
          }}
        />
        <Stack.Screen
          name="ApplicationKeys"
          component={ApplicationKeysScreen}
          options={({navigation, route}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#0abde3',
            },
            headerTintColor: '#fff',
            headerBackTitle: 'Node',
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => navigation.replace('AddApplicationKey')}>
                <Ionicons
                  name="ios-add"
                  style={{fontSize: 40, color: '#fff'}}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Element"
          component={ElementScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#0abde3',
            },
            headerTintColor: '#fff',
            headerBackTitle: 'Node',
          }}
        />
        <Stack.Screen
          name="ServerConfig"
          component={ServerConfigScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#0abde3',
            },
            headerTintColor: '#fff',
            headerBackTitle: 'Element',
          }}
        />
        <Stack.Screen
          name="GenericOnOffServer"
          component={GenericOnOffServerScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#0abde3',
            },
            headerTintColor: '#fff',
            headerBackTitle: 'Element',
            headerRight: () => (
              <TouchableOpacity style={{marginRight: 20}}>
                <Text style={{color: '#fff', fontSize: 17}}>Edit</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="AddApplicationKey"
          component={AddApplicationKeyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BindApplicationKey"
          component={BindApplicationKeyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Subscribe"
          component={SubscribeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
