/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import InfoRow from '../components/InfoRow';

const ServerConfigScreen = (props) => {
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
          Configuration Server
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{color: '#999', marginLeft: 20, fontSize: 12}}>
          CONTROLS
        </Text>
        <View style={{marginBottom: 30}}>
          <InfoRow label="Model ID" value="0x0000" />
          <InfoRow label="Company" value="Bluetooth SIG" />
        </View>
      </View>
    </View>
  );
};

export default ServerConfigScreen;
