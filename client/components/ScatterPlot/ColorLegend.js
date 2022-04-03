import React from 'react';

//domainValue is the name of each type
//this control color legend we see on the page to the right.
const ColorLegend = ({ colorScale, tickSpacing = 20, tickSize = 10 }) => {
  return colorScale.domain().map((domainValue, i) => {
    return (
      <g key={i} transform={`translate(0,${i * tickSpacing})`}>
        <circle fill={colorScale(domainValue)} r={tickSize} />
        <text dy='.32em'>{domainValue}</text>
      </g>
    );
  });
};

export default ColorLegend;
