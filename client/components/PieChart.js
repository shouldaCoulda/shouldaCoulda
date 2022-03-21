import React from 'react';
import { VictoryPie } from 'victory';

const data = [
  { x: 1, y: 130, label: 'Netflix' },
  { x: 2, y: 165, label: 'Hulu' },
  { x: 3, y: 140, label: 'Spotify' },
  { x: 4, y: 190, label: 'Youtube TV' },
];

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
                      return style.fill === '#c43a31' ? null : (
                        <div>{data[0]}</div>
                      );
                    },
                  },
                  {
                    target: 'labels',
                    mutation: ({ text }) => {
                      return text === 'clicked' ? null : { text: `${data}` };
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
