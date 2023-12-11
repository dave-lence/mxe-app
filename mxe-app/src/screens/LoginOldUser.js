import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useRef, useState } from "react";
import ColorTheme from "../theme/colorTheme";
import avater from "../assets/Avatar.png";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Button } from "react-native-paper";

const LoginOldUser = ({navigation}) => {
  const CELL_COUNT = 4;
  const [pin, setPin] = useState("");
  const [activeButton, setActiveButton] = useState(null);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    pin,
    setPin,
  });
  const ref = useBlurOnFulfill({ pin, cellCount: CELL_COUNT });

  const handleNumberPress = (number) => {
    if (pin.length < 4) {
      setPin(pin + number);

      setTimeout(() => {
        setActiveButton(null);
      }, 100);
    }
  };

  const handleBackspace = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
      setTimeout(() => {
        setActiveButton(null);
      }, 100);
    }
  };
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "#", "0", "⌫", ]; // Empty string for empty space
  return (
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
          marginVertical: 40,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Button
            style={{
              backgroundColor: ColorTheme.lightBlue,
              width: 130,
              position: "relative",
              left: "30%",
              padding: 0,
              borderRadius: 8,
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
              Not David?
            </Text>
          </Button>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <Image source={avater} />
          <Text
            style={{
              alignContent: "center",
              alignItems: "center",
              marginTop: 10,
              fontWeight: "bold",
              color: ColorTheme.black,
              textAlign: "center",
            }}
          >
            Hello David{" "}
          </Text>
          <Text
            style={{
              alignContent: "center",
              alignItems: "center",
              marginTop: 10,
              color: ColorTheme.lightGray2,
              textAlign: "center",
            }}
          >
            Start building your design system with our component library{" "}
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 30 }}>
        <CodeField
          ref={ref}
          {...props}
          value={pin}
          onChangeText={setPin}
          cellCount={CELL_COUNT}
          editable={false}
          rootStyle={styles.codeFieldRoot}
          keyboardType="ascii-capable"
          secureTextEntry={true}
          textContentType="password"
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
              {symbol ? '*' : (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>

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

export default LoginOldUser;

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
    borderColor: ColorTheme.gray,
    textAlign: "center",
  },
  focusCell: {
    borderColor: ColorTheme.darkBlue,
  },
});
