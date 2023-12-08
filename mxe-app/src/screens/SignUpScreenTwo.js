import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import ColorTheme from "../theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";

const SignUpScreenTwo = ({navigation}) => {
  const [focus, setFocus] = useState(false);
  const [email, setEmail] = useState("");
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: ColorTheme.white,
        paddingHorizontal: 15,
      }}
    >
      <View style={{ marginTop: 40 }}>
        <TouchableOpacity
          style={{
            backgroundColor: ColorTheme.white,
            borderRadius: 10,
          }}
          onPress={() => {navigation.goBack()}}
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
            progress={0.4}
            width={120}
            height={7}
          />
          <Text style={{ fontWeight: "400", fontSize: 16 }}>Step 2 of 5</Text>
        </View>
      </View>

      {/** name fields */}
      <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 23 }}>
        What’s your email?
      </Text>

      <TouchableOpacity
        onPress={() => setFocus(true)}
        activeOpacity={10}
      
        style={{
          marginVertical: 10,
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
          shadowOpacity: focus ? 0.50 : 0,
          elevation: focus ? 10 : 0,
          shadowOffset: {
            width: 0,
            height: 0.5,
          },
        }}
      >
        {focus && (
          <Text style={{ marginBottom: 1, color: ColorTheme.lightGray2 }}>
            Email address
          </Text>
        )}
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={focus ? "" : "Your Email"}
          onChangeText={(text) => setEmail(text)}
        />
      </TouchableOpacity>

      <TouchableOpacity
      disabled={email == " " ? true : false}
        style={{
          alignSelf: "center",
          height: 48,
          width: 361,
          borderRadius: 5,
          backgroundColor:
            email == "" ? ColorTheme.darkGray : ColorTheme.darkBlue,
          alignItems: "center",
          marginTop: 88,
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("SignUpScreenThree")}
      >
        <Text style={{ color: ColorTheme.white, fontWeight: "bold" }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreenTwo;

const styles = StyleSheet.create({});
