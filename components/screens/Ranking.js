import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { DataTable, Avatar } from "react-native-paper";
import { Appbar } from "react-native-paper";
import * as data from "../../components/screens/admin/Data";
import profile from "../../assets/profile.jpeg";

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 40, height: 32 }}
      source={require("../../assets/anneLogo.png")}
    />
  );
};

export const Ranking = (props) => {
  const sorting = () => {
    const sort = data.alumniRanking
      .sort((a, b) => {
        if (a.points > b.points) {
          return -1;
        } else {
          return 1;
        }
      })
      .slice(0, props.small ? 3 : sort?.length);
    return sort;
  };

  return (
    <>
      {!props.small ? (
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
            icon="bell-circle-outline"
            color="#000"
            onPress={() => console.log("Hi2")}
          />
        </Appbar.Header>
      ) : null}
      <ScrollView>
        <View style={styles.container}>
          {!props.small ? (
            <Text style={[styles.title, { marginTop: 25 }]}>RANKING</Text>
          ) : null}
          <View
            style={[
              styles.rankingBox,
              !props.small ? { width: "90%" } : { width: 320 },
            ]}
          >
            <DataTable>
              <DataTable.Header>
                <DataTable.Title></DataTable.Title>
                <DataTable.Title>#</DataTable.Title>
                <DataTable.Title>Nombre</DataTable.Title>
                <DataTable.Title numeric>Puntos</DataTable.Title>
              </DataTable.Header>

              {sorting().map((x, i) => {
                return (
                  <DataTable.Row key={x.id}>
                    <DataTable.Cell>
                      <Avatar.Image size={36} source={profile} />
                    </DataTable.Cell>
                    <DataTable.Cell>{i + 1}</DataTable.Cell>
                    <DataTable.Cell>{x.name}</DataTable.Cell>
                    <DataTable.Cell numeric>{x.points}</DataTable.Cell>
                  </DataTable.Row>
                );
              })}
              {props.small ? (
                <>
                  <Text style={styles.specialRow}>&#128526;</Text>
                  <DataTable.Row key={data.user[0].id}>
                    <DataTable.Cell>
                      <Avatar.Image size={24} source={profile} />
                    </DataTable.Cell>
                    <DataTable.Cell>{16}</DataTable.Cell>
                    <DataTable.Cell>{data.user[0].name}</DataTable.Cell>
                    <DataTable.Cell numeric>
                      {data.user[0].points}
                    </DataTable.Cell>
                  </DataTable.Row>
                </>
              ) : null}

              {!props.small ? (
                <DataTable.Pagination
                  page={1}
                  numberOfPages={3}
                  onPageChange={(page) => {
                    alert("CALMATE. TODAVÍA NO ANDA EL PAGINADO!");
                  }}
                  label="1-2 of 6"
                />
              ) : null}
            </DataTable>
            {!props.small ? <View style={{ marginBottom: 25 }}></View> : null}

            {props.small ? (
              <View style={styles.rankingBox}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    props.navigation.navigate("Ranking", {
                      small: false,
                    })
                  }
                >
                  <Text style={{ color: "#000", fontWeight: "bold" }}>
                    VER TODO EL RANKING
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#ffffff",
  },
  title: {
    marginBottom: 10,
    fontWeight: "bold",
    backgroundColor: "#F6F600",
    width: "90%",
    padding: 10,
    textAlign: "center",
    borderRadius: 8,
  },
  specialRow: {
    fontWeight: "500",
    backgroundColor: "#d3d3d3",
    width: "100%",
    padding: 5,
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
    borderRadius: 8,
    fontSize: 20,
  },
  rankingBox: {
    color: "#F6F600",
    alignItems: "center",
    marginTop: 5,
  },
  rankingRow: {
    color: "#F6F600",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fab913",
    borderRadius: 8,
    marginTop: 25,
    padding: 15,
    width: 192,
    fontWeight: "300",
  },
});
export default Ranking;
