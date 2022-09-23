import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineColumnAreaChart = () => {
  const chartData = {
    series: [
      {
        name: "Buy",
        type: "column",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56],
      },
      {
        name: "Sell",
        type: "area",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44],
      },
      {
        name: "Revenue",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59],
      },
    ],
    options: {
      chart: {
        height: 400,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "month",
      },
      yaxis: {
        title: {
          text: "Amount",
        },
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " Units";
            }
            return y;
          },
        },
      },
    },
  };

  return (
    <div id="chart" className={"w-full dark:!text-slate-100"}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={400}
      />
    </div>
  );
};
export default LineColumnAreaChart;
