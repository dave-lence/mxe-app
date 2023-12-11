import { StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import ColorTheme from "../theme/colorTheme";

const SmallCircleContainer = ({ children, backgroundColor, width, height,borderRadius }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: width,
        height: height,
        borderRadius: borderRadius,
        marginRight: 11,
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default SmallCircleContainer;

const styles = StyleSheet.create({});
