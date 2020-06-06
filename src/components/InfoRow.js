/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const InfoRow = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
        marginBottom: 2,
      }}>
      <View style={{flex: 1}}>
        <Text style={{marginLeft: 20}}>{props.label}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Text style={{marginRight: 20, color: '#999'}}>{props.value}</Text>
      </View>
    </View>
  );
};

export default InfoRow;
