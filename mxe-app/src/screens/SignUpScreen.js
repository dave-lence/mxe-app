import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useRef, useState } from "react";
import ColorTheme from "../theme/colorTheme";
import PhoneInput from "react-native-phone-number-input";
import CustomButton from "../components/CustomButton";
import appLogo from "../assets/apple.png";
import googleLogo from "../assets/googlelog.png";

const SignUpScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
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
    <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
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
          marginVertical: 10,
          justifyContent: "start",
          alignItems: "start", 
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            height: 35,
            width: 100,
            marginTop: 40,
            backgroundColor: ColorTheme.lightBlue,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate('LoginOldUser')}
        >
          <Text style={{ color: ColorTheme.darkBlue, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>
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
        withDarkTheme
        codeTextStyle={{ height: 22 }}
        containerStyle={{
          borderColor: ColorTheme.darkGray,
          width: "90",
          borderRadius: 6,
          marginTop: 30,
        }}
        textContainerStyle={{
          backgroundColor: ColorTheme.white,
          borderColor: ColorTheme.darkGray,
          borderWidth: 1,
          height: 55,
          borderRadius: 6,
        }}
         textInputProps={{keyboardAppearance:"dark", keyboardType: Platform.OS === 'ios' ? "name-phone-pad" : "number-pad"}}
        autoFocus={false}
      />

      {/**btn */}
      <View style={{ marginTop: 20 }}>
        <CustomButton
           
          disabled={valid ? false : true}
          width={"100%"}
          textColor={ColorTheme.white}
          height={48}
          backgroundColor={valid ? ColorTheme.darkBlue : ColorTheme.gray}
          btnTile={"Get Started"}
          onPress={() => {
            navigation.navigate('SignUpScreenOne', )
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 30,
        }}
      >
        <View
          style={{ flex: 1, height: 1, backgroundColor: ColorTheme.lightGray }}
        ></View>
        <Text style={{ marginHorizontal: 20, color: ColorTheme.lightGray }}>
          Or
        </Text>
        <View
          style={{ flex: 1, height: 1, backgroundColor: ColorTheme.lightGray }}
        ></View>
      </View>

      {/**sign up option buttons */}
      <SignUpCustomBtn
        logoPath={appLogo}
        backgroundColor={ColorTheme.black}
        borderColor={ColorTheme.black}
        signUpText={"Continue with Apple"}
        textColor={ColorTheme.white}
      />
      <SignUpCustomBtn
        logoPath={googleLogo}
        backgroundColor={ColorTheme.white}
        borderColor={ColorTheme.black}
        signUpText={"Continue with Google"}
        textColor={ColorTheme.black}
      />

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 30,
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
        borderRadius: 5,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
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
