import React from 'react';
import { VictoryPie } from 'victory';

const data = [
  { x: 1, y: 130, label: 'Netflix' },
  { x: 2, y: 165, label: 'Hulu' },
  { x: 3, y: 140, label: 'Spotify' },
  { x: 4, y: 190, label: 'Youtube TV' },
];
console.log(data[1]);

const PieChart = () => {
  return (
    <div>
      Hello
      <VictoryPie
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: 'data',
                    mutation: ({ style }) => {
                      return style.fill === 'red'
                        ? null
                        : { style: { fill: 'red' } };
                    },
                  },
                ];
              },
            },
          },
        ]}
        data={data}
        // colorScale={['red', 'green', '#1DB954', 'cyan']}
      />
    </div>
  );
};

export default PieChart;
