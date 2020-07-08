import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({ //loads fonts asynchronously 
  'roboto-regular': require('./assets/fonts/RobotoSlab-Regular.ttf'),
  'roboto-bold': require('./assets/fonts/RobotoSlab-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) { //if fonts are loadded, starts drawer navigator
    return ( 
      <Navigator />
    );
  } else { //if the fonts are not loaded 
    return (
      <AppLoading 
        startAsync={getFonts} //starts async function
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}