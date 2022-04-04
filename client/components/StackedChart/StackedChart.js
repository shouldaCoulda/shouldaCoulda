import React, { useState } from 'react';

import StackedBarChart from './StackedBarChart';
import styles from './StackedChart.module.css';

const data = [
  {
    year: 1980,
    subscription: 10,
    other: 20,
    expense: 30,
  },
  {
    year: 1990,
    subscription: 20,
    other: 40,
    expense: 60,
  },
  {
    year: 2000,
    subscription: 30,
    other: 45,
    expense: 80,
  },
  {
    year: 2010,
    subscription: 40,
    other: 60,
    expense: 100,
  },
  {
    year: 2020,
    subscription: 50,
    other: 80,
    expense: 120,
  },
];

const allKeys = ['subscription', 'other', 'expense'];

const colors = {
  subscription: 'green',
  other: 'orange',
  expense: 'purple',
};

function App() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <>
      <h2>Stacked Bar Chart with D3 </h2>
      <StackedBarChart data={data} keys={keys} colors={colors} />

      <div className={styles.field}>
        {allKeys.map((key) => (
          <div key={key} className={styles.field}>
            <input
              id={key}
              type='checkbox'
              checked={keys.includes(key)}
              onChange={(e) => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter((_key) => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
