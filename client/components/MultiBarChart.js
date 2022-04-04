import React from 'react';
import { Bar } from 'react-chartjs-2';

const MultiBarChart = () => {
  const data = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'expenses',
        data: [100, 125, 150, 175, 200, 250, 300],
        backgroundColor: ['rgba(0,10,220,0)'],
      },
      {
        label: 'subscriptions',
        data: [200, 100, 170, 50, 99, 300, 400],
        backgroundColor: ['rgba(255, 165, 0,0)'],
      },
      {
        label: 'others',
        data: [50, 75, 40, 30, 150, 125, 150],
        backgroundColor: ['rgb(106, 90, 205,0)'],
      },
    ],
  };
  return <Bar data={data} />;
};

export default MultiBarChart;
