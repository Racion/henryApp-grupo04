import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Vibration,
  Animated,
} from "react-native";

const Initialized = ({ navigation }) => {
  const [init, setInit] = useState(false);
  const [fadeIn] = useState(new Animated.Value(0));
  const [aniButt] = useState(new Animated.Value(0));

  const iniciar = () => {
    setInit(true);
  };

  useEffect(() => {
    setTimeout(iniciar, 4000);
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 4000,
      delay: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(aniButt, {
      toValue: 1,
      duration: 1200,
      delay: 4100,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {!init ? (
        <Text style={{ marginTop: 170 }}></Text>
      ) : (
        <Animated.View style={{ marginTop: 150, opacity: aniButt }}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              Vibration.vibrate(1), navigation.navigate("Login");
            }}
          >
            <View>
              <Text style={{ color: "#fff" }}>Start</Text>
            </View>
          </TouchableHighlight>
        </Animated.View>
      )}
      <Animated.Text
        style={{
          color: "rgba(0,0,0,1)",
          fontSize: 60,
          marginTop: -297,
          textAlign: "center",
          opacity: fadeIn,
        }}
      >
        ANNE
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F600",
  },
  button: {
    backgroundColor: "#000",
    alignItems: "center",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
  },
});

export default Initialized;
