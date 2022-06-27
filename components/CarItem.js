import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import Buttons from "./Buttons";

import React from "react";
const CarItem = ({ name, tagline, taglineCTA, src, solar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={src}>
      <View style={styles.titles}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{tagline ? tagline : "Order online for "}<Text style={styles.subtitleUnderline}>{taglineCTA && "Touchless Delivery"}</Text></Text>  
      </View>
      </View>
      <Buttons text={solar ? "ORDER NOW" : "CUSTOM ORDER"} colA />
      <Buttons text={solar ? "LEARN MORE" : "EXISTING INVENTORY"} colB />
      </ImageBackground>
      </View>
    </View>
  );
};
export default CarItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "20%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600"
  },
  subtitleContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
    fontWeight: "500"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "relative",
  },
  subtitleUnderline: {
    textDecorationLine: "underline",
    marginLeft: 4,
    textDecorationColor: "gray",
    cursor: "pointer",
  },
});
