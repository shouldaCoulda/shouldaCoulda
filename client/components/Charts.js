import React from 'react';

import { VictoryBar, VictoryChart } from 'victory';

const data = [
  { quarter: 1, earnings: 130 },
  { quarter: 2, earnings: 165 },
  { quarter: 3, earnings: 140 },
  { quarter: 4, earnings: 190 },
];

const Charts = () => {
  return (
    <div>
      Chart
      <VictoryChart>
        <VictoryBar data={data} x='quarter' y='earnings' />
      </VictoryChart>
    </div>
  );
};

export default Charts;
