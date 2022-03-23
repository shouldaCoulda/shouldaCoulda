export function getFinData(total, months, selection) {
  const data = [];
  // for (let i = 0; i < months; i++) {
  //   let random = Math.random();
  //   data[i] = { x: i, y: total * i * random };
  // }
  let prevtotal;
  for (let i = 0; i < months; i++) {
    if (i === 0) {
      data[i] = { x: i, y: 0 };
    } else if (i === 1) {
      prevtotal = 0;
      data[i] = { x: i, y: compound(prevtotal, 1.007, total) };
      prevtotal = compound(prevtotal, 1.007, total);
    } else {
      data[i] = { x: i, y: compound(prevtotal, 1.007, total) };
      prevtotal = compound(prevtotal, 1.007, total);
    }
    console.log(prevtotal);
  }
  return data;
}

export function compound(prev, rate, total) {
  let newTotal = prev * rate;
  newTotal += Number(total);
  return newTotal;
}
