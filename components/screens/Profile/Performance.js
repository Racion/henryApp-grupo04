import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import * as data from "../admin/Data";

export default function Profile(props) {
  return (
    <View style={styles.dataBox}>
      <Text style={styles.title}>TÚ RENDIMIENTO</Text>
      <Text style={{ fontSize: 44, fontWeight: "bold" }}>
        {data.user[0].points}
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        POSICIÓN {16}
      </Text>
      <Icon
        name="questioncircleo"
        type="antdesign"
        style={{ paddingLeft: 5 }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          props.navigation.navigate("Ranking", {
            small: false,
          })
        }
      >
        <Text style={{ color: "#000", fontWeight: "bold" }}>
          VER TODO EL RANKING
        </Text>
      </TouchableOpacity>
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
    alignItems: "center",
    marginTop: 20,
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
    //transition: "all 0.15s",
    alignItems: "center",
    backgroundColor: "#fab913",
    borderRadius: 8,
    marginTop: 15,
    padding: 15,
    //width: "12rem",
    width: 192,
    fontWeight: "300",
  },
});
