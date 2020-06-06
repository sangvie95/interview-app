/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import InfoRow from '../components/InfoRow';
import SelectInfoRow from '../components/SelectInfoRow';

const ElementScreen = (props) => {
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
          {props.route.params.name ? props.route.params.name : ''}
        </Text>
      </View>
      <View style={{marginBottom: 30}}>
        <SelectInfoRow
          label="Name"
          value="No name"
          handleSelect={() => console.log('pressed!')}
        />
      </View>
      <View style={{marginBottom: 30}}>
        <InfoRow label="Unicast Address" value={props.route.params.address} />
        <InfoRow label="Location" value="Unknown" />
      </View>
      <Text style={{color: '#999', marginLeft: 20, fontSize: 12}}>MODELS</Text>
      <View style={{marginBottom: 30}}>
        <SelectInfoRow
          label="Configuration Server"
          smallLabel="Bluetooth SIG"
          value=""
          handleSelect={() => props.navigation.navigate('ServerConfig')}
        />
        <SelectInfoRow
          label="Generic OnOff Server"
          smallLabel="Bluetooth SIG"
          value=""
          handleSelect={() => props.navigation.navigate('GenericOnOffServer')}
        />
      </View>
    </View>
  );
};

export default ElementScreen;
