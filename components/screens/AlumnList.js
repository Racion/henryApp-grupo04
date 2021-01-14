import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SearchBar, ListItem, Avatar } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import AppBar from "./NavigationBar/AppBar";
const AlumnList = (props) => {
  const [search, setSearch] = useState("");
  const [filterUser, setFilterUser] = useState([]);
  const [userCohort, setUserCohort] = useState([]);
  const [cohort, setCohort] = useState("");

  const Users = [
    { name: "tomas", asistencia: "asist:70%", id: 2, cohorte: "FT-08" },
    { name: "ona", asistencia: "asist:90%", id: 3, cohorte: "FT-06" },
    { name: "aye", asistencia: "asist:60%", id: 4, cohorte: "FT-07" },
    { name: "beca", asistencia: "asist:50%", id: 5, cohorte: "FT-08" },
    { name: "rodri", asistencia: "asist:100%", id: 6, cohorte: "FT-09" },
    { name: "rafa", asistencia: "asist:70%", id: 7, cohorte: "FT-06" },
    { name: "Lucio", asistencia: "asist:80%", id: 8, cohorte: "FT-06" },
    { name: "franco", asistencia: "asist:70%", id: 1, cohorte: "FT-07" },
  ];

  const handleFilter = (text) => {
    if (text) {
      const data = Users.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterUser(data);
      setSearch(text);
    } else {
      setFilterUser(Users);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <ListItem
        bottomDivider
        onPress={() =>
          /*props.navigation.navigate("profile")*/ alert(
            "Renderiza al Componente profile cuando este creado"
          )
        }
      >
        <ListItem.Chevron />
        <Avatar source={{}} rounded />
        <ListItem.Content>
          <ListItem.Title>{item.name.toUpperCase()}</ListItem.Title>
          <ListItem.Subtitle style={styles.asistencia}>
            {" "}
            {item.asistencia}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  const getItem = (item) => {
    alert("name : " + item.name);
  };

  //   const filterCohort=(select)=>{

  //     // const filt= Users.filter(user=> user.cohort === cohort)
  //     console.log(cohort,"COHORTE LALALALLLA")
  //   if(select){
  //     const filt=  Users.filter(user=> user.cohorte === cohort)
  //     return(
  //       filt.map(user=>(
  //           <ListItem onPress={() =>
  //            /*props.navigation.navigate("profile")*/ alert(
  //              "Renderiza al Componente profile cuando este creado"
  //            )
  //          }>
  //             <ListItem.Chevron/>
  //             <Avatar source={{}} rounded />
  //             <ListItem.Content>

  //               <ListItem.Title>{user.name.toUpperCase()}</ListItem.Title>
  //             </ListItem.Content>
  //           </ListItem>
  //       ))
  //       )
  //     }
  //   select=false
  //  }

  const handleChange = (label, value) => {
    setCohort(label);
    //console.log(estado,"ESTADO COHORT")
  };
  return (
    <>
      <AppBar {...props} back={"AlumnList"} />
      <ScrollView style={styles.container}>
        <View>
          <Picker
            style={styles.cohort}
            onValueChange={(label) => handleChange(label)}
          >
            <Picker.Item label="Cohorte" />
            <Picker.Item label="FT-06" value="FT-06" />
            <Picker.Item label="FT-07" value="FT-07" />
            <Picker.Item label="FT-08" value="FT-08" />
            <Picker.Item label="FT-09" value="FT-09" />
          </Picker>
          <SearchBar
            style={styles.SearchBar}
            placeholder="Buscar Alumno"
            onChangeText={(text) => handleFilter(text)}
            value={search}
          />

          <FlatList data={filterUser} renderItem={ItemView} />
          {/* <FlatList data={cohort} renderItem={filterCohort}/> */}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  asistencia: {
    display: "flex",
  },
  cohort: {
    marginBottom: 15,
    backgroundColor: "gray",
    // border:"solid",
    borderRadius: 5,
  },
});
export default AlumnList;
