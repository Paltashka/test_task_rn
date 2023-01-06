import { useState, useEffect } from 'react';
import NavigationManager from './src/navigation/app-navigator';
import * as Font from 'expo-font';
import store from './src/state/store'
import { Provider } from 'react-redux'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
      'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    fontsLoaded ?
      <Provider store={store}>
        <NavigationManager />
      </Provider> :
      null
  );
}