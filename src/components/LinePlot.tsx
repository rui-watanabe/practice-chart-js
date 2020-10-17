import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo line plot",
      backgroundColor: "#008080",
      borderColor: "#7fffd4",
      pointBorderWidth: 10,
      data: [4, 6, 7, 9, 11, 55, 57],
    },
  ],
};

const LinePlot: React.FC = () => {
  return (
    <>
      <Line data={data} />
    </>
  );
};

export default LinePlot;
