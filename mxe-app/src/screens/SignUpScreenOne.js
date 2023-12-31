import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import ColorTheme from "../theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator, TextInput, ProgressBar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ww } from "../../responsive";

const SignUpScreenOne = ({ navigation }) => {
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [autoFocus, setAutoFocos] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 1) {
        setProgress((prevProgress) => (prevProgress = 0.2));
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [progress]);

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
            progress={progress}
            width={120}
            height={7}
            style={{
              backgroundColor: ColorTheme.lightBlue,
              height: 7,
              borderRadius: 5,
            }}
          />
          <Text style={{ fontWeight: "400", fontSize: 16 }}>Step 1 of 5</Text>
        </View>
      </View>

      {/** name fields */}
      <Text
        style={{
          fontSize: ww(24),
          lineHeight: ww(24),
          fontWeight: "700",
          marginVertical: ww(23),
        }}
      >
        What’s your legal name?
      </Text>

      <TextInput
        label="First Name"
        value={firstName}
        blurOnSubmit={true}
        error={error}
        enablesReturnKeyAutomatically={true}
        outlineStyle={{
          shadowColor: autoFocus ? ColorTheme.lightBlue2 : null,
          shadowOffsret: autoFocus
            ? { width: 1, height: 2 }
            : { width: 0, height: 0 },
          shadowOpacity: autoFocus ? 0.25 : 0,
          shadowRadius: autoFocus ? 3.84 : 0,
          elevation: autoFocus ? 10 : 0,
        }}
        activeOutlineColor={ColorTheme.lightBlue2}
        style={{ backgroundColor: ColorTheme.white, marginBottom: 10 }}
        mode="outlined"
        onChangeText={async (text) => {
          setAutoFocos(true);
          setFirstName(text);
          console.log(text);
          await AsyncStorage.setItem("firstName", text);
        }}
      />

      <TextInput
        label="Last Name"
      
        value={lastName}
        blurOnSubmit={true}
        error={error}
        enablesReturnKeyAutomatically={true}
        outlineStyle={{
          shadowColor: autoFocus ? ColorTheme.lightBlue2 : null,
          shadowOffsret: autoFocus
            ? { width: 1, height: 2 }
            : { width: 0, height: 0 },
          shadowOpacity: autoFocus ? 0.25 : 0,
          shadowRadius: autoFocus ? 3.84 : 0,
          elevation: autoFocus ? 10 : 0,
        }}
        activeOutlineColor={ColorTheme.lightBlue2}
        style={{ backgroundColor: ColorTheme.white, marginBottom: 0 }}
        mode="outlined"
        onChangeText={async (text) => {
          setLastName(text);

          await AsyncStorage.setItem("lastName", text);
        }}
      />

      <TouchableOpacity
        disabled={
          firstName == "" ? true : false && lastName == " " ? true : false
        }
        style={{
          alignSelf: "center",
          height: ww(48),
          width: "100%",
          borderRadius: 10,
          backgroundColor:
            firstName == ""
              ? ColorTheme.darkGray
              : ColorTheme.lightBlue2 && lastName == ""
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
            navigation.navigate("SignUpScreenTwo");
            setLoading(false);
          }, 1500);
        }}
      >
        {loading ? (
          <ActivityIndicator size={34} color={ColorTheme.white} />
        ) : (
          <Text style={{ color: ColorTheme.white, fontWeight: "bold" }}>
            Next
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreenOne;

const styles = StyleSheet.create({});
