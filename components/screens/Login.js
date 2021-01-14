import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { clientID } from "../../firebase/config";

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/adce849116938be5ebfe",
};

const Login = ({ navigation }) => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "8698b3f9e463e3449d58",
      scopes: ["identity", "openid", "profile", "email", "offline_access"],
      redirectUri: makeRedirectUri({
        native:
          "https://henryapp-e9359-default-rtdb.firebaseapp.com/__/auth/handler",
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      // <Text>{code}</Text>;
    }
  }, [response]);
  return (
    <View style={styles.principalContainer}>
      <View style={styles.container}>
        <Text style={{ textAlign: "center", fontSize: 25 }}>
          Welcome, it's time to log in!
        </Text>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            style={styles.buttonGoogle}
            onPress={() => navigation.navigate("Setup")}
          >
            <AntDesign name="google" color="#000" size={20} />
            <Text style={styles.text}>Signin with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!request}
            style={styles.buttonGitHub}
            onPress={() => {
              promptAsync();
            }}
          >
            <AntDesign name="github" color="#000" size={20} />
            <Text style={styles.text}>Signin with GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 90,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 15,
  },
  buttonGoogle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderRadius: 2,
    backgroundColor: "#E11B1B",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
    marginTop: 15,
  },
  buttonGitHub: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderRadius: 2,
    backgroundColor: "#878585",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
    marginTop: 15,
  },
  principalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F600",
  },
  text: { color: "#000", paddingLeft: 15, textAlign: "center" },
});

export default Login;
