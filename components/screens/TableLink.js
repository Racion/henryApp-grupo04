import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppBar from "./NavigationBar/AppBar";
import * as data from "./admin/Data";


const TableLink = (props) => {
  return (
    <>
      <AppBar {...props} />
      <ScrollView style={{margin: 10}}>
        <View style={{ borderWidth: 2 }}>
          <Text
            style={{
              flex: 1,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "20%",
            }}
          >
            ESTE ES TU LINK
          </Text>
          <View style={{ alignItems: "center", marginTop: "20%" }}>
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtw1zP6hB8trHAa_YNLfZ4HvdJgX1z4849w&usqp=CAU",
              }}
              style={{ width: 100, height: 100, alignItems: "center" }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "blue" }}>http://meeting/new</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{
                uri:
                  "https://images.emojiterra.com/google/android-oreo/512px/1f680.png",
              }}
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                marginTop: "20%",
              }}
            ></Image>
          </View>
          <Text
            style={{
              flex: 1,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "20%",
              marginBottom: "20%",
            }}
          >
             ¡QUE TENGAS UNA EXCELENTE REUNIÓN {data.user[0].name.toUpperCase()}!
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default TableLink;
