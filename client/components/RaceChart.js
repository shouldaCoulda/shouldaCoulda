import React, { useRef, useEffect } from 'react';
import { Runtime, Inspector } from '@observablehq/runtime';
import notebook from '@d3/bar-chart-race';
import ChartTab from './ChartTab';

const RaceChart = () => {
  return (
    <>
      <ChartTab />
      <h2>Company Value In Millions From 2000-2019</h2>
      <iframe
        width='100%'
        height='725'
        frameBorder='0'
        src='https://observablehq.com/embed/@d3/bar-chart-race?cells=chart%2Cviewof+replay'
      ></iframe>
    </>
  );
};

export default RaceChart;
