import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (data) => {
      //+data === Number(data)
      data.sepal_length = +data.sepal_length;
      data.sepal_width = +data.sepal_width;
      data.petal_length = +data.petal_length;
      data.petal_width = +data.petal_width;
      return data;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  return data;
};
