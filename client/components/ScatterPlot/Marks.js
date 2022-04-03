import React from 'react';

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
      className='mark'
      cx={String(xScale(xValue(d)))}
      cy={String(yScale(yValue(d)))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
