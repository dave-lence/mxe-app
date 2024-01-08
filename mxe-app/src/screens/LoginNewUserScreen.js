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
import CustomButton from "../components/CustomButton";
import { ww } from "../../responsive";

const LoginNewUserScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [autoFocus, setAutoFocus] = useState(false);

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
          <CustomButton
            width={ww(154)}
            height={ww(32)}
            borderRadius={5}
            fontSize={ww(16)}
            textColor={ColorTheme.darkBlue}
            onPress={() => navigation.navigate("SignUpScreen")}
            btnTile={"Create account"}
            position={"relative"}
            left={ww(230)}
            backgroundColor={ColorTheme.lightBlue}
            custonStyle={{
              ...Platform.select({
                ios: {
                  shadowColor: "black",
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                },
                android: {
                  elevation: 10,
                },
              }),
            }}
          />

          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.descriptionText}>
            Enter your phone number to link this phone to your account
          </Text>
        </View>
        <View
          style={{
            backgroundColor: ColorTheme.white,
            borderColor: autoFocus ? ColorTheme.lightBlue2 : ColorTheme.gray,
            borderWidth: autoFocus ? 2 : 1,
            shadowColor: autoFocus ? ColorTheme.lightBlue2 : null,
            shadowOffsret: autoFocus ?  { width: 1, height: 2 } : {width: 0, height:0},
            shadowOpacity:autoFocus ? 0.25 : 0,
            shadowRadius: autoFocus ? 3.84 : 0,
            elevation: autoFocus ? 10 : 0,
            paddingHorizontal: 3,
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
            marginTop: ww(34),
          }}
        >
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="NG"
            layout="first"
            value={phoneNumber}
            disableArrowIcon={false}
            onChangeText={handlePhoneInputChange}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            countryPickerButtonStyle={{
              marginRight: -10,
              marginTop: Platform.OS === "ios" ? 1 : 0,
              width:ww(80)
            }}
            withDarkTheme
            codeTextStyle={{ height: Platform.OS === "ios" ? 16 : 22 }}
            containerStyle={{
              width: "90",
            }}
            textContainerStyle={{
              backgroundColor: "white",
              height: ww(48),
            }}
            textInputStyle={{
              height: ww(48),
            }}
            textInputProps={{
              onFocus:() => setAutoFocus(true),
              keyboardAppearance: "light",
              keyboardType:
                Platform.OS === "ios" ? "name-phone-pad" : "number-pad",
            }}
            autoFocus={autoFocus}
          />
        </View>

        <Text
          style={{
            fontSize: ww(16),
            marginTop: ww(16),
            color: ColorTheme.lightGray2,
            
          }}
        >
          Enter your phone number to link this phone to your account
        </Text>

        <TouchableOpacity
          style={{
            position: "absolute",
            top:ww(697),
            justifyContent: "center",
            alignItems: "center",
            right: ww(20),
            backgroundColor: !valid ? ColorTheme.darkGray : ColorTheme.darkBlue,
            borderRadius: 5,
            height: ww(48),
            width: ww(48),
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
    paddingHorizontal: 16,
  },
  header: {
    justifyContent: "start",
    alignItems: "start",
  },
  welcomeText: {
    fontWeight: "700",
    fontSize: ww(32),
    lineHeight:ww(38),
    marginTop: ww(14),
  },
  descriptionText: {
    fontSize: ww(16),
    lineHeight:ww(24),
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
