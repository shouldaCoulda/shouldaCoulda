//remember to put data,xscale,yscale as props in Marks component in return render on BarChart component if usings and import to BarChart component

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
