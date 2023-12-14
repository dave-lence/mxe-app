import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import ColorTheme from "../theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator, TextInput, Snackbar, ProgressBar, } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ww } from "../../responsive";


const SignUpScreenFive = ({ navigation }) => {
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0.8);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [generatedUsername, setGeneratedUsername] = useState([]);

  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 1) {
        setProgress((prevProgress) => (prevProgress = 1));
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  const getItemFromAsyncStorage = async () => {
    try {
      const firstName = await AsyncStorage.getItem("firstName");
      const lastName = await AsyncStorage.getItem("lastName");
      if (firstName && lastName !== null) {
        // Value has been successfully retrieved
        console.log("Retrieved value:", firstName + lastName);
        setFirstName(firstName);
        setLastName(lastName);
      } else {
        // No value stored under the given key
        console.log("No value stored under the specified key.");
        return null;
      }
    } catch (error) {
      // Error retrieving data
      console.error("Error retrieving item:", error);
      return null;
    }
  };

  useEffect(() => {
    getItemFromAsyncStorage();
  }, []);

  const generateRandomUsername = (text) => {
    const adjectives = firstName + lastName;

    const words = text.trim().split(' ');

    

    const generatedNames = [];
    for (let i = 0; i < 3; i++) {
      const randomAdjective =
        adjectives[Math.floor(Math.random() * adjectives.length)];

      generatedNames.push(`${randomAdjective}${words}`);
    }
    return generatedNames;
  };

  const handleTextChange = (text) => {
    setUserName(text);
    const randomUsername = generateRandomUsername(text);
    setGeneratedUsername(randomUsername);
  };

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
            style={{backgroundColor:ColorTheme.lightBlue, height:7, borderRadius:5,}}
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

      <TextInput
        label="@"
        value={userName}
        error={error}
        blurOnSubmit={true}
        enablesReturnKeyAutomatically={true}
        activeOutlineColor={ColorTheme.lightBlue2}
        style={{ backgroundColor: ColorTheme.white, marginVertical: 20 }}
        mode="outlined"
        onChangeText={handleTextChange}
      />

      <View
        style={{
          width: 400,
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        {generatedUsername.map((username, index) => (
          <TouchableOpacity
            onPress={() => setUserName(username)}
            style={{
              backgroundColor: ColorTheme.lightBlue,
              borderRadius: 15,
              paddingHorizontal:20,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
            key={index}
          >
            <Text>{username}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        disabled={userName == "" ? true : false}
        style={{
          alignSelf: "center",
          height: ww(48),
          width: '100%',
          borderRadius: 10  ,
          backgroundColor:
            userName == "" ? ColorTheme.darkGray : ColorTheme.lightBlue2,
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
          if (!userName.startsWith("@")) {
            setError(true);
            setVisible(true);
          } else {
            setLoading(true);
            setTimeout(() => {
              navigation.navigate("BottomNav");
              setLoading(false);
            }, 1500);
          }
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

      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        icon={"error"}
        elevation={5}
        role="alert"
        duration={5000}
        style={{width:"100%", alignSelf:"center"}}
        action={{
          label: "Okay",
          onPress: onDismissSnackBar,
        }}
      >
        User name must contain '@' character as the first character.
      </Snackbar>
    </View>
  );
};

export default SignUpScreenFive;

const styles = StyleSheet.create({});
