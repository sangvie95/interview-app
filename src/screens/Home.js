/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Button, View, Text} from 'react-native';
import ProvisionDeviceScreen from './ProvisionDevice';

function HomeScreen({navigation}) {
  const [openProvisionDeviceScreen, setOpenPDS] = useState(false);

  useEffect(() => {
    return () => {
      setOpenPDS(false);
    };
  }, []);

  const handleClosePDS = () => {
    setOpenPDS(false);
  };

  const handleChangeScreen = (screen, params) => {
    navigation.navigate(screen, params);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go to Provision Device" onPress={() => setOpenPDS(true)} />
      <ProvisionDeviceScreen
        open={openProvisionDeviceScreen}
        navigation={navigation}
        handleClosePDS={handleClosePDS}
        handleChangeScreen={handleChangeScreen}
      />
    </View>
  );
}

export default HomeScreen;
