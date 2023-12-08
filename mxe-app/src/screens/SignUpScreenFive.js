import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ColorTheme from "../theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";

const SignUpScreenFive = ({navigation}) => {
  const [focus, setFocus] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: ColorTheme.white,
      }}
    >
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity
          style={{
            backgroundColor: ColorTheme.white,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={ColorTheme.black}
          />
        </TouchableOpacity>

        {/** progress bar and text */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <ProgressBar
            color={ColorTheme.lightBlue2}
            progress={1}
            width={120}
            height={7}
          />
          <Text style={{ fontWeight: "400", fontSize: 16 }}>Step 5 of 5</Text>
        </View>

        <Text style={{ fontWeight: "bold", fontSize: 24, marginTop: 25 }}>
          Create an MXE Tag{" "}
        </Text>
        <Text
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            marginTop: 8,
            color: ColorTheme.lightGray2,
          }}
        >
          An MXE tag is your unique identifier, making it easier for others to
          find and transact with you.{" "}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => setFocus(true)}
        activeOpacity={10}
        style={{
          marginTop: 24,
          height: 50,
          width3: 361,
          borderWidth: 1,
          borderColor: focus ? ColorTheme.lightBlue2 : ColorTheme.lightGray2,
          borderRadius: 5,
          padding: 3,
          paddingHorizontal: 5,
          shadowColor: focus ? ColorTheme.lightBlue2 : "#FFF",
          shadowRadius: focus ? 3 : 0,
          backgroundColor: ColorTheme.white,
          shadowOpacity: focus ? 4 : 0,
          elevation: focus ? 10 : 0,
          shadowOffset: {
            width: 0,
            height: 0.5,
          },
        }}
      >
        {focus && (
          <Text style={{ marginBottom: 1, color: ColorTheme.lightGray2 }}>
            @ tag
          </Text>
        )}
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={focus ? "" : "@ tag"}
          onChangeText={(text) => setUserName(text)}
        />
      </TouchableOpacity>

      <TouchableOpacity
      disabled={userName == "" ? true : false}
        style={{
          alignSelf: "center",
          height: 48,
          width: 361,
          borderRadius: 5,
          backgroundColor:
            userName == "" ? ColorTheme.darkGray : ColorTheme.darkBlue,
          alignItems: "center",
          marginTop: 88,
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("LoginNewUser")}
      >
        <Text style={{ color: ColorTheme.white, fontWeight: "bold" }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreenFive;

const styles = StyleSheet.create({});
