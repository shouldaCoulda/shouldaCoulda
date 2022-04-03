import React from 'react';
import styles from './ScatterChart.module.css';
//domainValue is the name of each type
//this control color legend we see on the page to the right.
const ColorLegend = ({
  colorScale,
  tickSpacing = 20,
  tickSize = 10,
  tickTextOffset = 15,
  onHover,
}) => {
  return colorScale.domain().map((domainValue, i) => {
    return (
      <g
        className={styles.tick}
        onMouseEnter={() => {
          onHover(domainValue);
        }}
        onMouseOut={() => {
          onHover(null);
        }}
        key={i}
        transform={`translate(0,${i * tickSpacing})`}
      >
        <circle fill={colorScale(domainValue)} r={tickSize} />
        <text x={tickTextOffset} dy='.32em'>
          {domainValue}
        </text>
      </g>
    );
  });
};

export default ColorLegend;
