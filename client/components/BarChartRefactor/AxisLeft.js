//the Y Axis, if using be sure to put yScale as props in the AxisLeft component
//in render and import to BarChart

const AxisLeft = (yScale) => {
  yScale.domain().map((tickValue, i) => {
    return (
      <g
        key={i}
        transform={`translate(0,${yScale(tickValue) + yScale.bandwidth() / 2})`}
      >
        <text style={{ textAnchor: 'end' }} x={-4} dy='.32em'>
          {tickValue}
        </text>
      </g>
    );
  });
};

export default AxisLeft;
