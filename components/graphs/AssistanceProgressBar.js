import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import * as data from "../screens/admin/Data";

const screenWidth = Dimensions.get("window").width - 16;

const AssistanceProgressBar = ({ group, cohorte }) => {
  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientTo: "#FFFFFF",
    color: (opacity = 1) => `rgba(30,41,35, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const createDataByCohorte = () => {
    let selectedCohorteGroups = data.groups
      .filter((group) => group.cohorte == cohorte)
      .sort((a, b) =>
        a.studentsConnected / a.totalStudents <
        b.studentsConnected / b.totalStudents
          ? 1
          : -1
      );
    return {
      labels: selectedCohorteGroups.map((group) => "Grupo " + group.id + "-"),
      data: selectedCohorteGroups.map(
        (group) => group.studentsConnected / group.totalStudents
      ),
    };
  };

  const createDataByGroup = () => {
    let selectedCohorteGroups = data.groups
      .filter((g) => g.id == group.id)
      .sort((a, b) =>
        a.studentsConnected / a.totalStudents <
        b.studentsConnected / b.totalStudents
          ? 1
          : -1
      );
    return {
      labels: selectedCohorteGroups.map((group) => "Grupo " + group.id + "-"),
      data: selectedCohorteGroups.map(
        (group) => group.studentsConnected / group.totalStudents
      ),
    };
  };

  return (
    <ProgressChart
      data={group ? createDataByGroup() : createDataByCohorte()}
      width={350}
      height={200}
      strokeWidth={10}
      radius={30}
      chartConfig={chartConfig}
      accessor={"students"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      center={[10, 10]}
      hideLegend={false}
    />
  );
};

export default AssistanceProgressBar;
