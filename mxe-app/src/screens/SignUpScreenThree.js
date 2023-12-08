import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ColorTheme from "../theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";
import { CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell, } from "react-native-confirmation-code-field";

const SignUpScreenThree = ({navigation}) => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "#", "0", "⌫", ];
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
            navigation.goBack()
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
            progress={0.6}
            width={120}
            height={7}
          />
          <Text style={{ fontWeight: "400", fontSize: 16 }}>Step 3 of 5</Text>
        </View>

        <Text style={{ fontWeight: "bold", fontSize: 24, marginTop: 25 }}>
          Create your 4-digit PIN{" "}
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
          Start building your design system with our component library{" "}
        </Text>
      </View>

      {/**pin fileds */}
      <View style={{paddingHorizontal:30, marginTop:18}}>
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
            {symbol ? "*" : (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      </View>


      
      <TouchableOpacity
      disabled={value.length != 4 ? true : false}
        style={{
          alignSelf: "center",
          height: 48,
          width: 361,
          borderRadius: 5,
          backgroundColor:
            value.length != 4
              ? ColorTheme.darkGray
              : ColorTheme.darkBlue,
          alignItems: "center",
          marginTop: 38,
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("SignUpScreenFour")}
      >
        <Text style={{ color: ColorTheme.white, fontWeight: "bold" }}>
          Next
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 40,
          flexWrap: "wrap",
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
    lineHeight: 47,
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
