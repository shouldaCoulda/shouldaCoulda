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
