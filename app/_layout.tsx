import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="project1" options={{ title: 'Project 1: Hello World!' }} />
        <Stack.Screen name="project2" options={{ title: 'Project 2: Handling Button Taps' }} />
        <Stack.Screen name="project3" options={{ title: 'Project 3: Custom Button Component' }} />
        <Stack.Screen name="project4" options={{ title: 'Project 4: State & Props' }} />
        <Stack.Screen name="project5" options={{ title: 'Project 5: Styling with Flexbox' }} />
        <Stack.Screen name="project6" options={{ title: 'Project 6: Scrollable Views' }} />
        <Stack.Screen name="project7" options={{ title: 'Project 7: Building a Form' }} />
        <Stack.Screen name="project8" options={{ title: 'Project 8: FlatList for Long Data' }} />
        <Stack.Screen name="project9" options={{ title: 'Project 9: SectionList with Grouped Data' }} />
        <Stack.Screen name="project10" options={{ title: 'Project 10: Mini App Challenge' }} />
      </Stack>
    </ThemeProvider>
  );
}
