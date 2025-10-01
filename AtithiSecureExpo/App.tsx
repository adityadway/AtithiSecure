import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-Bold': Poppins_700Bold,
    'Poppins': Poppins_400Regular, // Default Poppins
    'Figma Hand': Kalam_400Regular, // Using Kalam as Figma Hand alternative
    'Kalam-Regular': Kalam_400Regular,
    'Kalam-Bold': Kalam_700Bold,
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      console.log('✅ Fonts loaded successfully');
      SplashScreen.hideAsync();
    }
    if (fontError) {
      console.log('❌ Font loading error:', fontError);
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    console.log('⏳ Waiting for fonts to load...');
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
