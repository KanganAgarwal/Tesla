import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";

const Buttons = ({ text, colA, colB }) => {
  return (
    <View style={colA ? styles.buttonsA : styles.buttonsB}>
      {colA && (
        <TouchableOpacity style={[styles.textContainer, styles.colA]}><Text style={styles.textA}>{text}</Text></TouchableOpacity>
      )}
      {colB && (
        <TouchableOpacity style={[styles.textContainer, styles.colB]}><Text style={styles.textB}>{text}</Text></TouchableOpacity>
      )}
    </View>
  );
};
export default Buttons;
const styles = StyleSheet.create({
  buttonsA: {
    position: "absolute",
    bottom: "18%",
    width: "100%",
  },
  buttonsB: {
    position: "absolute",
    bottom: "10%",
    width: "100%",
  },
  textContainer: {
    cursor: "pointer",
    width: "90%",
    marginHorizontal: "auto",
    borderRadius: 25,
  },
  colA: {
    backgroundColor: "#171A20CC",
  },
  colB: {
    backgroundColor: "#F4F4F4A6",
  },
  textA: {
    fontSize: 20,
    fontWeight: "400",
    borderRadius:5,
    textAlign: "center",
    color: "white",
    paddingVertical: 8,
  },
  textB: {
    fontSize: 20,
    fontWeight: "400",
    borderRadius: 5,
    textAlign: "center",
    color: "#393C41",
    paddingVertical: 8,
  },
});
