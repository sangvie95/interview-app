/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import CheckRow from '../../components/CheckRow';

const BindApplicationKeyScreen = (props) => {
  const [disabledDoneButton, setDisabledDoneButton] = useState(true);

  const checkSelectKey = (result) => {
    if (result) {
      setDisabledDoneButton(false);
    } else {
      setDisabledDoneButton(true);
    }
  };

  const handleCancelButton = () => {
    props.navigation.replace('GenericOnOffServer', {
      bindAppKey:
        props.route.params && props.route.params.bindAppKey
          ? props.route.params.bindAppKey
          : null,
      subscribe:
        props.route.params && props.route.params.subscribe
          ? props.route.params.subscribe
          : null,
    });
  };

  const handleDoneButton = () => {
    props.navigation.replace('GenericOnOffServer', {
      bindAppKey: {
        name: 'App Key 1',
        description: 'Bound to Primary Network Key',
      },
      subscribe:
        props.route.params && props.route.params.subscribe
          ? props.route.params.subscribe
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
          Bind Application Key
        </Text>
      </View>
      <View style={{flex: 1}}>
        <CheckRow
          label="App Key 1"
          smallLabel={'Bound to Primary Network Key'}
          checkSelectKey={checkSelectKey}
        />
      </View>
    </View>
  );
};

export default BindApplicationKeyScreen;
