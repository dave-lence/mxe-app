import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import ColorTheme from "../theme/colorTheme";
import avater from "../assets/Avatar.png";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { ActivityIndicator, Modal } from "react-native-paper";
import CustomButton from "../components/CustomButton";
import { ww } from "../../responsive";
import { BlurView } from "expo-blur";

const LoginOldUser = ({ navigation }) => {
  const CELL_COUNT = 4;
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [focus, setFocus] = useState(false);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    pin,
    setPin,
  });
  const ref = useBlurOnFulfill({ pin, cellCount: CELL_COUNT });

  const handleNumberPress = (number) => {
    if (pin.length == 4) {
      setLoading(true);

      setTimeout(() => {
        navigation.navigate("BottomNav");
        setLoading(false);
      }, 3000);
    } else if (pin.length < 4) {
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
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "#", "0", "⌫"];

  useEffect(() => {
    if (pin.length === 4) {
      setTimeout(() => {
        setLoading(true);
      }, 1000);

      setTimeout(() => {
        navigation.navigate("BottomNav");
        setLoading(false);
      }, 3000);
    }
  }, [pin]);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <FullScreenLoader />
      ) : (
        <BlurView
          style={{
            flex: 1,
            backgroundColor: ColorTheme.white,
            paddingHorizontal: 15,
          }}
          tint="dark"
          intensity={loading ? 20 : 0}
        >
          <View>
            <View
              style={{
                marginVertical: "15%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <CustomButton
                width={ww(118)}
                height={ww(32)}
                borderRadius={5}
                fontSize={16}
                textColor={ColorTheme.darkBlue}
                onPress={() => navigation.navigate("LoginNewUser")}
                btnTile={"Not Femi?"}
                position={"relative"}
                left={ww(135)}
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
                onFocus={() => setFocus(true)}
                onChangeText={(text) => {
                  setPin(text);
                  // if (text.length === 4) {
                  //   setLoading(true);

                  //   setTimeout(() => {
                  //     navigation.navigate("BottomNav");
                  //     setLoading(false);
                  //   }, 3000);
                  // }
                }}
                cellCount={CELL_COUNT}
                on
                editable={false}
                rootStyle={styles.codeFieldRoot}
                keyboardType="ascii-capable"
                secureTextEntry={true}
                textContentType="password"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[
                      symbol ? styles.focusCell : styles.cell,

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

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 40,
                flexWrap: "wrap",
                width: "85%",
                alignSelf: "center",
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
                    number === "⌫"
                      ? handleBackspace()
                      : handleNumberPress(number);
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      color:
                        activeButton == number
                          ? ColorTheme.white
                          : ColorTheme.black,
                    }}
                  >
                    {number}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </BlurView>
      )}
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
    width: 50,
    height: 50,
    lineHeight: 57,
    marginHorizontal: 10,
    borderRadius: 25,
    fontSize: 24,
    borderWidth: 2,

    textAlign: "center",
  },
});

const FullScreenLoader = ({ visible, position }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor:"#fff",
        opacity: 1,
      }}
    >
      {/* Customize your loader here */}
      <ActivityIndicator size="large" color="blue" style={{ zIndex: 4 }} />
    </View>
  );
};
