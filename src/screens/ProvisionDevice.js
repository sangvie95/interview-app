/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Button,
  Alert,
  Modal,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Device from '../components/Device';

Ionicons.loadFont();

const ProvisionDeviceScreen = (props) => {
  const [isShowingIndicator, setIsShowingIndicator] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [deviceList, setDeviceList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const hardCodeList = [
        {
          name: 'nRF5x Mesh Light',
          id: '07637F4B-7492-294B-9F53-A3F0E4940D46',
          address: '0x0003',
          company: 'Nordic Semiconductor ASA',
          elements: 1,
          models: 3,
        },
      ];
      setDeviceList(hardCodeList);
    }, 3000);
    return () => {
      setDeviceList([]);
      setShowMessage(false);
      setIsShowingIndicator(true);
    };
  }, []);

  const handleCancelButton = () => {
    setIsShowingIndicator(false);
  };

  const handleSelectDevice = (device) => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    setTimeout(() => {
      Alert.alert('Success', 'Provisioning complete.', [
        {text: 'OK', onPress: () => handleOkAlertButton(device)},
        {cancelable: false},
      ]);
    }, 2200);
  };

  const handleOkAlertButton = (device) => {
    props.handleClosePDS();
    props.handleChangeScreen('Network', {device: device});
  };

  return (
    <View style={{backgroundColor: '#ecf0f1'}}>
      <Modal
        animationType="slide"
        visible={props.open}
        onRequestClose={() => {
          Alert('Close');
        }}>
        <View
          style={{
            flex: 1,
            marginTop: '10%',
            backgroundColor: '#ecf0f1',
          }}>
          {showMessage ? (
            <Modal visible={true} transparent={true}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    width: '60%',
                    padding: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={{textAlign: 'center', marginBottom: 5}}>
                    Status
                  </Text>
                  <Text
                    style={{textAlign: 'center', fontSize: 12, color: '#999'}}>
                    Connecting...
                  </Text>
                </View>
              </View>
            </Modal>
          ) : null}
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Button
              title="Cancel"
              color="#0abde3"
              onPress={handleCancelButton}
            />
            {isShowingIndicator ? (
              <ActivityIndicator
                size="small"
                color="#576574"
                style={{
                  position: 'absolute',
                  right: 20,
                  top: 10,
                }}
              />
            ) : null}
          </View>
          <Text
            style={{
              color: '#0abde3',
              fontSize: 30,
              fontWeight: 'bold',
              marginLeft: 20,
              marginBottom: 10,
            }}>
            Provision Device
          </Text>
          {deviceList.length > 0 ? (
            deviceList.map((obj) => (
              <Device
                key={obj.id}
                device={obj}
                id={obj.id}
                name={obj.name}
                handleSelectDevice={handleSelectDevice}
              />
            ))
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 90,
              }}>
              <Ionicons
                name="ios-bluetooth"
                style={{fontSize: 100, color: '#999999'}}
              />
              <Text style={{marginBottom: 10, color: '#2e86de'}}>
                CAN'T SEE YOUR DEVICE?
              </Text>
              <Text style={{marginBottom: 10}}>
                1. Make sure the device is turned on and connected to a power
                source.
              </Text>
              <Text>
                2. Make sure the relevant firmware and SoftDevices are flashed.
              </Text>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default ProvisionDeviceScreen;
