import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

export default function ImagePickerExample(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const pic = result.uri;

    if (!result.cancelled) {
      setImage(pic);
    }
  };

  if (image) {
    return (
      <View style={styles.container}>
        <Button
          color="black"
          title="Seleccionar imagen de la galería"
          onPress={pickImage}
        />
        <Image
          style={styles.image}
          source={{ uri: image }}
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />
        <View style={styles.btnContainer}>
          <Button
            color="#EAEDED"
            title="Cancelar"
            onPress={() => props.setearPic()}
          />
          <Button
            color="#F6F600"
            title="Listo!"
            onPress={() => props.setearPic(image)}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          color="black"
          title="Seleccionar imagen de la galería"
          onPress={pickImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 35,
  },
  btnContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  image: {
    margin: 35,
  },
});
