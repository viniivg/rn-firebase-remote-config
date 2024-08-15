import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';

export default function App() {
  const config = remoteConfig();
  const [showMessage, setShowMessage] = useState(false);
  const [stringMessage, setStringMessage] = useState('');
  const [numberMessage, setNumberMessage] = useState(0);

  const fetchRemoteConfig = async () => {
    await config.fetchAndActivate();
    setShowMessage(config.getValue('show_message').asBoolean());
    setStringMessage(config.getValue('string_message').asString());
    setNumberMessage(config.getValue('number_message').asNumber());
  };

  useEffect(() => {
    const unsubscribe = config.onConfigUpdated((event, error) => {
      if (!error) {
        fetchRemoteConfig();
      }
    });

    config.setConfigSettings({minimumFetchIntervalMillis: 0});
    config.setDefaults({
      show_message: false,
      string_message: 'Vini',
      number_message: 20,
    });

    fetchRemoteConfig();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {showMessage && (
        <Text>Essa mensagem é visualizada pela regra do Firebase</Text>
      )}
      <Text>Este é o valor da string: {stringMessage}</Text>
      <Text>Este é o valor do number: {numberMessage}</Text>
    </View>
  );
}
