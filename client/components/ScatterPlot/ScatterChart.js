import React, { useState, useCallback, useEffect } from 'react';
import { csv, scaleLinear, max, format, extent } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const xAxisLabelOffset = 50;

const ScatterChart = () => {
  //extent is using min and max
  //scatter plots uses scaleLinear for both the x and y scale

  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  //this helps control the positions of the the height and width of chart
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  //this is the x and y value of the chart
  const xValue = (d) => d.sepal_length;
  const yValue = (d) => d.sepal_width;

  const siFormat = format('.2s');
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace('G', 'B');

  //scatter plots use scaleLiner for both x and y scale
  const xScale = scaleLinear()
    .domain([extent(data, xValue)])
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain([extent(data, yValue)])
    .range([0, innerHeight]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} innerWidth={innerWidth} />
        <text
          className='axis-label'
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor='middle'
        >
          Population
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  );
};

export default ScatterChart;
