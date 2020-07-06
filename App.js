import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navigator from './routes/homeStack';

const getFonts = () => Font.loadAsync({
  'roboto-regular': require('./assets/fonts/RobotoSlab-Regular.ttf'),
  'roboto-bold': require('./assets/fonts/RobotoSlab-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}