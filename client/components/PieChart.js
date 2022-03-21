import React from 'react';
import { VictoryPie } from 'victory';

const data = [
  { x: 'Netflix', y: 130 },
  { x: 'Hulu', y: 165 },
  { x: 'Spotify', y: 140 },
  { x: 'Youtube TV', y: 190 },
];

const PieChart = () => {
  return (
    <div>
      Hello
      <VictoryPie data={data} />
    </div>
  );
};

export default PieChart;
