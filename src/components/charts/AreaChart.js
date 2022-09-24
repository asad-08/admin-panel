import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getMode } from "../../redux/theme/themeSlice";

const AreaChart = () => {
  const mode = useSelector(getMode);
  const chartData = {
    series: [
      {
        name: "Sell",
        data: [321, 210, 24, 53, 75, 23, 234],
      },
      {
        name: "Revenue",
        data: [234, 231, 324, 23, 554, 11, 23],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Sell vs Revenue",
        align: "left",
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
      xaxis: {
        type: "datetime",
        categories: [
          "2022-09-19T00:00:00.000Z",
          "2022-09-19T01:30:00.000Z",
          "2022-09-19T02:30:00.000Z",
          "2022-09-19T03:30:00.000Z",
          "2022-09-19T04:30:00.000Z",
          "2022-09-19T05:30:00.000Z",
          "2022-09-19T06:30:00.000Z",
        ],
        labels: {
          rotate: 0,
          style: {
            colors: mode == "dark" ? "#F1F9F5" : "black",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: mode == "dark" ? "#F1F9F5" : "black",
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };
  return (
    <div className="charts min-h-[85vh] p-8 w-full bg-skin-base rounded-lg flex items-center justify-center dark:bg-slate-600">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={500}
      />
    </div>
  );
};

export default AreaChart;
