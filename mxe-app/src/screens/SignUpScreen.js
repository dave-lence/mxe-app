import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import React, { useRef, useState } from "react";
import ColorTheme from "../theme/colorTheme";
import PhoneInput from "react-native-phone-number-input";
import appLogo from "../assets/apple.png";
import googleLogo from "../assets/googlelog.png";
import { Button } from "react-native-paper";

const SignUpScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [autoFocus, setAutoFocus] = useState(true);
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef(null);

  const handlePhoneInputChange = (number) => {
    setPhoneNumber(number);

    // Check if the entered phone number is valid
    const isValid = phoneInput.current?.isValidNumber(number);
    setValid(isValid);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: ColorTheme.white,
          paddingHorizontal: 15,
        }}
      >
        {/** header */}
        <View
          style={{
            marginTop: "15%",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Button
            style={{
              backgroundColor: ColorTheme.lightBlue,
              width: 130,
              position: "relative",
              left: "60%",
              padding: 0,
              borderRadius: 8,
            }}
            mode="elevated"
            onPress={() => navigation.navigate("LoginOldUser")}
          >
            <Text
              style={{
                color: ColorTheme.darkBlue,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Login
            </Text>
          </Button>

          <Text style={{ fontWeight: "bold", fontSize: 34, marginVertical: 5 }}>
            Create your account
          </Text>
          <Text
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              marginTop: 10,
              color: ColorTheme.lightGray2,
            }}
          >
            Start building your design system with our component library{" "}
          </Text>
        </View>

        {/**phone */}

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
            codeTextStyle={{ height: Platform.OS === "ios" ? 18 : 22}}
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

        {/**btn */}
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            disabled={valid ? false : true}
            style={{
              alignSelf: "center",
              height: 48,
              width: 361,
              borderRadius: 10,
              backgroundColor: !valid
                ? ColorTheme.darkGray
                : ColorTheme.lightBlue2,
              alignItems: "center",
              marginTop: 38,
              justifyContent: "center",
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
            onPress={() => {
              setLoading(true);
              setTimeout(() => {
                navigation.navigate("SignUpVerification");
                setLoading(false);
              }, 1500);
            }}
          >
            {loading ? (
              <ActivityIndicator size={34} color={ColorTheme.white} />
            ) : (
              <Text style={{ color: ColorTheme.white, fontWeight: "bold" }}>
                Get Started
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
            marginTop:20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: ColorTheme.lightGray,
            }}
          ></View>
          <Text style={{ marginHorizontal: 20, color: ColorTheme.lightGray }}>
            Or
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: ColorTheme.lightGray,
            }}
          ></View>
        </View>

        {/**sign up option buttons */}

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: ColorTheme.black,
            justifyContent: "center",
            height: 48,
            marginVertical:20,
            borderRadius: 10,
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
        >
          <Image
            source={appLogo}
           
            style={{ position: "absolute", left: 10,  height:24 , width:24 }}
          />
          <Text style={{ fontWeight: "bold", color: ColorTheme.white }}>
            Continue with Apple
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: ColorTheme.white,
            borderColor: ColorTheme.black,
            justifyContent: "center",
            height: 48,
            borderRadius: 10,
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
        >
          <Image
            source={googleLogo}
           
            style={{ position: "absolute", left: 10, height:24 , width:24}}
          />
          <Text style={{ fontWeight: "bold" }}>Continue with Google</Text>
        </TouchableOpacity>

        <View
          style={{
            // position: "absolute",
            // left: 0,
            // right: 0,
            // bottom: 30,
            marginTop: "50%",
            paddingHorizontal: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "center", color: ColorTheme.lightGray2 }}>
            By continuing, you agree to our{" "}
            <Text style={{ color: ColorTheme.darkBlue }}>Terms of Service</Text>{" "}
            and{" "}
            <Text style={{ color: ColorTheme.darkBlue }}>Privacy Policy.</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});

const SignUpCustomBtn = ({
  signUpText,
  backgroundColor,
  textColor,
  logoPath,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        backgroundColor: backgroundColor,

        borderColor: borderColor,
        borderWidth: 1,
      }}
    >
      <Image source={logoPath} style={{ height: 30, width: 30 }} />
      <Text
        style={{
          color: textColor,
          fontWeight: "bold",
          textAlign: "center",
          marginLeft: 30,
          alignSelf: "center",
        }}
      >
        {signUpText}
      </Text>
    </TouchableOpacity>
  );
};
