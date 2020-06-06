/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Device = (props) => {
  return (
    <TouchableHighlight
      style={{backgroundColor: '#fff', padding: 10}}
      onPress={() => props.handleSelectDevice(props.device)}>
      <View style={{flexDirection: 'row'}}>
        <View>
          {props.device ? (
            <>
              <Text style={{marginBottom: 7}}>{props.device.name}</Text>
              <Text style={{color: '#999', fontSize: 12}}>
                {props.device.id}
              </Text>
            </>
          ) : null}
        </View>

        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            right: 10,
            top: 10,
          }}>
          <Ionicons
            name="md-cellular"
            style={{
              marginLeft: 20,
              fontSize: 20,
            }}
          />
          <Ionicons
            name="ios-arrow-forward"
            style={{
              marginLeft: 20,
              fontSize: 20,
            }}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Device;
