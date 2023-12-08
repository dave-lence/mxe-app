import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import ColorTheme from "../theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";

const CodeVerificationScreen = ({navigation}) => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
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
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Text
        style={{
          textAlign: "center",
          marginTop: 30,
          fontWeight: "bold",
          color: ColorTheme.darkBlue,
        }}
      >
        Resend
      </Text>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          backgroundColor: ColorTheme.darkBlue,
          borderRadius: 10,
          padding: 15,
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
