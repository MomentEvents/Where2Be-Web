

import React from 'react';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChart = () => {
  const chartOptions = {
    series: [30, 30, 25, 15,],
    chart: {
        type: 'donut',
        width: 320,
    },
    stroke: {
        show: true,
        width: 0,
    },
    dataLabels: {
        style: {
            colors: ["#fff"],
            fontSize: '12px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
        },
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            customScale: 1,
            donut: {
                size: '55%',
                background: '#2C2C2C',
            },
        }
    },
    labels: ["Direct", "Email", "Social", "Others"],
    colors: ["#F7B84B", "#405189", "#299CDB", "#F06548"],
    legend: {
        show: true,
        position: 'bottom',
        verticalAlign: 'bottom',
        align: 'center',
        fontSize: '14px',
        colors: ["#F7B84B"],
        fontWeight: 400,
        labels: {
            colors: ["#7C7C7C"],
        },
        markers: {
            width: 8,
            height: 8,
            strokeWidth: 0,
            strokeColor: '#fff',
            radius: 12,
            offsetX: -2,
            offsetY: 0,
        },
        itemMargin: {
            horizontal: 5,
            vertical: 0
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
    },
    responsive: [{
        breakpoint: 450,
        options: {
            chart: {
                width: 280
            },
        }
    }]
};

  return (
    <>
      <div id='pieChart'>
        <ApexChart options={chartOptions} series={chartOptions.series} type="donut"  />
      </div>
    </>
  );
};

export default PieChart;
