import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartTab from './ChartTab';
import { useAuth } from '../contexts/AuthContext';

const MultiBarChart = () => {
  const {
    usersSubscriptions,
    usersExpenses,
    usersIncomes,
    getTotalSubscriptions,
    getTotalExpenses,
    usersTotalIncomeAndExpenses,
    getTotalIncomes,
  } = useAuth();
  console.log(getTotalIncomes());
  const data = {
    labels: ['Total'],
    datasets: [
      {
        axis: 'y',
        label: 'Subscriptions',
        data: [getTotalSubscriptions()],

        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Expense',
        data: [getTotalExpenses()],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
      },
      {
        label: 'Money Remaining',
        data: [
          getTotalIncomes() - getTotalExpenses() - getTotalSubscriptions(),
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Income',
        data: [getTotalIncomes()],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };
  const options = {
    indexAxis: 'y',
    scales: {
      y: {
        ticks: {
          crossAlign: 'far',
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
};

export default MultiBarChart;
