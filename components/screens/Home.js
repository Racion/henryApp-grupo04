import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { CountDown } from "react-native-countdown-component";
import { Card } from "react-native-paper";
import AppBar from "./NavigationBar/AppBar";
import Ranking from "./Ranking";

export const Home = (props) => {
  return (
    <>
      <AppBar {...props} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.countDownBox}>
          <Text style={styles.title}>TIEMPO PARA EL PRÓXIMO CHECKPOINT</Text>
          <CountDown
            style={{ marginTop: 15 }}
            until={4100}
            timeLabels={{d: 'Días', h: 'Horas', m: 'Minutos', s: 'Segundos'}}
            onFinish={() =>
              alert(
                "Recordá, si llegaste hasta acá, sos capaz de lograr cosas increibles!!!"
              )
            }
            size={20}
          />
        </View>
        <View style={styles.rankingBox}>
          <Text style={styles.title}>RANKING</Text>
          <Ranking small={true} navigation={props.navigation} />
        </View>
        <Card style={styles.cardContainer}>
          <Text style={styles.title}>ANNE TIPS</Text>
          <Text style={styles.cardText}>
            ¿Sabías que React Native es la tecnología más usada en el desarrollo
            de aplicaciones mobile?
          </Text>
          <Card.Cover
            source={{ uri: "https://picsum.photos/700" }}
            style={styles.cardPic}
          />
        </Card>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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
  countDownBox: {
    padding: 20,
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },
  rankingBox: {
    width: "90%",
    marginTop: 25,
    padding: 20,
    paddingLeft: -15,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  cardContainer: {
    width: "90%",
    borderRadius: 10,
    marginBottom: 25,
    marginTop: 25,
    padding: 20,
    alignContent: "center",
  },
  cardPic: {
    height: 100,
  },
  cardText: {
    fontWeight: "bold",
    padding: 15,
    textAlign: "center",
  },
});
export default Home;
