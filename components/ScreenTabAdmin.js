import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import AlumnList from "./screens/AlumnList";
import HomeAdmin from "./screens/admin/HomeAdmin/HomeAdmin";
import CohorteProfile from "./screens/admin/CohorteProfile/CohorteProfile";
import ThemeProfile from "./screens/admin/ThemeProfile/ThemeProfile";
import GroupProfile from "./screens/admin/GroupProfile/GroupProfile";
import Profile from "./screens/Profile/Profile";
import Notifications from "./screens/Notifications";
import { Text, View } from "react-native";

///////////////////////////////////////////////

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeAdmin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CohorteProfile"
        component={CohorteProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ThemeProfile"
        component={ThemeProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GroupProfile"
        component={GroupProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AlumnStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AlumnList"
        component={AlumnList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

///////////////////////////////////////////////

const Tab = createBottomTabNavigator();

const ScreenTabAdmin = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: { backgroundColor: "#181818" },
        activeTintColor: "#F6F600",
        inactiveTintColor: "gray",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Inicio":
              iconName = "home";
              break;
            case "Lista de Alumnos":
              iconName = "list";
              break;
            default:
              iconName = "warning";
          }
          return <Entypo name={iconName} color={color} size={18} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeStackScreen} />
      <Tab.Screen name="Lista de Alumnos" component={AlumnStack} />
    </Tab.Navigator>
  );
};

export default ScreenTabAdmin;
