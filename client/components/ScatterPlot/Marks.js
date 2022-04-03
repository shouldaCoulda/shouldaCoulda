import React from 'react';

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
}) =>
  //cx and cy is center x  and center y position of the circle r= radius
  data.map((d, i) => (
    <circle
      className='mark'
      key={i}
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={10}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
