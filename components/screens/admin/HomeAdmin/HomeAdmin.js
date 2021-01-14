import * as React from "react";
import { List } from "react-native-paper";
import { ScrollView, StyleSheet, Text, Button } from "react-native";
import * as data from "../Data";
import AppBar from "../../NavigationBar/AppBar";

const HomeAdmin = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <AppBar {...props} />
      <ScrollView style={styles.principalContainer}>
        <Text style={styles.text}>Dashboard de Métricas</Text>
        <List.Section>
          <List.AccordionGroup>
            <List.Accordion
              id="1"
              title={
                "La tasa de participación fue " + data.getAssistanceRate() + "%"
              }
              left={(props) => <List.Icon {...props} icon="equal" />}
              onPress={handlePress}
            >
              {data.getCohorteRanking().map((cohorte, i) => (
                <List.Item
                  key={cohorte.id}
                  title={
                    "# " +
                    (i + 1) +
                    " - Cohorte " +
                    cohorte.id +
                    " - " +
                    Math.ceil((cohorte.activas / cohorte.mesas) * 100) +
                    " %"
                  }
                  onPress={() =>
                    props.navigation.navigate("CohorteProfile", {
                      cohorte: cohorte.id,
                    })
                  }
                />
              ))}
            </List.Accordion>
            <List.Accordion
              id="2"
              title={"El tema más trabajado fue " + data.mostPopularTheme()}
              left={(props) => <List.Icon {...props} icon="equal" />}
              onPress={handlePress}
            >
              {data.activeThemeTables
                .sort((a, b) =>
                  Object.values(a.studentsByCohorte).reduce(
                    (acc, el) => acc + el
                  ) <
                  Object.values(b.studentsByCohorte).reduce(
                    (acc, el) => acc + el
                  )
                    ? 1
                    : -1
                )
                .map((theme, i) => (
                  <List.Item
                    key={theme.id}
                    title={
                      Object.values(theme.studentsByCohorte).reduce(
                        (acc, el) => acc + el
                      ) +
                      " alumnos trabajaron en " +
                      theme.name
                    }
                    onPress={() =>
                      props.navigation.navigate("ThemeProfile", {
                        theme: theme.id,
                      })
                    }
                  />
                ))}
            </List.Accordion>
            <List.Accordion
              id="3"
              title={
                "El grupo más activo fue el G" +
                data.getConnectedGroupRanking()[0].id +
                " - FT" +
                data.getConnectedGroupRanking()[0].cohorte
              }
              left={(props) => <List.Icon {...props} icon="equal" />}
              onPress={handlePress}
            >
              {data.getConnectedGroupRanking().map((group, i) => (
                <List.Item
                  key={group.id}
                  title={
                    "Grupo # " +
                    (i + 1) +
                    " - Cohorte " +
                    group.cohorte +
                    " - " +
                    Math.ceil(
                      (group.studentsConnected / group.totalStudents) * 100
                    ) +
                    " %"
                  }
                  onPress={() =>
                    props.navigation.navigate("GroupProfile", {
                      group: group.id,
                    })
                  }
                />
              ))}
            </List.Accordion>
          </List.AccordionGroup>
        </List.Section>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  principalContainer: {
    alignContent: "center",
  },
  text: {
    fontSize: 20,
    marginTop: 40,
    marginBottom: 40,
    textAlign: "center",
  },
});

export default HomeAdmin;
