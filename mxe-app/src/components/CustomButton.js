import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  btnTile,
  onPress,
  disabled,
  textColor,
  width,
  backgroundColor,
  flexDirection,
  position,
  borderRadius,
  height,
  right,
  fontSize,
  left,
  custonStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        {
          flexDirection: flexDirection,
          backgroundColor: backgroundColor,
          position: position,
          left: left,
          right: right,
          width: width,
          height: height,
          borderRadius: borderRadius,
          alignItems: "center",
          justifyContent: "center",
        },
        custonStyle,
      ]}
      onPress={onPress}
    >
      <Text
        style={{ color: textColor, fontWeight: "bold", fontSize: fontSize }}
      >
        {btnTile}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
