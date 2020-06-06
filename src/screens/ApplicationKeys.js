/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ApplicationKeysScreen = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#0abde3', paddingBottom: 10}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 20,
          }}>
          Application Keys
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="md-key" style={{fontSize: 100, color: '#999'}} />
        <Text style={{color: '#2e86de', marginBottom: 10}}>NO KEYS</Text>
        <Text style={{color: '#999'}}>Click + to add a new key.</Text>
      </View>
    </View>
  );
};

export default ApplicationKeysScreen;
