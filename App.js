import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import ScreenInit from "./components/ScreenInit";
import ScreenTab from "./components/ScreenTab";
import ScreenTabAdmin from "./components/ScreenTabAdmin";

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [admin, setAdmin] = useState(false);

  return (
    <NavigationContainer>
      {isAuth ? admin ? <ScreenTabAdmin /> : <ScreenTab /> : <ScreenInit isAuth={() => setIsAuth(true)}/>}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
