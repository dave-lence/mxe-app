import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import ColorTheme from "../theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";
import { ActivityIndicator, TextInput } from "react-native-paper";

const SignUpScreenTwo = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [progress, setProgress] = useState(0.2);
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 1) {
        setProgress((prevProgress) => (prevProgress = 0.4));
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
          />
          <Text style={{ fontWeight: "400", fontSize: 16 }}>Step 2 of 5</Text>
        </View>
      </View>

      {/** name fields */}
      <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 23 }}>
        What’s your email?
      </Text>

      <TextInput
        label="Email"
        value={email}
        blurOnSubmit={true}
        enablesReturnKeyAutomatically={true}
        activeOutlineColor={ColorTheme.lightBlue2}
        style={{ backgroundColor: ColorTheme.white, marginBottom: 10 }}
        mode="outlined"
        onChangeText={(text) => setEmail(text)}
      />

      <TouchableOpacity
        disabled={email == "" ? true : false}
        style={{
          alignSelf: "center",
          height: 48,
          width: 361,
          borderRadius: 10,
          backgroundColor:
            email == "" ? ColorTheme.darkGray : ColorTheme.darkBlue,
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
            navigation.navigate("SignUpScreenThree");
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

export default SignUpScreenTwo;

const styles = StyleSheet.create({});
