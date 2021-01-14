import React, { useState } from "react";
import {
  Vibration,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  apodo: "",
};

const Setup = (props) => {
  const [user, setUser] = useState(initialState);

  const onChangeInput = (value, name) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <View style={styles.container}>
      <View style={styles.central}>
        <TextInput
          mode="outlined"
          label="Name"
          value={user.name}
          onChangeText={(value) => onChangeInput(value, "name")}
          style={styles.inputGroup}
        />
        <TextInput
          mode="outlined"
          label="Last Name"
          value={user.lastName}
          onChangeText={(value) => onChangeInput(value, "lastName")}
          style={styles.inputGroup}
        />
        <TextInput
          mode="outlined"
          label="Email"
          value={user.email}
          onChangeText={(value) => onChangeInput(value, "email")}
          style={styles.inputGroup}
        />
        <TextInput
          mode="outlined"
          label="Apodo"
          value={user.apodo}
          onChangeText={(value) => onChangeInput(value, "apodo")}
          style={styles.inputGroup}
        />
        <View style={styles.button}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              //props.navigation.navigate("Home");
              Vibration.vibrate(1)
              props.isAuth()
            }}
          >
            <View>
              <Text style={{ color: "#fff" }}>Let's Go</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F600",
  },
  central: {
    flex: 1,
    padding: 30,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 90,
    marginBottom: 20,
    backgroundColor: "#FFF",
    borderRadius: 15,
  },
  inputGroup: {
    flex: 1,
    padding: 10,
    height: 40,
    width: 300,
  },
  button: {
    backgroundColor: "#000",
    alignItems: "center",
    padding: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: -5,
    marginBottom: -5,
    borderRadius: 30,
  },
});

export default Setup;
