import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import AlumnList from "./screens/AlumnList";
import Home from "./screens/Home";
import Profile from "./screens/Profile/Profile";
import Ranking from "./screens/Ranking";
import TableLink from "./screens/TableLink";
import Notifications from "./screens/Notifications";
import Ppthemes from './screens/Ppthemes'

///////////////////////////////////////////////

const Stack = createStackNavigator();

function PairPrograming() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PairPrograming"
        component={TableLink}
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

function PPTheme() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PPTematico"
        component={Ppthemes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PPTheme"
        component={TableLink}
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

function StandUp() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StandUp"
        component={TableLink}
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

function HomeStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Ranking"
        component={Ranking}
        options={{ headerShown: false }}
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

const ScreenTab = (props) => {
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
            case "Stand Up":
              iconName = "slideshare";
              break;
            case "Pair Programing":
              iconName = "users";
              break;
            case "PP Temático":
              iconName = "code";
              break;
            default:
              iconName = "warning";
          }
          return <Entypo name={iconName} color={color} size={18} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeStackScreen} />
      <Tab.Screen name="Pair Programing" component={PairPrograming} />
      <Tab.Screen name="PP Temático" component={PPTheme} />
      <Tab.Screen name="Stand Up" component={StandUp} />
    </Tab.Navigator>
  );
};

export default ScreenTab;
