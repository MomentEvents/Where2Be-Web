import React from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  series: [
    {
      name: "HKN Tech Talk with Google",
      data: [31, 60, 50, 71, 55, 90, 100],
    },
    {
      name: "Bonfire with HKN",
      data: [30, 65, 40, 60, 45, 140, 90],
    },
    {
      name: "HKN Resume Workshop",
      data: [40, 25, 10, 30, 12, 4, 36],
    },
    {
      name: "HKN Technical Interview Workshop",
      data: [23, 84, 54, 31, 79, 52, 40],
    },
  ],
  chart: {
    width: "100%",
    height: 275,
    foreColor: "#f00",
    type: "line",
    toolbar: {
      show: false,
    },
  },
  markers: {
    size: 0,
  },
  grid: {
    borderColor: "rgba(211, 211, 211, 0.5)",
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#CC96FF", "#8300FF", "#A94FFF", "#DDBAFF", "#CA98FA"],
  stroke: {
    curve: "smooth",
    width: 4,
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    },
  },
  xaxis: {
    categories: ["", "", "", "", "", "", ""],
    offsetY: 0,
    offsetX: 5,
    labels: {
      style: {
        colors: "#999999",
        fontSize: "13px",
        fontFamily: "Poppins",
        fontWeight: 400,
        cssClass: "apexcharts-xaxis-label",
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#999999",
        fontSize: "13px",
        fontFamily: "Poppins",
        fontWeight: 100,
      },
      formatter: function (y) {
        return y.toFixed(0);
      },
    },
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return `${seriesName}:`;
        },
      },
      formatter: function (value) {
        return `${value} signups`;
      },
    },
  },
  legend: {
    show: false,
  },
  hollow: {
    margin: 20,
    size: "65%",
    background: "#fff",
    image: undefined,
    imageOffsetX: 0,
    imageOffsetY: 0,
    position: "front",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      opacity: 0.1,
    },
  },
  markers: {
    hover: {
      size: 5,
      sizeOffset: 3,
    },
  },
};

const AreaChart = () => {
  return (
    <ApexChart
      options={options}
      series={options.series}
      type="area"
      height={275}
    />
  );
};

export default AreaChart;
