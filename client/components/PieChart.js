import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartTab from "./ChartTab";
import { Container } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

const PieChart = () => {
  const { getExpenseArray } = useAuth();

  console.log("test", getExpenseArray());
  return (
    <div>
      <ChartTab />
      <Pie
        data={{
          labels: ["Youtube", "Hulu", "Netflix", "Amazon", "Disney+", "Sling"],
          datasets: [
            {
              label: "# of votes",
              data: [12, 19, 20, 9.99, 15, 12],
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
          responsive: false,
          maintainAspectRatio: false,
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
    </div>
  );
};

export default PieChart;
