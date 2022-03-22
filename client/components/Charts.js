import React from "react";

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

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
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Netflix", "Hulu", "Spotify", "YoutubeTV"]}
        />
        <VictoryAxis dependentAxis tickFormat={(y) => `$${y / 1}`} />
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
          // style={{ data: { fill: '#c43a31' } }}
        />
      </VictoryChart>
    </div>
  );
};

export default Charts;
