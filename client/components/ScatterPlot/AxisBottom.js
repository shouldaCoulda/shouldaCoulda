import React from 'react';
import styles from './ScatterChart.module.css';

//controls the the value of the bottom axis
export const AxisBottom = ({
  xScale,
  innerHeight,
  tickFormat,
  tickOffset = 3,
}) =>
  xScale.ticks().map((tickValue) => (
    <g
      className={styles.tick}
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <line y2={innerHeight} />
      <text
        style={{ textAnchor: 'middle' }}
        dy='.71em'
        y={innerHeight + tickOffset}
      >
        {tickFormat(tickValue)}
      </text>
    </g>
  ));
