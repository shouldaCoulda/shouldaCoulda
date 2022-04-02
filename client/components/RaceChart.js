import React, { useRef, useEffect } from 'react';
import { Runtime, Inspector } from '@observablehq/runtime';
import notebook from '@d3/bar-chart-race';

const RaceChart = () => {
  return (
    <>
      <iframe
        width='100%'
        height='725'
        frameborder='0'
        src='https://observablehq.com/embed/@d3/bar-chart-race?cells=chart%2Cviewof+replay'
      ></iframe>
    </>
  );
};

export default RaceChart;
