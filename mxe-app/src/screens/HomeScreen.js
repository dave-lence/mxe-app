import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  
} from "react-native";
import React, { useState } from "react";
import ColorTheme from "../theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import FinanceScreen from "./SubScreens/FinanceScreen";
import gridPng from "../assets/grid.png";
import bell from "../assets/bell.png";

const HomeScreen = () => {
  const [activeScreen, setActiveScreen] = useState("finance");
  const toggleScreen = (screenName) => {
    setActiveScreen(screenName);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ColorTheme.lightGray3,
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: "15%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        <Image source={gridPng} style={{width:25, height:25,}}/>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            padding: 3,
            borderRadius: 50,
            backgroundColor: ColorTheme.lightGray2,
          }}
        >
          <TouchableOpacity
            style={{
              width: 88,
              borderRadius: 50,
              backgroundColor:
                activeScreen === "finance"
                  ? ColorTheme.white
                  : ColorTheme.lightGray2,
              justifyContent: "center",
              alignItems: "center",
              height: 26,
            }}
            onPress={() => toggleScreen("finance")}
          >
            <Text
              style={{
                fontWeight: activeScreen === "finance" ? "bold" : "normal",
                color:
                  activeScreen === "finance"
                    ? ColorTheme.black
                    : ColorTheme.darkSlateGray,
              }}
            >
              Finance
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 88,
              borderRadius: 50,
              backgroundColor:
                activeScreen === "wallet"
                  ? ColorTheme.white
                  : ColorTheme.lightGray2,
              justifyContent: "center",
              alignItems: "center",
              height: 26,
            }}
            onPress={() => toggleScreen("wallet")}
          >
            <Text
              style={{
                fontWeight: activeScreen === "wallet" ? "bold" : "normal",
                color:
                  activeScreen === "wallet"
                    ? ColorTheme.black
                    : ColorTheme.darkSlateGray,
              }}
            >
              Wallet
            </Text>
          </TouchableOpacity>
        </View>

        <Image source={bell} style={{width:25, height:25,}}/>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 29 }}>
        {activeScreen === "finance" ? <FinanceScreen /> : <WalletScreen />}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});



const WalletScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen 2 Content</Text>
    </View>
  );
};
