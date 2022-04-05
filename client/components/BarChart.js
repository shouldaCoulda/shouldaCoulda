import React, { useState, useEffect, useCallback } from "react";
import { csv, scaleBand, scaleLinear, max } from "d3";
import styles from "./BarChart.module.css";
import RaceChart from "./RaceChart";
import ChartTab from "./ChartTab";
import { Chart } from "react-chartjs-2";
import { useAuth } from "../contexts/AuthContext";

//this is the data or csv file we are getting the data from
// const csvUrl =
//   'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

//custom hook made for retrieving data
// const useData = () => {
//   const [data, setData] = useState([]);

//   //use effect to retrieve the data
//   useEffect(() => {
//     //setting the row data to year 2020 and Population
//     const row = (d) => {
//       //+d is setting the data to a number for year 2020
//       d.Population = +d['2020'];
//       return d;
//     };
//     //slicing only the first 10 of the data from the list
//     csv(csvUrl, row).then((data) => {
//       //setting data to data array
//       setData(data.slice(0, 10));
//     });
//   }, []);
//   return data;
// };

//dummy data
const chart = [
  { name: "Netflix", price: 9.99 },
  { name: "Hulu", price: 12.99 },
  { name: "Spotify", price: 15.99 },
  { name: "Amazon", price: 20 },
  { name: "Youtube", price: 17 },
  { name: "HBO Max", price: 9.99 },
];

const width = 85;
const height = 500;
const margin = { top: 35, right: 20, bottom: 70, left: 200 };

//use state in the component to set data
const BarChart = () => {
  const {
    usersSubscriptions,
    usersExpenses,
    usersIncomes,
    usersTotalIncomeAndExpenses,
  } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (usersSubscriptions && usersSubscriptions.length > 0) {
      setData(usersSubscriptions);
    }
  }, [usersSubscriptions]);

  console.log("data", data);

  //condition is the data is not exist then give a loading message
  if (!data) {
    return <pre>Loading...</pre>;
  }

  //helps to control the margin
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  //Axis controller, this function target the yValue of Chart
  const yValue = (data) => {
    return data.name;
  };

  //Axis controller this function target the xValue of Chart
  const xValue = (data) => {
    return data.price;
  };

  //set the Y scale mapping the country data and range from 0 to the innerHeight
  //scaleBand is a d3 method
  //yScale is the country name in the y Axis
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.2);

  //set the X scale Population from 0 to width
  //xScale shows the Population the x axis
  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    /*It use svg tab to show the chart mapping the array and displaying the data in this format
    <g> === group element
    <g transform={`translate(${margin.left},${margin.top})`}> is use to move the graph position
    <line> creates the vertical tick lines x1,x2,y1,y2 is use to control position of tick lines
    */

    //setting text y={innerHeight} puts the text to the bottom of chart
    //dy is moving the tick values down a little by 1.1em
    <>
      <ChartTab />
      <svg width={width} height={height}>
        <g
          className={styles.tick}
          transform={`translate(${margin.left},${margin.top})`}
        >
          {xScale.ticks().map((tickValue, i) => {
            return (
              <g key={i} transform={`translate(${xScale(tickValue)},0)`}>
                <line x1={0} y1={0} x2={0} y2={innerHeight} />
                <text
                  y={innerHeight}
                  style={{ textAnchor: "middle" }}
                  dy="1.1em"
                >
                  {tickValue}
                </text>
              </g>
            );
          })}
          {yScale.domain().map((tickValue, i) => {
            return (
              <g
                key={i}
                transform={`translate(0,${
                  yScale(tickValue) + yScale.bandwidth() / 2
                })`}
              >
                <text style={{ textAnchor: "end" }} x={-4} dy=".32em">
                  {tickValue}
                </text>
              </g>
            );
          })}
          <text
            className={styles.textAxis}
            x={innerWidth / 2}
            y={-5}
            textAnchor="middle"
          >
            Subscriptions
          </text>
          {data.map((d, i) => (
            <rect
              className={styles.marks}
              key={i}
              y={yScale(yValue(d))}
              width={xScale(xValue(d))}
              height={yScale.bandwidth()}
            >
              <title>{xValue(d)}</title>
            </rect>
          ))}
        </g>
      </svg>
      <svg width={width} height={height}>
        <g
          className={styles.tick}
          transform={`translate(${margin.left},${margin.top})`}
        >
          {xScale.ticks().map((tickValue, i) => {
            return (
              <g key={i} transform={`translate(${xScale(tickValue)},0)`}>
                <line x1={0} y1={0} x2={0} y2={innerHeight} />
                <text
                  y={innerHeight}
                  style={{ textAnchor: "middle" }}
                  dy="1.1em"
                >
                  {tickValue}
                </text>
              </g>
            );
          })}
          {yScale.domain().map((tickValue, i) => {
            return (
              <g
                key={i}
                transform={`translate(0,${
                  yScale(tickValue) + yScale.bandwidth() / 2
                })`}
              >
                <text style={{ textAnchor: "end" }} x={-4} dy=".32em">
                  {tickValue}
                </text>
              </g>
            );
          })}
          <text
            className={styles.textAxis}
            x={innerWidth / 2}
            y={-5}
            textAnchor="middle"
          >
            Expenses
          </text>
          {data.map((d, i) => (
            <rect
              className={styles.marks_two}
              key={i}
              y={yScale(yValue(d))}
              width={xScale(xValue(d))}
              height={yScale.bandwidth()}
            >
              <title>{xValue(d)}</title>
            </rect>
          ))}
        </g>
      </svg>
    </>
  );
};

export default BarChart;
