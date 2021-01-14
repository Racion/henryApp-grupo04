import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import * as data from "../screens/admin/Data";

const screenWidth = Dimensions.get("window").width;

const CohortePieChart = ({ theme }) => {
  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientTo: "#FFFFFF",
    color: (opacity = 1) => `rgba(30,41,35, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const createData = () => {
    let selectedThemeTables = data.activeThemeTables.filter(
      (t) => t.id === theme
    );
    return Object.entries(selectedThemeTables[0].studentsByCohorte).map(
      (cohorte) => {
        return {
          name: "FT0" + cohorte[0],
          students: cohorte[1],
          color: `rgba(131, 167, 234)`,
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        };
      }
    );
  };

  return (
    <PieChart
      data={createData()}
      width={350}
      height={250}
      chartConfig={chartConfig}
      accessor={"students"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      center={[10, 10]}
    />
  );
};

export default CohortePieChart;
