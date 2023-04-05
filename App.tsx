// import 'react-native-gesture-handleer';
import React, { useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import RootStack from './navigator/RootStack';

export default function App() {

  const [fontsLoaded] = useFonts({
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
     await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if(!fontsLoaded){
    return null;
  }
  else{
    SplashScreen.hideAsync();
  }

  return (
      <RootStack/>
  );
}


