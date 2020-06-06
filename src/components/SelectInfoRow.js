/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SelectInfoRow = (props) => {
  return (
    <TouchableHighlight
      style={{
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
        marginBottom: 2,
      }}
      onPress={() => props.handleSelect()}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={{marginLeft: 20, marginBottom: 5}}>{props.label}</Text>
          {props.smallLabel ? (
            <Text style={{marginLeft: 20, fontSize: 12, color: '#999'}}>
              {props.smallLabel}
            </Text>
          ) : null}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{marginRight: 10, color: '#999'}}>{props.value}</Text>
          <Ionicons
            name="ios-arrow-forward"
            style={{color: '#999', marginRight: 10, fontSize: 18}}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default SelectInfoRow;
