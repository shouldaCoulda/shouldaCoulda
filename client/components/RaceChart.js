import React, { useRef, useEffect } from 'react';
import { Runtime, Inspector } from '@observablehq/runtime';
import notebook from '@d3/bar-chart-race';

const RaceChart = () => {
  const chartRef = useRef();
  const viewofReplayRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === 'chart') return new Inspector(chartRef.current);
      if (name === 'viewof replay')
        return new Inspector(viewofReplayRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chartRef} />
      <div ref={viewofReplayRef} />
      <p>
        Credit:{' '}
        <a href='https://observablehq.com/@d3/bar-chart-race'>
          Bar Chart Race by D3
        </a>
      </p>
    </>
  );
};

export default RaceChart;
