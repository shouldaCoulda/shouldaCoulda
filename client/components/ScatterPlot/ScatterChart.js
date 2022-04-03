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
  const xScale = scaleLinear()
    .domain([extent(data, xValue)])
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain([extent(data, yValue)])
    .range([0, innerHeight]);

    return ()
};

export default ScatterChart;
