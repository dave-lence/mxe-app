import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ww } from "../../responsive";
import ColorTheme from "../theme/colorTheme";
import ads from "../assets/ADS.png";


const HomeCarouselCard = ({key}) => {
  return (
    <View
       key={key}
      style={{
        marginTop: ww(30),
        overflow: "hidden",
        alignSelf: "center",
        width: "100%",
        alignItems:"center"
      }}
    >
      <View
        style={{
          height: ww(120),
          width: "90%",
          overflow: "hidden",
          borderRadius: 33,
          backgroundColor: ColorTheme.black,
          position: "relative",
        }}
      >
        <View style={{ position: "absolute", top: ww(20), left: ww(25) }}>
          <Text
            style={{
              color: ColorTheme.white,
              width: ww(215),
              marginBottom: ww(15),
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Secure Online Transaction with MXE Virtual Card
          </Text>
          <TouchableOpacity
            style={{
              height: ww(32),
              width: ww(117),
              borderRadius: 8,
              backgroundColor: ColorTheme.lightBlue,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: ww(16) }}>
              I want one!
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: "absolute",
            top: 2,
            width: ww(121),
            left: ww(135),
            height: ww(120),
          }}
        >
          <Image source={ads} style={{ width: ww(250), height: ww(118) }} />
        </View>
      </View>
    </View>
  );
};

export default HomeCarouselCard;
