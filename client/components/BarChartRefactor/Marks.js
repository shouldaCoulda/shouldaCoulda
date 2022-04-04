//remember to put data,xscale,yscale as props in Marks component in return render on BarChart component if usings and import to BarChart component

const Marks = ({ data, xScale, yScale, xValue, yValue }) => {
  return data.map((d) => (
    <rect
      key={yValue(d)}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    />
  ));
};

export default Marks;
