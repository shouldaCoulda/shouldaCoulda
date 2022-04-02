const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

const useData = () => {
  const [data, setData] = useState([]);

  //use effect to retrieve the data
  useEffect(() => {
    //setting the row data to year 2020 and Population
    const row = (d) => {
      //+d is setting the data to a number for year 2020
      d.Population = +d['2020'];
      return d;
    };
    //slicing only the first 10 of the data from the list
    csv(csvUrl, row).then((data) => {
      //setting data to data array
      setData(data.slice(0, 10));
    });
  }, []);
  return data;
};
