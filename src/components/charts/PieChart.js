import React from "react";
import ReactApexChart from "react-apexcharts";

import { useSelector } from "react-redux";
import { getMode } from "../../redux/theme/themeSlice";
const PieChart = () => {
  const mode = useSelector(getMode);
  const chartData = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      title: {
        text: "Teamwise Performance",
        style: {
          fontSize: "25px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: mode == "dark" ? "#F1F9F5" : "black",
        },
      },
      legend: {
        labels: {
          colors: mode == "dark" ? "#F1F9F5" : "black",
          useSeriesColors: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="charts min-h-[85vh] p-8 w-full bg-skin-base rounded-lg flex items-center justify-center dark:bg-slate-600">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={500}
      />
    </div>
  );
};

export default PieChart;
