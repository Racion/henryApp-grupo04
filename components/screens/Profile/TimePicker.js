import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import TimePicker from "react-native-simple-time-picker";
import { Icon } from "react-native-elements";

const initialState = {
  hours: 0,
  minutes: 0,
  hours2: 0,
  minutes2: 0,
};

export default function TimeSelector() {
  const [show, setShow] = useState(false);
  const [selectedHours, setSelectedHours] = useState(initialState);
  const [changes, setChanges] = useState(initialState);

  const editFunction = (prop) => {
    if (prop === "save") {
      setSelectedHours(changes);
    }
    setShow(!show);
  };

  if (!show) {
    return (
      <View style={styles.dataBox}>
        <Text style={styles.title}>TUS HORARIOS</Text>
        <Text style={{ fontSize: 24 }}>
          Disponible de: {selectedHours.hours}:{selectedHours.minutes} a {""}
          {selectedHours.hours2}:{selectedHours.minutes2} hs.
        </Text>
        <View style={{ marginTop: 20 }}>
          <Icon type="font-awesome" name="edit" onPress={() => setShow(true)} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.dataBox}>
        <Text style={styles.title}>SELECCIONA LOS HOROARIOS EN LOS QUE ESTES DISPONIBLE</Text>
        <>
          <Text>Desde</Text>
          <TimePicker
            selectedHours={selectedHours.hours}
            selectedMinutes={selectedHours.minutes}
            onChange={(hours, minutes) => {
              setChanges({
                ...selectedHours,
                hours: hours,
                minutes: minutes,
              });
            }}
          />
        </>
        <>
          <Text>hasta</Text>
          <TimePicker
            selectedHours={selectedHours.hours2}
            selectedMinutes={selectedHours.minutes2}
            onChange={(hours, minutes) => {
              setChanges({
                ...selectedHours,
                hours2: hours,
                minutes2: minutes,
              });
            }}
          />
        </>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => editFunction("save")}
          >
            <Text style={{ color: "#000", fontWeight: "bold" }}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#E04E4E" }]}
            onPress={() => editFunction()}
          >
            <Text style={{ color: "#000", fontWeight: "bold" }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dataBox: {
    padding: 20,
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
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
  button: {
    alignItems: "center",
    backgroundColor: "#fab913",
    borderRadius: 8,
    marginTop: 10,
    padding: 8,
    width: 100,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
});
