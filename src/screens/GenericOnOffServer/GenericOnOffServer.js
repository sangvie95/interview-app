/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight, Switch, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import InfoRow from '../../components/InfoRow';

const GenericOnOffServerScreen = (props) => {
  const handleBindApplicationKeyButton = () => {
    props.navigation.replace('BindApplicationKey', props.route.params);
  };

  const handleSubscribeButton = () => {
    props.navigation.replace('Subscribe', props.route.params);
  };

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
          Generic OnOff Server
        </Text>
      </View>
      <View style={{flex: 1, marginTop: 30}}>
        <Text style={{color: '#999', marginLeft: 20, fontSize: 12}}>
          CONTROLS
        </Text>
        <View style={{marginBottom: 30}}>
          <InfoRow label="Model ID" value="0x1000" />
          <InfoRow label="Company" value="Bluetooth SIG" />
        </View>

        <Text style={{color: '#999', marginLeft: 20, fontSize: 12}}>
          BOUND APPLICATION KEYS
        </Text>
        {props.route.params && props.route.params.bindAppKey ? (
          <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name="md-key"
                style={{fontSize: 20, color: '#2e86de'}}
              />
            </View>
            <View
              style={{
                flex: 4,
                paddingTop: 10,
                paddingBottom: 10,
                borderBottomColor: '#999',
                borderBottomWidth: 1,
              }}>
              <Text style={{marginBottom: 5}}>
                {props.route.params.bindAppKey.name}
              </Text>
              <Text style={{fontSize: 12, color: '#999'}}>
                {props.route.params.bindAppKey.description}
              </Text>
            </View>
          </View>
        ) : null}
        <TouchableHighlight
          onPress={() => handleBindApplicationKeyButton()}
          style={{
            marginBottom: 30,
            backgroundColor: '#fff',
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          <Text style={{color: '#2e86de'}}>Bind Application Key</Text>
        </TouchableHighlight>

        <Text style={{color: '#999', marginLeft: 20, fontSize: 12}}>
          PUBLICATION
        </Text>
        <TouchableHighlight
          onPress={() => console.log('pressed')}
          style={{
            marginBottom: 30,
            backgroundColor: '#fff',
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          <Text style={{color: '#2e86de'}}>Set Publication</Text>
        </TouchableHighlight>

        <Text style={{color: '#999', marginLeft: 20, fontSize: 12}}>
          SUBSCRIPTIONS
        </Text>
        {props.route.params && props.route.params.subscribe ? (
          <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name="ios-outlet"
                style={{fontSize: 20, color: '#2e86de'}}
              />
            </View>
            <View
              style={{
                flex: 4,
                paddingTop: 10,
                paddingBottom: 10,
                borderBottomColor: '#999',
                borderBottomWidth: 1,
              }}>
              <Text style={{marginBottom: 5}}>
                {props.route.params.subscribe === 1
                  ? 'On/off Together'
                  : props.route.params.subscribe === 2
                  ? 'Red Light'
                  : props.route.params.subscribe === 3
                  ? 'Blue Light'
                  : null}
              </Text>
            </View>
          </View>
        ) : null}
        <TouchableHighlight
          onPress={() => handleSubscribeButton()}
          style={{
            marginBottom: 30,
            backgroundColor: '#fff',
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          <Text style={{color: '#2e86de'}}>Subscribe</Text>
        </TouchableHighlight>
        <ScrollView>
          <Text style={{color: '#999', marginLeft: 20, fontSize: 12}}>
            CONTROLS
          </Text>
          <View style={{marginBottom: 30, backgroundColor: '#fff'}}>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 20,
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: 'center',
              }}>
              <View style={{flex: 6}}>
                <Text>Default Transition Time and Delay</Text>
              </View>
              <View style={{flex: 1}}>
                <Switch value={true} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#999999',
                marginLeft: 20,
              }}>
              <View style={{flex: 6}}>
                <Slider
                  style={{width: 200, height: 40}}
                  minimumValue={0}
                  maximumValue={1}
                />
              </View>
              <View style={{flex: 1}}>
                <Text style={{color: '#999'}}>Default</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#999999',
                marginLeft: 20,
              }}>
              <View style={{flex: 4}}>
                <Slider
                  style={{width: 200, height: 40}}
                  minimumValue={0}
                  maximumValue={1}
                />
              </View>
              <View style={{flex: 1}}>
                <Text style={{color: '#999'}}>Immediate</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: 'center',
                marginLeft: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#999999',
              }}>
              <View style={{flex: 6}}>
                <Text>Acknowledged</Text>
              </View>
              <View style={{flex: 1}}>
                <Switch value={true} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <TouchableHighlight style={{marginRight: 40}}>
                <Text style={{color: '#2e86de'}}>ON</Text>
              </TouchableHighlight>
              <TouchableHighlight style={{marginRight: 20}}>
                <Text style={{color: '#2e86de'}}>OFF</Text>
              </TouchableHighlight>
            </View>
          </View>
          <Text style={{color: '#999', marginLeft: 20, fontSize: 12}}>
            STATUS
          </Text>
          <View style={{marginBottom: 30}}>
            <InfoRow label="Current" value="Unknown" />
            <InfoRow label="Target" value="Unknown" />
            <View
              style={{
                alignItems: 'flex-end',
                paddingRight: 20,
                backgroundColor: '#fff',
                paddingTop: 20,
                paddingBottom: 20,
              }}>
              <TouchableHighlight onPress={() => console.log('pressed')}>
                <Text style={{color: '#2e86de'}}>Read</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default GenericOnOffServerScreen;
