import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppBar from "./NavigationBar/AppBar";
import * as data from "./admin/Data";
import { Modal, Portal, Provider, List, Title, Button } from "react-native-paper";

export default function Ppthemes(props) {
  const [expanded, setExpanded] = React.useState(true);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const handlePress = () => setExpanded(!expanded);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    height: 160,
    margin: 40,
    borderRadius: 8,
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text style={{marginBottom:28, paddingLeft:5}}>Meet para el PP</Text>
          <Button
            mode="contained"
            onPress={hideModal}
          >
            Go Meet!
          </Button>
        </Modal>
      </Portal>
      <AppBar {...props} />
      <ScrollView>
        <List.Section>
          <Title style={{paddingLeft: 24}}>Selecciona el modulo y el tema:</Title>
          <List.Accordion
            title="M1"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item title="00-IntroToCS" onPress={showModal} />
            <List.Item title="01-JsAvanzado-I" onPress={showModal} />
            <List.Item title="02-JsAvanzado-II" onPress={showModal} />
            <List.Item title="03-EstructuraDeDatos-I" onPress={showModal} />
            <List.Item title="04-EstructuraDeDatos-II" onPress={showModal} />
            <List.Item title="05-EstructuraDeDatos-III" onPress={showModal} />
            <List.Item title="06-Algoritmos-I" onPress={showModal} />
            <List.Item title="07-Algoritmos-II" onPress={showModal} />
          </List.Accordion>

          <List.Accordion
            title="M2"
            left={(props) => <List.Icon {...props} icon="folder" />}
            onPress={handlePress}
          >
            <List.Item title="01-DOM" onPress={showModal} />
            <List.Item title="02-CSS" onPress={showModal} />
            <List.Item title="03-ES6" onPress={showModal} />
            <List.Item title="04-Ajax" onPress={showModal} />
            <List.Item title="05-Bundlers" onPress={showModal} />
            <List.Item title="06-React-Intro" onPress={showModal} />
            <List.Item title="07-React-Estilos" onPress={showModal} />
            <List.Item title="08-React-LifeCycle" onPress={showModal} />
            <List.Item title="09-React-Routing" onPress={showModal} />
            <List.Item title="10-React-Form" onPress={showModal} />
            <List.Item title="11-Redux" onPress={showModal} />
            <List.Item title="12-React-Redux" onPress={showModal} />
            <List.Item title="13-React-Hooks" onPress={showModal} />
          </List.Accordion>

          <List.Accordion
            title="M3"
            left={(props) => <List.Icon {...props} icon="folder" />}
            onPress={handlePress}
          >
            <List.Item title="01-Node" onPress={showModal} />
            <List.Item title="02-Promises" onPress={showModal} />
            <List.Item title="03-WebServer" onPress={showModal} />
            <List.Item title="04-AdvancePromises" onPress={showModal} />
            <List.Item title="05-Express" onPress={showModal} />
            <List.Item title="06-Testing" onPress={showModal} />
            <List.Item title="07-AsyncAwait" onPress={showModal} />
          </List.Accordion>

          <List.Accordion
            title="M4"
            left={(props) => <List.Icon {...props} icon="folder" />}
            onPress={handlePress}
          >
            <List.Item title="01-DBMS" onPress={showModal} />
            <List.Item title="02-SQL" onPress={showModal} />
            <List.Item title="03-Sequelize" onPress={showModal} />
            <List.Item title="04-Authentication" onPress={showModal} />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </Provider>
  );
}
