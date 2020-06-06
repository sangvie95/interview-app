/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import InfoRow from '../components/InfoRow';
import SelectInfoRow from '../components/SelectInfoRow';

const DetailNetworkItemScreen = (props) => {
  const handleChangeToNetworkKeyPage = () => {
    props.navigation.navigate('NetworkKeys');
  };

  const handleChangeToApplicationKeyPage = () => {
    props.navigation.navigate('ApplicationKeys');
  };

  const handleChangeToElementPage = () => {
    props.navigation.navigate('Element', {
      name: 'Element 1',
      address: props.route.params.address,
    });
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
          {props.route.params && props.route.params.name}
        </Text>
      </View>
      <View style={{marginBottom: 30}}>
        <InfoRow label="Name" value={props.route.params.name} />
      </View>
      <View style={{marginBottom: 30}}>
        <InfoRow label="Unicast Address" value={props.route.params.address} />
      </View>
      <View style={{marginBottom: 30}}>
        <SelectInfoRow
          label="Network Keys"
          value={1}
          handleSelect={handleChangeToNetworkKeyPage}
        />
        <SelectInfoRow
          label="Application Keys"
          value={0}
          handleSelect={handleChangeToApplicationKeyPage}
        />
      </View>
      <Text style={{color: '#999', marginLeft: 20, fontSize: 12}}>
        ELEMENTS
      </Text>
      <SelectInfoRow
        label={`Element 1`}
        value={`${props.route.params.models} models`}
        handleSelect={handleChangeToElementPage}
      />
    </View>
  );
};

export default DetailNetworkItemScreen;
