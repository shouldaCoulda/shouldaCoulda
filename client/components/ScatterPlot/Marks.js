import React from 'react';
import styles from './ScatterChart.module.css';

//these are our dots on the scatter plot
export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  colorScale,
  colorValue,
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
      //we are setting the color of the circles here with fill
      fill={colorScale(colorValue(d))}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
