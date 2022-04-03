import React from 'react';
import styles from './ScatterChart.module.css';

//this control the axis on the left the text and position
export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
  yScale.ticks().map((tickValue, i) => (
    <g
      key={i}
      className={styles.tick}
      transform={`translate(0,${yScale(tickValue)})`}
    >
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
