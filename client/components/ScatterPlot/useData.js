import React, { useState, useEffect } from 'react';
import { csv } from 'd3';
import csvData from './csvData';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(csvData);
  }, []);

  return data;
};
