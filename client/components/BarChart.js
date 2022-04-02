import React, { useState, useEffect, useCallback } from 'react';
import { csv, scaleBand, scaleLinear, max } from 'd3';

//this is the data or csv file we are getting the data from
const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

const width = 960;
const height = 500;

//use state in the component to set data
const BarChart = () => {
  const [data, setData] = useState(null);

  //use effect to retrieve the data
  useEffect(() => {
    //setting the row data to year 2020 and Population
    const row = (d) => {
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

  //set the Y axis mapping the country data and range from 0 to the height
  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, height]);

  //set the X axis Population from 0 to width
  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, width]);

  return (
    //It use svg tab to show the chart mapping the array and displaying the data in this format
    <svg width={width} height={height}>
      {data.map((d) => (
        <rect
          key={d.Country}
          y={yScale(d.Country)}
          width={xScale(d.Population)}
          height={yScale.bandwidth()}
        />
      ))}
    </svg>
  );
};

export default BarChart;
