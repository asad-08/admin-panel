import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getMode } from "../../redux/theme/themeSlice";

const LineChart = () => {
  const mode = useSelector(getMode);
  const chartData = {
    series: [
      {
        name: "Sales",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/08/2021",
          "2/08/2021",
          "3/08/2021",
          "4/08/2021",
          "5/08/2021",
          "6/08/2021",
          "7/08/2021",
          "8/08/2021",
          "9/08/2021",
          "10/08/2021",
          "11/08/2021",
          "12/08/2021",
          "1/08/2022",
          "2/08/2022",
          "3/08/2022",
          "4/08/2022",
          "5/08/2022",
          "6/08/2022",
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          },
          style: {
            colors: mode == "dark" ? "#F1F9F5" : "black",
          },
        },
      },
      title: {
        text: "Selling Forecast",
        align: "left",

        style: {
          fontSize: "25px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: mode == "dark" ? "#F1F9F5" : "black",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "vertical",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: -10,
        max: 40,
        labels: {
          style: {
            colors: mode == "dark" ? "#F1F9F5" : "black",
          },
        },
      },
    },
  };

  return (
    <div className="charts min-h-[85vh] p-8 w-full bg-skin-base rounded-lg flex items-center justify-center dark:bg-slate-600">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={500}
      />
    </div>
  );
};

export default LineChart;
