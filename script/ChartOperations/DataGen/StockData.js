export function getBtcData(total, months, btcData) {
  //start with an empty array that will be return and used to display the lines
  const data = [];

  let prevtotal;

  //we set up a loop to execute once for each month
  for (let i = 0; i < months; i++) {
    //this gets the rate of change for the compound function
    // const rateOfChange = Math.random() / 10 + 1;
    let rateOfChange = 1;
    if (btcData && btcData.length > months) {
      rateOfChange = getROC(i, btcData, months);
    }

    if (i === 0) {
      data[i] = { x: i, y: 0 };
    } else if (i === 1) {
      prevtotal = 0;
      data[i] = { x: i, y: compound(prevtotal, rateOfChange, total) };
      prevtotal = compound(prevtotal, rateOfChange, total);
    } else {
      data[i] = { x: i, y: compound(prevtotal, rateOfChange, total) };
      prevtotal = compound(prevtotal, rateOfChange, total);
    }
  }
  return data;
}
export function getEthData(total, months, ethData) {
  //start with an empty array that will be return and used to display the lines
  const data = [];

  let prevtotal;

  //we set up a loop to execute once for each month
  for (let i = 0; i < months; i++) {
    //this gets the rate of change for the compound function
    // const rateOfChange = Math.random() / 10 + 1;
    let rateOfChange = 1;
    if (ethData && ethData.length > months) {
      rateOfChange = getROC(i, ethData, months);
    }

    if (i === 0) {
      data[i] = { x: i, y: 0 };
    } else if (i === 1) {
      prevtotal = 0;
      data[i] = { x: i, y: compound(prevtotal, rateOfChange, total) };
      prevtotal = compound(prevtotal, rateOfChange, total);
    } else {
      data[i] = { x: i, y: compound(prevtotal, rateOfChange, total) };
      prevtotal = compound(prevtotal, rateOfChange, total);
    }
  }
  return data;
}

export function compound(prev, rate, total) {
  let newTotal = prev * rate;
  newTotal += Number(total);
  return newTotal;
}

function getROC(i, data, months) {
  if (i < months) {
    const rate = Number(data[months - i - 1].price / data[months - i].price);
    return rate;
  }
  return 1;
}
