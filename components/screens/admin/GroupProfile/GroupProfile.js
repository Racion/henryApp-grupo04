import * as React from "react";
import AssistanceProgressBar from "../../../graphs/AssistanceProgressBar";
import AssistanceLinear from "../../../graphs/AssistanceLinear";
import { ScrollView, SafeAreaView, StyleSheet, Text, Image } from "react-native";
import { Card, Appbar } from "react-native-paper";
import * as data from "../Data";

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 40, height: 32 }}
      source={require("../../../../assets/anneLogo.png")}
    />
  );
};

const GroupProfile = (props) => {
  const { group } = props.route.params;
  const { cohorte } = props.route.params;

  return (
    <>
      <Appbar.Header
        dark={true}
        style={{
          justifyContent: "space-between",
          backgroundColor: "#F6F600",
        }}
      >
        <Appbar.BackAction
          color="#000"
          onPress={() => props.navigation.goBack()}
        />
        <LogoTitle />
        <Appbar.Action
          icon="bell-circle-outline"
          color="#000"
          onPress={() => console.log("Hi2")}
        />
      </Appbar.Header>
      <ScrollView style={styles.principalContainer}>
          <Text style={styles.text}>Dashboard de Métricas -{" "}{group ? "Grupo " + group : "Cohorte " + cohorte}
          </Text>
          <SafeAreaView style={styles.container}>
            {group ? (
              <AssistanceLinear group={group} />
            ) : (
              <AssistanceProgressBar cohorte={cohorte} />
            )}
          </SafeAreaView>
          {group ? (
            <Text style={styles.textTwo}>
              PM: {data.groups.filter((g) => g.id === group)[0]?.pm}{" "}
            </Text>
          ) : null}
          {/* <Card style={styles.card}>
          <Card.Title title={"Temas trabajados"} />
          <Card.Content>
            {group ? (
              <ThemesPieChart group={group} />
            ) : (
              <ThemesPieChart cohorte={cohorte} />
            )}
          </Card.Content>
        </Card> */}
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "40%",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  principalContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
    color: "#000",
  },
  textTwo: {
    fontSize: 18,
    marginBottom: 30,
    marginTop: 50,
    textAlign: "center",
  },
});

export default GroupProfile;
