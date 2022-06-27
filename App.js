import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import CarList from "./components/CarList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CarList />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
