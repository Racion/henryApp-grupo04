import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import * as data from "../screens/admin/Data";

const screenWidth = Dimensions.get("window").width - 16;

const AssistanceLinear = ({ group }) => {
  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientTo: "#FFFFFF",
    color: (opacity = 1) => `rgba(30,41,35, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
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
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      datasets: [
        {
          data: [75, 65, 78, 40, 69, 83],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],
    };
  };

  return (
    <LineChart
      data={createDataByGroup()}
      width={screenWidth}
      height={250}
      verticalLabelRotation={30}
      chartConfig={chartConfig}
      fromZero={true}
      bezier
    />
  );
};

export default AssistanceLinear;
