import React from 'react';

export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
  yScale.ticks().map((tickValue, i) => (
    <g key={i} className='tick' transform={`translate(0,${yScale(tickValue)})`}>
      <line x2={innerWidth} />
      <text
        key={tickValue}
        style={{ textAnchor: 'end' }}
        x={-tickOffset}
        dy='.32em'
      >
        {tickValue}
      </text>
    </g>
  ));
