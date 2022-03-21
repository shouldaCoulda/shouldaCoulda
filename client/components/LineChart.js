import React from 'react';
import {
  VictoryLine,
  VictoryAxis,
  VictoryScatter,
  VictoryGroup,
  VictoryChart,
  VictoryTheme,
} from 'victory';

const data = [
  { x: 'Jan', y: 30 },
  { x: 'Feb', y: 32 },
  { x: 'Mar', y: 65 },
  { x: 'Apr', y: 38 },
  { x: 'May', y: 50 },
  { x: 'Jun', y: 47 },
  { x: 'Jul', y: 38 },
  { x: 'Aug', y: 48 },
  { x: 'Sep', y: 80 },
  { x: 'Oct', y: 73 },
  { x: 'Nov', y: 76 },
  { x: 'Dec', y: 100 },
];

const LineChart = () => {
  return (
    <div>
      Line Chart
      <VictoryChart>
        <VictoryLine
          data={data}
          style={{
            data: { stroke: 'blue' },
            parent: { border: '1px solid #ccc' },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default LineChart;
