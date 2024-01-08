import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import ColorTheme from "../theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator, Button, Modal } from "react-native-paper";
import { ww } from "../../responsive";


const CodeVerificationScreen = ({navigation}) => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(120); 
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue, 
  });


  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      } else {
        clearInterval(interval);
        setShowButton(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    if (value.length == 4) {
      setLoading(true);

      setTimeout(() => {
        navigation.navigate("SignUpScreenOne");
        setLoading(false);
      }, 2000);
    }
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {loading && (
        <FullScreenLoader
          visible={loading}
          position={loading ? "absolute" : null}
        />
      )}
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 30,
          marginTop: 200,
        }}
      >
        <Text style={{ fontSize: 34, fontWeight: "bold" }}>Enter the code</Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 14,
            color: ColorTheme.lightGray2,
          }}
        >
          We have sent a code to +2348123456789 to approve this device
        </Text>
      </View>
      <CodeField
        ref={ref}
        {...props}        
        caretHidden={false}
        value={value}
        onChangeText={(text) => { 
          setValue(text)
          if (text.length == 4) {
              setLoading(true);
        
              setTimeout(() => {
                navigation.navigate("BottomNav");
                setLoading(false);
              }, 2000);
            }
      }}
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
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
        {showButton ? (
        <Button
          mode="text"
          style={{ marginTop: 30 }}
          rippleColor={ColorTheme.white}
          onPress={() => {}}
          labelStyle={{
            color: ColorTheme.darkBlue,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Resend
        </Button>
      ) : (
        <Text
          style={{
            textAlign: "center",
            marginTop: 30,
            fontSize: 16,
            color: ColorTheme.black,
          }}
        >
          {" "}
          Resend in{" "}
          <Text style={{ marginLeft: 10, color: ColorTheme.lightBlue2 }}>
            {formatTime(count)}
          </Text>
        </Text>
      )}

      <TouchableOpacity
        style={{
          position: "absolute",
          top:ww(697),
          left: ww(20),
          backgroundColor: ColorTheme.darkBlue,
          borderRadius: 5,
          height: ww(48),
            width: ww(48),
            justifyContent: "center",
            alignItems: "center",
        }}
        onPress={() => {
          navigation.goBack()
        }}
      >
        <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

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

export default CodeVerificationScreen;

const FullScreenLoader = ({ visible, position }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      style={{ position: position }}
      visible={visible}
      onRequestClose={() => {}}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
                 
        }}
      >
        <View style={{ marginTop:20,}}>
          {/* Customize your loader here */}
          <ActivityIndicator size="large" color="blue" />
        </View>
      </View>
    </Modal>
  );
};
