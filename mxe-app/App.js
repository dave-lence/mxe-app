import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ColorTheme from './src/theme/colorTheme';
import NewUserStack from './src/navigation/NewUserStack';

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor={ColorTheme.white} />
    <NewUserStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
