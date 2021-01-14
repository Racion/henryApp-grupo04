import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Avatar } from "react-native-elements";
import ImagePicker from "./ImagePicker";
import TimeSelector from "./TimePicker";
import MyAwards from "./MyAwards";
import { Appbar } from "react-native-paper";
import Performance from "./Performance";
import PersonalData from "./PersonalData";

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 40, height: 32 }}
      source={require("../../../assets/anneLogo.png")}
    />
  );
};

export default function Profile(props) {
  const [show, setShow] = useState(false);

  const initialState = {
    id: "",
    name: "",
    email: "",
    pic: "",
  };

  const [user, setUser] = useState(initialState);

  const setearPic = (i) => {
    setUser({ ...user, pic: i });
    setShow(false);
  };

  if (!show) {
    return (
      <>
        <Appbar.Header
          dark={true}
          style={{
            justifyContent: "space-between",
            backgroundColor: "#FFFC33",
          }}
        >
          <Appbar.BackAction
            color="#000"
            onPress={() => props.navigation.goBack()}
          />
          <LogoTitle />
          <Appbar.Action
            disabled={true} 
          />
        </Appbar.Header>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.dataBox}>
            <TouchableOpacity onPress={() => setShow(true)}>
              {user.pic !== "" ? (
                <Avatar
                  rounded
                  source={{ uri: user.pic }}
                  size="xlarge"
                  editButton
                />
              ) : (
                <Avatar
                  overlayContainerStyle={{ backgroundColor: "black" }}
                  rounded
                  size="large"
                  icon={{
                    name: "user",
                    color: "#F6F600",
                    type: "font-awesome",
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
          <PersonalData />
          <Performance navigation={props.navigation} />
          <TimeSelector />
          <MyAwards />
        </ScrollView>
      </>
    );
  } else {
    return <ImagePicker setearPic={setearPic} />;
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 15,
  },
  dataBox: {
    padding: 20,
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    //boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    marginTop: 15,
    alignItems: "center",
  },
  edit: {
    alignSelf: "flex-end",
    paddingRight: 15,
    paddingTop: 10,
  },
});
