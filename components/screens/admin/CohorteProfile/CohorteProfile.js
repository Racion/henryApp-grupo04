import * as React from "react";
import AssistanceProgressBar from "../../../graphs/AssistanceProgressBar";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from "react-native";
import ThemesPieChart from "../ThemesPieChart";
import { Appbar } from "react-native-paper";

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 40, height: 32 }}
      source={require("../../../../assets/anneLogo.png")}
    />
  );
};

const CohorteProfile = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
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
        <Text style={styles.text}>
          Dashboard de Métricas - Cohorte {cohorte}
        </Text>
        <SafeAreaView style={styles.container}>
          <SafeAreaView style={{ alignItems: "center" }}>
            <Text style={styles.textTwo}>Asistencia a PP por grupo</Text>
            <AssistanceProgressBar cohorte={cohorte} />
          </SafeAreaView>
          <SafeAreaView style={{ alignItems: "center" }}>
            <Text style={styles.textTwo}>Temas trabajados</Text>
            <ThemesPieChart cohorte={cohorte} />
          </SafeAreaView>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 15,
  },
  principalContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: { color: "#000", paddingLeft: 40 },
  text: {
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },
  textTwo: {
    fontSize: 18,
    marginBottom: 30,
    marginTop: 40,
  },
});

export default CohorteProfile;
