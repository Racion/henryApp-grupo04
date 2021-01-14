import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default function MyAwards() {
  const awards = [
    "CONECTADO 1 DÍA",
    "CONECTADO 5 DÍAS",
    "CONECTADO 2 SEMANAS",
    // "CONECTADO POR 1 MES",
    "AYUDAR EN 1 MESA",
    "PP ROCKSTAR",
    "FACILITAR 1 MESA",
    // "FACILITAR 5 MESAS",
    "MR PUNTUALIDAD",
    "PP MASTER",
  ];

  return (
    <View style={styles.dataBox}>
      <Text style={styles.title}>TUS TONI AWARDS</Text>
      <View style={styles.awardsContainer}>
        {awards.map((award, index) => {
          return (
            <View key={index} style={styles.award}>
              <Image
                style={{ width: 80, height: 80 }}
                source={require("../../../assets/toni.png")}
              />
              <Text style={{ width: 95, textAlign: "center" }}>{award}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  awardsContainer: {
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  award: {
    width: 100,
  },
  title: {
    marginBottom: 25,
    fontWeight: "bold",
    backgroundColor: "#F6F600",
    width: "100%",
    padding: 10,
    textAlign: "center",
    borderRadius: 8,
  },
  dataBox: {
    padding: 20,
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    //boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    marginTop: 15,
    alignItems: "center",
  },
});
