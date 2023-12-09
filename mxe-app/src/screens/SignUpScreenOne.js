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

const SignUpScreenOne = ({ navigation }) => {
  const [focus, setFocus] = useState(false);
  const [focusTwo, setFocusTwo] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
          onPress={() => {
            navigation.goBack();
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
            progress={0.2}
            width={120}
            height={7}
          />
          <Text style={{ fontWeight: "400", fontSize: 16 }}>Step 1 of 5</Text>
        </View>
      </View>

      {/** name fields */}
      <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 23 }}>
        What’s your legal name?
      </Text>

      <CustomTextField
        label={"First Name"}
        onPress={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        placeHolder={"First Name"}
        onChangeText={(text) => {
          setFirstName(text);
        }}
        borderColor={focus ? ColorTheme.lightBlue2 : ColorTheme.lightGray2}
      />
      <CustomTextField
        onChangeText={(text) => setLastName(text)}
        onBlur={() => setFocusTwo(false)}
        label={"Last Name"}
        onPress={() => setFocusTwo(true)}
        onFocus={() => setFocusTwo(true)}
        placeHolder={"Last Name"}
        borderColor={focusTwo ? ColorTheme.lightBlue2 : ColorTheme.lightGray2}
      />

      <TouchableOpacity
        disabled={
          firstName == "" ? true : false && lastName == "" ? true : false
        }
        style={{
          alignSelf: "center",
          height: 48,
          width: 361,
          borderRadius: 5,
          backgroundColor:
            firstName == ""
              ? ColorTheme.darkGray
              : ColorTheme.darkBlue && lastName == ""
              ? ColorTheme.darkGray
              : ColorTheme.darkBlue,
          alignItems: "center",
          marginTop: 88,
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("SignUpScreenTwo")}
      >
        <Text style={{ color: ColorTheme.white, fontWeight: "bold" }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreenOne;

const styles = StyleSheet.create({});

const CustomTextField = ({
  onFocus,
  borderColor,
  label,
  onPress,
  onBlur,
  placeHolder,
  onChangeText,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={10}
      style={{
        marginVertical: 10,
        height: 50,
        width3: 361,
        borderWidth: 1,
        borderColor: borderColor,
        borderRadius: 5,
        padding: 3,
        paddingHorizontal: 5,
        shadowColor: onFocus ? ColorTheme.lightBlue2 : "#FFF",
        shadowRadius: onFocus ? 3 : 0,
        backgroundColor: ColorTheme.white,
        shadowOpacity: onFocus ? 0.25 : 0,
        elevation: onFocus ? 10 : 0,
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
      }}
    >
      {onFocus && (
        <Text style={{ marginBottom: 1,  color: ColorTheme.lightGray2 }}>
          {label}
        </Text>
      )}
      <TextInput
        style={{fontSize:16, width:"100%"}}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={onFocus ? "" : placeHolder}
        onChangeText={onChangeText}
      />
    </TouchableOpacity>
  );
};
