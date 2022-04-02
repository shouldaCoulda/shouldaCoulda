const Marks = ({ data, xScale, yScale }) => {
  return data.map((d) => (
    <rect
      key={d.Country}
      y={yScale(d.Country)}
      width={xScale(d.Population)}
      height={yScale.bandwidth()}
    />
  ));
};

export default Marks;
