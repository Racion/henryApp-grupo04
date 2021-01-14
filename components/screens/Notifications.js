import React, { useEffect } from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import { Appbar } from "react-native-paper";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions"

const getToken = async () => {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== "granted") {
        return;
    }
    const token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    return token;
}

const LogoTitle = () => {
    return (
      <Image
        style={{ width: 40, height: 32 }}
        source={require("../../assets/anneLogo.png")}
      />
    );
  };

const notificationsArray = [
    {title: "Mesa habilitada", body: "Se habilitó una mesa de React de repaso", hour: "19.15"},
    {title: "Cómo te fue hoy?", body: "Tenés un minuto para puntuar la experiencia de hoy?", hour: "18.00"},
    {title: "PAIR PROGRAMMING", body: "Es hora de hacer Pair Programing!", hour: "16.30"},
    {title: "Mesa habilitada", body: "Se habilitó una mesa de React de repaso", hour: "19.15"},
    {title: "Cómo te fue hoy?", body: "Tenés un minuto para puntuar la experiencia de hoy?", hour: "18.00"},
    {title: "PAIR PROGRAMMING", body: "Es hora de hacer Pair Programing!", hour: "16.30"},
    {title: "Mesa habilitada", body: "Se habilitó una mesa de React de repaso", hour: "19.15"},
    {title: "Cómo te fue hoy?", body: "Tenés un minuto para puntuar la experiencia de hoy?", hour: "18.00"},
    {title: "PAIR PROGRAMMING", body: "Es hora de hacer Pair Programing!", hour: "16.30"}
]

export default function Notification (props) {
    useEffect(() => {
        getToken()
    })

    return (
        <>
            <Appbar.Header
            dark={true}
            style={{
                justifyContent: "space-between",
                backgroundColor: "#FFFC33",
            }}
            >
            <Appbar.BackAction
                color="#000"
                onPress={() => props.navigation.goBack()}
            />
            <LogoTitle />
            <Appbar.Action
                disabled={true} 
            />
            </Appbar.Header>
            <ScrollView contentContainerStyle={styles.container}>
                {notificationsArray.map((notif, index) => {
                    for (const key in notif) {
                        console.log(key)
                        return (
                            <View key={index} style={styles.boxNotif}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontSize: 17, fontWeight: "bold", paddingBottom: 3 }}>{notif.title}</Text>
                                    <Text>{notif.hour}</Text>
                                </View>
                                <Text>{notif.body}</Text>
                            </View>
                        )
                    }
                    }
                )}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        padding: 10
    },
    boxNotif: {
        padding: 30,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 15,
        borderColor: "gray",
        margin: 3
      }
})