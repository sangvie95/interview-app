/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import NetworkItem from './NetworkItem';

const NetworkScreen = (props) => {
  const handleSelectNetwork = (device) => {
    props.navigation.navigate('DetailNetworkItem', device);
  };

  return (
    <View>
      <View style={{backgroundColor: '#0abde3', paddingBottom: 10}}>
        <Text
          style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 20,
          }}>
          Network
        </Text>
      </View>
      <View>
        {props.route.params && props.route.params.device ? (
          <NetworkItem
            network={props.route.params.device}
            handleSelectNetwork={handleSelectNetwork}
          />
        ) : null}
      </View>
    </View>
  );
};

export default NetworkScreen;
