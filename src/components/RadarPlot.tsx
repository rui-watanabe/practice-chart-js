import React from "react";
import { Radar } from "react-chartjs-2";

const data = {
  labels: [
    "Javascript",
    "React",
    "TypeScript",
    "PHP",
    "AWS",
    "CircleCI",
    "Linux",
    "さくらサーバー",
  ],
  datasets: [
    {
      label: "Rui Watanabe",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "#008b8b",
      pointBackgroundColor: "#008b8b",
      pointBorderColor: "#fff",
      data: [80, 50, 30, 65, 50, 20, 65, 75],
    },
  ],
};

const RadarPlot: React.FC = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default RadarPlot;
