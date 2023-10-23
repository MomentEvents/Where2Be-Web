import React from 'react';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
  series: [{
    name: 'series1',
    data: [31, 60, 50, 71, 55, 90, 100]
  }, {
    name: 'series2',
    data: [30, 65, 40, 60, 45, 100, 90]
  }],
  chart: {
    width: '100%',
    height: 275,
    foreColor: '#f00',
    type: 'line',
    toolbar: {
      show: false
    },
  },
  markers: {
    size: 0,
  },
  grid: {
    borderColor: "rgba(211, 211, 211, 0.5)",
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#F87A58", "#F7426F"],
  stroke: {
    curve: 'smooth',
    width: 4,
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    offsetY: 0,
    offsetX: 5,
    labels: {
      style: {
        colors: '#999999',
        fontSize: '13px',
        fontFamily: 'Inter',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label',
      },
    },
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#999999',
        fontSize: '13px',
        fontFamily: 'Inter',
        fontWeight: 100,

      },
      formatter: function (y) {
        return y.toFixed(0) + "k";
      }
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  legend: {
    show: false,
  },
  hollow: {
    margin: 20,
    size: '65%',
    background: '#fff',
    image: undefined,
    imageOffsetX: 0,
    imageOffsetY: 0,
    position: 'front',
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      opacity: 0.1
    }
  },
  markers: {
    hover: {
      size: 5,
      sizeOffset: 3
    }
  }
};

const AreaChart = () => {
  return (
    <ApexChart options={options} series={options.series} type="area" height={275} />
  );
};

export default AreaChart;
