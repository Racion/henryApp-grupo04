import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import * as data from "../admin/Data";

const initialState = {
  name: data.user[0].name,
  email: data.user[0].email,
  points: data.user[0].points,
};

export default function PersonalData() {
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState(initialState);
  const [changes, setChanges] = useState(initialState);

  const editFunction = (prop) => {
    if (prop === "save") {
      setUser(changes);
    }
    setEdit(!edit);
  };
  const handleChangeText = (name, value) => {
    setChanges({ ...user, [name]: value });
  };

  return (
    <View style={styles.dataBox}>
      <Text style={styles.title}>TÚ INFORMACION PERSONAL</Text>
      {!edit ? (
        <View style={{ alignItems: "center", marginTop: 10, marginBottom: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>{user.name}</Text>
          <Text style={{ fontSize: 18, color: "black" }}>{user.email}</Text>
        </View>
      ) : (
        <>
          <View style={styles.input}>
            <TextInput
              style={{ fontSize: 30, fontWeight: "bold" }}
              placeholder="Nombre Completo"
              onChangeText={(value) => handleChangeText("name", value)}
              defaultValue={user.name}
            />
            <TextInput
              style={{ fontSize: 18, color: "black" }}
              placeholder="Email"
              onChangeText={(value) => handleChangeText("email", value)}
              defaultValue={user.email}
            />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#fab913" }]}
              onPress={() => editFunction("save")}
            >
              <Text style={{ color: "#000", fontWeight: "bold" }}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#E04E4E" }]}
              onPress={() => editFunction()}
            >
              <Text style={{ color: "#000", fontWeight: "bold" }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      {!edit ? (
        <View style={{ marginTop: 10 }}>
          <Icon
            type="font-awesome"
            name="edit"
            color="black"
            onPress={() => editFunction()}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  dataBox: {
    padding: 20,
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    //boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    backgroundColor: "#F6F600",
    width: "100%",
    padding: 10,
    textAlign: "center",
    borderRadius: 8,
  },
  button: {
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
    padding: 8,
    width: 100,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  input: {
    marginTop: 10,
    width: "70%",
  },
});
