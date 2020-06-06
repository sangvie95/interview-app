/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NetworkKeysScreen = (props) => {
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
          Network Keys
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: '#fff',
          }}>
          <Ionicons
            name="md-key"
            style={{fontSize: 30, color: '#2e86de', marginRight: 20}}
          />
          <Text>Primary Network Key</Text>
        </View>
      </View>
    </View>
  );
};

export default NetworkKeysScreen;
