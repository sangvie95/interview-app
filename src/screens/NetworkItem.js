/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NetworkItem = (props) => {
  return (
    <TouchableHighlight
      style={{backgroundColor: '#fff', padding: 10}}
      onPress={() => props.handleSelectNetwork(props.network)}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={{width: 50, height: 50}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={{flex: 4, flexDirection: 'column'}}>
          {props.network ? (
            <>
              <Text style={{fontSize: 16, marginBottom: 10}}>
                {props.network.name}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 70}}>
                  <Text style={{color: '#999'}}>Address:</Text>
                </View>
                <View>
                  <Text style={{color: '#999'}}>{props.network.address}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 70}}>
                  <Text style={{color: '#999'}}>Company:</Text>
                </View>
                <View>
                  <Text style={{color: '#999'}}>{props.network.company}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 70}}>
                  <Text style={{color: '#999'}}>Elements:</Text>
                </View>
                <View>
                  <Text style={{color: '#999'}}>{props.network.elements}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 70}}>
                  <Text style={{color: '#999'}}>Models:</Text>
                </View>
                <View>
                  <Text style={{color: '#999'}}>{props.network.models}</Text>
                </View>
              </View>
            </>
          ) : null}
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Ionicons
            name="ios-arrow-forward"
            style={{fontSize: 20, color: '#999'}}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default NetworkItem;
