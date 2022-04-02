import React, { useState, useEffect, useCallback } from 'react';
import { csv, scaleBand, scaleLinear, max } from 'd3';

//this is the data or csv file we are getting the data from
const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

const width = 960;
const height = 500;
//setting margin
const margin = { top: 20, right: 20, bottom: 50, left: 20 };

//use state in the component to set data
const BarChart = () => {
  const [data, setData] = useState([]);

  //use effect to retrieve the data
  useEffect(() => {
    //setting the row data to year 2020 and Population
    const row = (d) => {
      //+d is setting the data to a number for year 2020
      d.Population = +d['2020'];
      return d;
    };
    //slicing only the first 10 of the data from the list
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  //condition is the data is not exist then give a loading message
  if (!data) {
    return <pre>Loading...</pre>;
  }

  console.log(data[0]);

  //helps to control the margin
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  //set the Y scale mapping the country data and range from 0 to the height
  //scaleBand is a d3 method
  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);

  //set the X scale Population from 0 to width
  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);

  return (
    /*It use svg tab to show the chart mapping the array and displaying the data in this format
    <g> === group element
    <g transform={`translate(${margin.left},${margin.top})`}> is use to move the graph position
    <line> creates the vertical line x1,x2,y1,y2 is use to control position of line
    */
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {xScale.ticks().map((tickValue) => {
          return (
            <line
              x1={xScale(tickValue)}
              y1={0}
              x2={xScale(tickValue)}
              y2={innerHeight}
              stroke='green'
            />
          );
        })}
        {data.map((d) => (
          <rect
            key={d.Country}
            y={yScale(d.Country)}
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  );
};

export default BarChart;
