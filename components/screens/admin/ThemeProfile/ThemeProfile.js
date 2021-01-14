import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import CohortePieChart from "../../../graphs/CohortePieChart";
import * as data from "../Data";
import { Appbar } from "react-native-paper";

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 40, height: 32 }}
      source={require("../../../../assets/anneLogo.png")}
    />
  );
};

const ThemeProfile = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const { theme } = props.route.params;

  const getTheme = () => {
    return data.activeThemeTables.filter((t) => t.id === theme)[0];
  };

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
      <View style={styles.principalContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Dashboard de Métricas - {getTheme().name}
          </Text>
          <View style={styles.metrica}>
            <Text style={styles.textTwo}>"Ranking por cohorte"</Text>
            <CohortePieChart theme={theme} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  principalContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  metrica: {
    alignItems: "center",
    marginTop: "25%",
  },
  text: { fontSize: 20, marginTop: 10 },
  textTwo: {
    fontSize: 18,
    marginBottom: 30,
    marginTop: 40,
  },
});

export default ThemeProfile;
