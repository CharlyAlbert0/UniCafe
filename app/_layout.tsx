import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { theme } from '../constants/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === 'web') {
      document.body.style.backgroundColor = theme.colors.bg;
      document.body.style.margin = '0';
    }
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: theme.colors.bg }
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0
  }
});
