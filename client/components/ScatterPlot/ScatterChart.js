import React, { useState, useCallback, useEffect } from 'react';
import { csv, scaleLinear, scaleOrdinal, max, format, extent } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import styles from './ScatterChart.module.css';
import ChartTab from '../ChartTab';
import ColorLegend from './ColorLegend';

//this group here control the charts length and positions
const width = 960;
const height = 500;
const margin = { top: 20, right: 170, bottom: 100, left: 90 };
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

  //this is what controls the color of the dots and the value.
  const colorValue = (d) => d.species;
  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(['#137B80', '#e6842a', '#9a3e25']);

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

  //setting the color of each dots. map over the value and then setting a color for each different type of value

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
          <g transform={`translate(${innerWidth + 50})`}>
            <ColorLegend colorScale={colorScale} />
          </g>
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            colorScale={colorScale}
            colorValue={colorValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={7}
          />
        </g>
      </svg>
    </>
  );
};

export default ScatterChart;
