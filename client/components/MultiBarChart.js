import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartTab from './ChartTab';
import { useAuth } from '../contexts/AuthContext';

const MultiBarChart = () => {
  const {
    usersSubscriptions,
    usersExpenses,
    usersIncomes,
    usersTotalIncomeAndExpenses,
  } = useAuth();
  const data = {
    labels: [
      ...usersSubscriptions.map((sub) => {
        return sub.name;
      }),
    ],
    datasets: [
      {
        label: ['Subscription'],
        data: [
          ...usersSubscriptions.map((sub) => {
            return sub.price;
          }),
        ],
        backgroundColor: ['rgba(0,10,220,1)', 'rgba(215, 169, 201, 1)'],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: 'Bar Chart',
    },
    scales: {
      yAxis: {
        ticks: {
          min: 0,
        },
      },
    },
  };
  return (
    <>
      <ChartTab />
      <Bar data={data} options={options} />
    </>
  );
};

export default MultiBarChart;
