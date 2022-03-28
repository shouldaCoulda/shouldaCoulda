const uid = require("uid");
const { database } = require("../../client/firebase");
const {
  getDatabase,
  ref,
  onValue,
  get,
  child,
  set,
  remove,
} = require("firebase/database");

const alpha = require("alphavantage")({ key: "X9KUGYDCLGIU4V80" });

export function testAlpha() {
  alpha.forex.rate("btc", "usd").then((data) => {});
}
export async function testMonthly() {
  await alpha.crypto.monthly("btc", "usd").then((data) => {
    console.log(data);
    fillData(data);
    return data;
  });
}

async function fillData(data) {
  let dates = Object.keys(data["Time Series (Digital Currency Monthly)"]);
  console.log(dates);
  let monthlyPriceData = [];
  for (let i = 0; i < dates.length; i++) {
    monthlyPriceData.push({
      price:
        data["Time Series (Digital Currency Monthly)"][dates[i]][
          "1a. open (USD)"
        ],
      month: dates[i],
    });
  }
  // seed(monthlyPriceData);
  console.log("filled arry", monthlyPriceData);
}

function seed(priceData) {
  remove(ref(database, `/financialData`));
  for (let i = 0; i < priceData.length; i++) {
    set(ref(database, `financialData/` + "bitcoin/" + i), {
      month: priceData[i].month,
      price: priceData[i].price,
    });
  }
}
