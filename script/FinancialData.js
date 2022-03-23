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
      prevtotal = total;
    } else if (i === 1) {
      prevtotal = total;
      data[i] = { x: i, y: compound(prevtotal, 1.08) };
    } else {
      data[i] = { x: i, y: compound(prevtotal, 1.08) };
      prevtotal = compound(prevtotal, 1.08);
    }
    console.log(prevtotal);
  }
  return data;
}

export function compound(prev, rate) {
  console.log("prec", prev);
  let newTotal = prev * rate;
  console.log("in compound", newTotal);
  return newTotal;
}
