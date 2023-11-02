import React from 'react';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RadialBarChart = () => {
  const chartOptions = {
    series: [70],
    chart: {
      height: 200,
      type: 'radialBar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '75%',
          background: '#2C2C2C',
          imageOffsetX: 0,
          imageOffsetY: 0,
          margin: 10,
        },
        track: {
          background: 'rgba(255, 163, 0, 0.06)',
          strokeWidth: '60%',
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -7,
            show: true,
            color: '#7C7C7C',
            fontSize: '14px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'regular',
          },
          value: {
            offsetY: 7,
            color: '#fff',
            fontSize: '18px',
            show: true,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
          }
        },
      },
    },
    labels: ['Total Seats'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          {
            offset: 20,
            color: "#FA631E",
            opacity: 1
          },
          {
            offset: 60,
            color: "#FFAD01",
            opacity: 1
          }
        ]
      }
    },
    stroke: {
      lineCap: 'round'
    },
  };

  return (
    <>
      <div id='radialChart'>
        <ApexChart options={chartOptions} series={chartOptions.series} type="radialBar" height={200} />
      </div>
    </>
  );
};

export default RadialBarChart;
