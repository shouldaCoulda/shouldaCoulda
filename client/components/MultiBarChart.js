import React from 'react';
import { Bar } from 'react-chartjs-2';

const MultiBarChart = () => {
  const data = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'expense',
        data: [100, 125, 150, 175, 200, 250, 300],
      },
    ],
  };
  return <Bar data={data} />;
};

export default MultiBarChart;
