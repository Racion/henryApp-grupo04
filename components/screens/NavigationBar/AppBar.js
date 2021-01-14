import React from "react";
import { Image } from "react-native";
import { Appbar } from "react-native-paper";

const AppBar = (props) => {
  const _handleAccount = () => props.navigation.navigate("Profile");

  const _handleNotifications = () => props.navigation.navigate("Notifications");

  const LogoTitle = () => {
    return (
      <Image
        style={{ width: 40, height: 32 }}
        source={require("../../../assets/anneLogo.png")}
      />
    );
  };

  return (
    <Appbar.Header
      dark={true}
      style={{ justifyContent: "space-between", backgroundColor: "#F6F600" }}
    >
      <Appbar.Action icon="account-tie" color="#000" onPress={_handleAccount} />
      <LogoTitle />
      <Appbar.Action
        icon="bell-circle-outline"
        color="#000"
        onPress={_handleNotifications}
      />
    </Appbar.Header>
  );
};

export default AppBar;
