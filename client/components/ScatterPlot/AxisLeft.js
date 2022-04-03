export const AxisLeft = ({ yScale, innerWidth }) =>
  yScale.ticks().map((tickValue) => (
    <g className='tick'>
      <line x2={innerWidth} />
      <text
        key={tickValue}
        style={{ textAnchor: 'end' }}
        x={-3}
        dy='.32em'
        y={yScale(tickValue)}
      >
        {tickValue}
      </text>
    </g>
  ));
