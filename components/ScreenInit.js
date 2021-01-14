import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import Login from "./screens/Login";
import Initialized from "./screens/Initialized";
import Setup from "./screens/Setup";

const Stack = createStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 60, height: 40, margin: 20 }}
      source={require("../assets/anneLogo.png")}
    />
  );
};

const ScreenInit = (props) => {
  return (
    <Stack.Navigator initialRouteName="Init">
      <Stack.Screen
        name="Init"
        component={Initialized}
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: { backgroundColor: "#F6F600" },
          headerTintColor: "#000000",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTransparent: true,
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: { backgroundColor: "#F6F600" },
          headerTintColor: "#000000",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Setup"
        component={() => <Setup {...props} />}
        options={{
          headerTransparent: true,
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: { backgroundColor: "#F6F600" },
          headerTintColor: "#000000",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default ScreenInit;
