import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import * as data from "./Data";

const screenWidth = Dimensions.get("window").width;

const ThemesPieChart = ({ cohorte }) => {
  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientTo: "#FFFFFF",
    color: (opacity = 1) => `rgba(30,41,35, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const createData = () => {
    let selectedCohorteThemeTables = data.activeThemeTables.sort((a, b) =>
      a.studentsByCohorte[cohorte] < b.studentsByCohorte[cohorte] ? 1 : -1
    );
    let grey = (id) => {
      return 50 + id * 10;
    };

    return selectedCohorteThemeTables.map((theme) => {
      return {
        name: theme.name,
        students: theme.studentsByCohorte[cohorte],
        color: `#${grey(theme.id)}${grey(theme.id)}${grey(theme.id)}`,
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
      };
    });
  };

  return (
    <PieChart
      data={createData()}
      width={350}
      height={200}
      chartConfig={chartConfig}
      accessor={"students"}
      backgroundColor={"transparent"}
      center={[10, 10]}
      absolute
    />
  );
};

export default ThemesPieChart;
