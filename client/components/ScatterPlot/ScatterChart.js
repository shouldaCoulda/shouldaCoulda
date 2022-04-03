import React, { useState, useCallback, useEffect } from 'react';
import { csv, scaleLinear, max, format, extent } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import styles from './ScatterChart.module.css';
import ChartTab from '../ChartTab';

//this group here control the charts length and positions
const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 100, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

const ScatterChart = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  //control what the X value and name is
  const xValue = (d) => d.petal_length;
  const xAxisLabel = 'Petal Length';

  //controls what the Y value and name is
  const yValue = (d) => d.sepal_width;
  const yAxisLabel = 'Sepal Width';

  const siFormat = format('.2s');
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace('G', 'B');

  //scatter plots uses scaleLinear for x and the y scale
  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

  //text anchor is for the text and is set to middle position
  //we are splitting the graph into different components
  return (
    <>
      <ChartTab />
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
            tickOffset={5}
          />
          <text
            className={styles.axis_label}
            textAnchor='middle'
            transform={`translate(${-yAxisLabelOffset},${
              innerHeight / 2
            }) rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
          <text
            className={styles.axis_label}
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor='middle'
          >
            {xAxisLabel}
          </text>
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={7}
          />
        </g>
      </svg>
    </>
  );
};

export default ScatterChart;
