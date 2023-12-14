import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ww } from "../../../responsive";
import { MaterialIcons } from "@expo/vector-icons";
import cancelIcon from "../../assets/Left Icon.png";

const HomeMenuScreen = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: ww(16) }}>
      <TouchableOpacity style={{ marginTop: ww(56) }}>
        <Image
          source={cancelIcon}
        
          style={{ height: ww(100), width: ww(100) }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeMenuScreen;
