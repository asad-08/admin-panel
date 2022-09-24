import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getMode } from "../../redux/theme/themeSlice";

const BubbleChart = () => {
  const mode = useSelector(getMode);
  function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([baseval, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  const chartData = {
    series: [
      {
        name: "Product1",
        data: generateData(new Date("11 Sep 2022 GMT").getTime(), 20, {
          min: 10,
          max: 100,
        }),
      },
      {
        name: "Product2",
        data: generateData(new Date("11 Sep 2022 GMT").getTime(), 20, {
          min: 10,
          max: 100,
        }),
      },
      {
        name: "Product3",
        data: generateData(new Date("11 Sep 2022 GMT").getTime(), 20, {
          min: 10,
          max: 100,
        }),
      },
      {
        name: "Product4",
        data: generateData(new Date("11 Sep 2022 GMT").getTime(), 20, {
          min: 10,
          max: 100,
        }),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bubble",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      title: {
        text: "Product Selling Trend",
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
        tickAmount: 12,
        type: "datetime",
        labels: {
          rotate: 0,
          style: {
            colors: mode == "dark" ? "#F1F9F5" : "black",
          },
        },
      },
      yaxis: {
        max: 100,
        labels: {
          style: {
            colors: mode == "dark" ? "#F1F9F5" : "black",
          },
        },
      },
      theme: {
        palette: "palette2",
      },
    },
  };
  return (
    <div className="charts min-h-[85vh] p-8 w-full bg-skin-base rounded-lg flex items-center justify-center dark:bg-slate-600">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bubble"
        height={500}
      />
    </div>
  );
};

export default BubbleChart;
