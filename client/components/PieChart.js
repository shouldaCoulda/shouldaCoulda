import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartTab from "./ChartTab";
import { Box } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

const PieChart = () => {
  const {
    usersSubscriptions,
    usersExpenses,
    usersIncomes,
    usersTotalIncomeAndExpenses,
  } = useAuth();

  return (
    <Box sx={{ m: "auto", mb: 10, width: "75vw" }}>
      <ChartTab />
      <h1>Your Subscriptions</h1>
      <Pie
        data={{
          labels: [
            ...usersSubscriptions.map((sub) => {
              return sub.name;
            }),
          ],
          datasets: [
            {
              label: "# of votes",
              data: usersSubscriptions.map((sub, i) => {
                return sub.price;
              }),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={600}
        width={1000}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            // yAxes: {
            //   ticks: {
            //     beginAtZero: true,
            //   },
            // },
          },
          legend: {
            labels: {
              fontSize: 40,
            },
          },
        }}
      />

      <h1>Your Expenses</h1>
<hr></hr>

      <Pie
        data={{
          labels: [
            ...usersExpenses.map((expense) => {
              return expense.name;
            }),
          ],
          datasets: [
            {
              label: "# of votes",
              data: usersExpenses.map((expense, i) => {
                return expense.price;
              }),
              backgroundColor: [
                "rgba(115, 30, 102, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(115, 30, 102, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(115, 30, 102, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={600}
        width={1000}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            // yAxes: {
            //   ticks: {
            //     beginAtZero: true,
            //   },
            // },
          },
          legend: {
            labels: {
              fontSize: 40,
            },
          },
        }}
      />
    </Box>
  );
};

export default PieChart;
