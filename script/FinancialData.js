export function getFinData(total, months) {
  const data = [];
  for (let i = 0; i < months; i++) {
    let random = Math.random();
    data[i] = { x: i, y: total * i * random };
  }

  return data;
}
