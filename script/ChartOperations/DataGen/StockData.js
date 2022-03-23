export function getStockData(total, months) {
  const data = [];

  let prevtotal;
  for (let i = 0; i < months; i++) {
    const selection = Math.random() / 10 + 1;
    if (i === 0) {
      data[i] = { x: i, y: 0 };
    } else if (i === 1) {
      prevtotal = 0;
      data[i] = { x: i, y: compound(prevtotal, selection, total) };
      prevtotal = compound(prevtotal, 1.007, total);
    } else {
      data[i] = { x: i, y: compound(prevtotal, selection, total) };
      prevtotal = compound(prevtotal, selection, total);
    }
  }
  return data;
}

export function compound(prev, rate, total) {
  let newTotal = prev * rate;
  newTotal += Number(total);
  return newTotal;
}
