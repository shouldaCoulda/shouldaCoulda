// Function for the Bottom Axis
//if we use refractor syntax make sure to pass xScale and innerHeight as props in the render BarChart Component when returning
const AxisBottom = (xScale, innerHeight) => {
  xScale.ticks().map((tickValue, i) => {
    return (
      <g key={i} transform={`translate(${xScale(tickValue)},0)`}>
        <line x1={0} y1={0} x2={0} y2={innerHeight} stroke='green' />
        <text y={innerHeight} style={{ textAnchor: 'middle' }} dy='1.1em'>
          {tickValue}
        </text>
      </g>
    );
  });
};

export default AxisBottom;
