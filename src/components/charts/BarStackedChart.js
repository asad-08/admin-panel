import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getMode } from "../../redux/theme/themeSlice";

const BarStackedChart = () => {
  const mode = useSelector(getMode);
  const chartData = {
    series: [
      {
        name: "PRODUCT 1",
        data: [44, 55, 41, 67, 22, 43, 21, 49],
      },
      {
        name: "PRODUCT 2",
        data: [13, 23, 20, 8, 13, 27, 33, 12],
      },
      {
        name: "PRODUCT 3",
        data: [11, 17, 15, 15, 21, 14, 15, 13],
      },
      {
        name: "PRODUCT 4",
        data: [44, 55, 41, 67, 22, 43, 21, 49],
      },
      {
        name: "PRODUCT 5",
        data: [13, 23, 20, 8, 13, 27, 33, 12],
      },
      {
        name: "PRODUCT 6",
        data: [11, 17, 15, 15, 21, 14, 15, 13],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
      },
      title: {
        text: "Quarterwise Product Sell",
        style: {
          fontSize: "25px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: mode == "dark" ? "#F1F9F5" : "black",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: [
          "2020 Q1",
          "2020 Q2",
          "2020 Q3",
          "2020 Q4",
          "2021 Q1",
          "2021 Q2",
          "2021 Q3",
          "2021 Q4",
        ],
        labels: {
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
      fill: {
        opacity: 1,
      },
      legend: {
        position: "right",
        offsetX: 0,
        offsetY: 50,
        labels: {
          colors: mode == "dark" ? "#F1F9F5" : "black",
          useSeriesColors: false,
        },
      },
    },
  };
  return (
    <div className="charts min-h-[85vh] p-8 w-full bg-skin-base rounded-lg flex items-center justify-center dark:bg-slate-600">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={500}
      />
    </div>
  );
};

export default BarStackedChart;
