/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Button, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SubscribeScreen = (props) => {
  const [disabledDoneButton, setDisabledDoneButton] = useState(true);
  const [selectedType, setSelectedType] = useState(null);

  const handleShowCheckIcon = (type) => {
    if (selectedType === type) {
      setSelectedType(null);
      setDisabledDoneButton(true);
    } else {
      setSelectedType(type);
      setDisabledDoneButton(false);
    }
  };

  const handleCancelButton = () => {
    props.navigation.replace('GenericOnOffServer', {
      subscribe: selectedType
        ? selectedType
        : props.route.params && props.route.params.subscribe
        ? props.route.params.subscribe
        : null,
      bindAppKey:
        props.route.params && props.route.params.bindAppKey
          ? props.route.params.bindAppKey
          : null,
    });
  };

  const handleDoneButton = () => {
    props.navigation.replace('GenericOnOffServer', {
      subscribe: selectedType,
      bindAppKey:
        props.route.params && props.route.params.bindAppKey
          ? props.route.params.bindAppKey
          : null,
    });
  };

  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: '10%', flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 10,
          }}>
          <Button
            title="Cancel"
            color="#0abde3"
            onPress={() => handleCancelButton()}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 10,
          }}>
          <Button
            title="Done"
            color="#0abde3"
            disabled={disabledDoneButton}
            onPress={() => handleDoneButton()}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            color: '#0abde3',
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 20,
          }}>
          Subscribe
        </Text>
      </View>
      <View style={{backgroundColor: '#fff'}}>
        <TouchableHighlight
          style={{flexDirection: 'row', backgroundColor: '#fff'}}
          onPress={() => handleShowCheckIcon(1)}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons
                name="md-key"
                style={{fontSize: 20, color: '#2e86de'}}
              />
            </View>
            <View
              style={{
                flex: 6,
                paddingTop: 10,
                paddingBottom: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#999999',
              }}>
              <View style={{flex: 2}}>
                <Text style={{marginBottom: 5}}>On/off Together</Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 20}}>
                {selectedType === 1 ? (
                  <Ionicons
                    name="ios-checkmark"
                    style={{fontSize: 30, color: '#2e86de'}}
                  />
                ) : null}
              </View>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={{flexDirection: 'row', backgroundColor: '#fff'}}
          onPress={() => handleShowCheckIcon(2)}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons
                name="md-key"
                style={{fontSize: 20, color: '#2e86de'}}
              />
            </View>
            <View
              style={{
                flex: 6,
                paddingTop: 10,
                paddingBottom: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#999999',
              }}>
              <View style={{flex: 2}}>
                <Text style={{marginBottom: 5}}>Red Light</Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 20}}>
                {selectedType === 2 ? (
                  <Ionicons
                    name="ios-checkmark"
                    style={{fontSize: 20, color: '#2e86de'}}
                  />
                ) : null}
              </View>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={{flexDirection: 'row', backgroundColor: '#fff'}}
          onPress={() => handleShowCheckIcon(3)}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons
                name="md-key"
                style={{fontSize: 20, color: '#2e86de'}}
              />
            </View>
            <View
              style={{
                flex: 6,
                paddingTop: 10,
                paddingBottom: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#999999',
              }}>
              <View style={{flex: 2}}>
                <Text style={{marginBottom: 5}}>Blue Light</Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 20}}>
                {selectedType === 3 ? (
                  <Ionicons
                    name="ios-checkmark"
                    style={{fontSize: 20, color: '#2e86de'}}
                  />
                ) : null}
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default SubscribeScreen;
