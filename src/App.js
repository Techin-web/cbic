import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import initRoutes from './routes';
import API from './config/Axios';
import {getToken} from './services/auth';
import './config/StatusBarConfig';

import OneSignal from 'react-native-onesignal';

export default function App() {
  OneSignal.init('1ef4c2d6-706a-4d76-9241-bfc227f2390c', {
    kOSSettingsKeyAutoPrompt: true,
  });

  const [initialScreen, setInitialScreen] = useState(null);

  useEffect(() => {
    setInitialScreenHandler();
  }, []);

  const setInitialScreenHandler = async () => {
    try {
      const token = await getToken();
      if (!token) {
        throw new Error('Token não encontrado');
      }

      await API.post('/verify/' + token);

      setInitialScreen('Menu');
    } catch (err) {
      setInitialScreen('SignIn');
    }
  };

  let Routes = null;
  if (initialScreen) {
    Routes = initRoutes(initialScreen);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      {Routes ? <Routes /> : null}
    </>
  );
}
