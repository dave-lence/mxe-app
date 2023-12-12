import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ColorTheme from "../theme/colorTheme";
import PhoneInput from "react-native-phone-number-input";
import { Button } from "react-native-paper";

const LoginNewUserScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [autoFocus, setAutoFocus] = useState(true);

  const phoneInput = useRef(null);

  const handlePhoneInputChange = (number) => {
    setPhoneNumber(number);

    // Check if the entered phone number is valid
    const isValid = phoneInput.current?.isValidNumber(number);
    setValid(isValid);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={[styles.header, { marginVertical: 10, marginTop: "15%" }]}>
          <Button
            style={{
              backgroundColor: ColorTheme.lightBlue,
              width: 195,
              position: "relative",
              left: "45%",
              padding: 0,
              borderRadius: 8,
              marginBottom: 10,
            }}
            mode="elevated"
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text
              style={{
                color: ColorTheme.darkBlue,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Create account
            </Text>
          </Button>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.descriptionText}>
            Enter your phone number to link this phone to your account
          </Text>
        </View>

        <View
          style={{
            backgroundColor: ColorTheme.white,
            borderColor: autoFocus ? ColorTheme.lightBlue2 : ColorTheme.gray,
            borderWidth: 1,
            height: 55,
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            padding: 5,
          }}
        >
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="NG"
            layout="first"
            value={phoneNumber}
            onChangeText={handlePhoneInputChange}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            countryPickerButtonStyle={{
              marginRight: -40,
            }}
            withDarkTheme
            codeTextStyle={{ height: Platform.OS === "ios" ? 18 : 22 }}
            containerStyle={{
              width: "90",
            }}
            textContainerStyle={{
              backgroundColor: "white",
            }}
            textInputProps={{
              keyboardAppearance: "dark",
              keyboardType:
                Platform.OS === "ios" ? "name-phone-pad" : "number-pad",
            }}
            autoFocus={autoFocus}
          />
        </View>

        <Text
          style={{
            fontSize: 16,
            marginTop: 18,
            color: ColorTheme.lightGray2,
          }}
        >
          Enter your phone number to link this phone to your account
        </Text>

        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            backgroundColor: !valid ? ColorTheme.darkGray : ColorTheme.darkBlue,
            borderRadius: 10,
            padding: 15,
          }}
          onPress={() => {
            if (valid) {
              console.log("Phone number is valid:", phoneNumber);
              navigation.navigate("CodeVerificationScreen");
            } else {
              Alert.alert(
                "Invalid Phone Number",
                "Please enter a valid phone number."
              );
            }
          }}
        >
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
  },
  header: {
    justifyContent: "start",
    alignItems: "start",
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 38,
    marginVertical: 5,
  },
  descriptionText: {
    fontSize: 16,

    color: ColorTheme.lightGray2,
  },
  phonecontainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginTop: 34,
  },
  input: {
    borderColor: "#CCCCCC",
    justifyContent: "center",
    width: "90%",
    height: 50,
    borderRadius: 5,
    padding: 10,

    borderWidth: 1,
  },
});

export default LoginNewUserScreen;
