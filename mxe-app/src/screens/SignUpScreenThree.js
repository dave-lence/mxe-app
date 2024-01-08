import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import ColorTheme from "../theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { ww } from "../../responsive";

import { ActivityIndicator, ProgressBar } from "react-native-paper";

const SignUpScreenThree = ({ navigation }) => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState("");
  const [activeButton, setActiveButton] = useState(null);
  const [progress, setProgress] = useState(0.4);
  const [autoFocus, setAutoFocus] = useState(true);
  const [loading, setLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 1) {
        setProgress((prevProgress) => (prevProgress = 0.6));
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  const handleNumberPress = (number) => {
    if (value.length < 4) {
      setValue(value + number);

      setTimeout(() => {
        setActiveButton(null);
      }, 100);
    }
  };

  const handleBackspace = () => {
    if (value.length > 0) {
      setValue(value.slice(0, -1));
      setTimeout(() => {
        setActiveButton(null);
      }, 100);
    }
  };
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "#", "0", "⌫"];
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
            style={{backgroundColor:ColorTheme.lightBlue, height:7, borderRadius:5,}}
          />
          <Text style={{ fontWeight: "400", fontSize: 16 }}>Step 3 of 5</Text>
        </View>

        <Text style={{ fontWeight: "bold", fontSize: ww(24), lineHeight:ww(28), marginTop: 25 }}>
          Create your 4-digit PIN{" "}
        </Text>
        <Text
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            marginTop: 8,
            color: ColorTheme.lightGray2,
            fontSize:ww(16)
          }}
        >
          Start building your design system with our component library{" "}
        </Text>
      </View>

      {/**pin fileds */}
      <View style={{ paddingHorizontal: 30, marginTop: 18 }}>
        <CodeField
          ref={ref}
          {...props}
          caretHidden={false}
          value={value}
          editable={false}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          secureTextEntry={true}
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[
                styles.cell,
                isFocused && styles.focusCell,
                {
                  alignSelf: "center",
                  alignItems: "center",
                  alignContent: "center",
                },
              ]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol ? "*" : isFocused ? <Cursor /> : null}
            </Text>
          )}
        />
      </View>

      <TouchableOpacity
        disabled={value.length != 4 ? true : false}
        style={{
          alignSelf: "center",
          height: ww(48),
          width: '100%',
          borderRadius: 10,
          backgroundColor:
            value.length != 4 ? ColorTheme.darkGray : ColorTheme.lightBlue2,
          alignItems: "center",
          marginTop: 38,
          justifyContent: "center",
          ...Platform.select({
            ios: {
              shadowColor: 'black',
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
            navigation.navigate("SignUpScreenFour");
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 40,
          flexWrap: "wrap",
          width:"85%",
          alignSelf:"center"
        }}
      >
        {numbers.map((number, index) => (
          <TouchableOpacity
            activeOpacity={0.5}
            key={index}
            style={{
              width: 80,
              height: 80,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:
                activeButton == number
                  ? ColorTheme.darkBlue
                  : ColorTheme.lightBlue,

              margin: 5,
              borderRadius: 40,
            }}
            onPress={() => {
              setActiveButton(number);
              number === "⌫" ? handleBackspace() : handleNumberPress(number);
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color:
                  activeButton == number ? ColorTheme.white : ColorTheme.black,
              }}
            >
              {number}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SignUpScreenThree;

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 57,
    marginHorizontal: 10,
    borderRadius: 25,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: ColorTheme.darkBlue,
  },
});
