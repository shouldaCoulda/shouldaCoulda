import React from 'react';
import styles from './ScatterChart.module.css';

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius,
}) =>
  data.map((d, i) => (
    <circle
      key={i}
      className={styles.marks}
      cx={String(xScale(xValue(d)))}
      cy={String(yScale(yValue(d)))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
