import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { Button } from "react-native";
import { clientId } from "./config";

//FIXME: LLevado a el archivo login de screens

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/adce849116938be5ebfe",
};

export default githubLogin = () => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: { clientId },
      scopes: ["identity", "openid", "profile", "email", "offline_access"],
      redirectUri: makeRedirectUri({
        native: "exp://localhost:19000",
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      <Text>{code}</Text>;
    }
  }, [response]);
  return (
    <Button
      disabled={!request}
      title="GitHub Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
};