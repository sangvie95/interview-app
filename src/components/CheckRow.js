/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckRow = (props) => {
  const [showTick, setShowTick] = useState(false);

  const handleShowCheckIcon = () => {
    setShowTick(!showTick);
    props.checkSelectKey(!showTick);
  };

  return (
    <TouchableHighlight
      style={{flexDirection: 'row', backgroundColor: '#fff'}}
      onPress={() => handleShowCheckIcon()}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Ionicons name="md-key" style={{fontSize: 20, color: '#2e86de'}} />
        </View>
        <View style={{flex: 4, paddingTop: 10, paddingBottom: 10}}>
          <Text style={{marginBottom: 5}}>{props.label}</Text>
          <Text style={{fontSize: 12, color: '#999'}}>{props.smallLabel}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 20}}>
          {showTick ? (
            <Ionicons
              name="ios-checkmark"
              style={{fontSize: 50, color: '#2e86de'}}
            />
          ) : null}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CheckRow;
