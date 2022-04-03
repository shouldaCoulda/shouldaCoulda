export const AxisLeft = ({ yScale }) =>
  yScale.domain().map((tickValue) => (
    <g className='tick'>
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
