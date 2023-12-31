import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ColorTheme from "./src/theme/colorTheme";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

import NewUserStack from "./src/navigation/NewUserStack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignUpScreenOne from "./src/screens/SignUpScreenOne";
import SignUpScreenTwo from "./src/screens/SignUpScreenTwo";
import SignUpScreenThree from "./src/screens/SignUpScreenThree";
import SignUpScreenFour from "./src/screens/SignUpScreenFour";
import SignUpScreenFive from "./src/screens/SignUpScreenFive";
import LoginNewUserScreen from "./src/screens/LoginNewUserScreen";
import LoginOldUser from "./src/screens/LoginOldUser";
import HomeMenuScreen from "./src/screens/SubScreens/HomeMenuScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    // <>
    //   <StatusBar backgroundColor={ColorTheme.white} />
    //   <HomeMenuScreen />
    // </>
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor={ColorTheme.white} />
        <NewUserStack />
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
