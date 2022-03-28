const { database } = require("../../client/firebase");
const { ref, set, remove } = require("firebase/database");

const alpha = require("alphavantage")({ key: "X9KUGYDCLGIU4V80" });

export async function getBtcMonthly() {
  await alpha.crypto.monthly("btc", "usd").then((data) => {
    fillData(data);
    return data;
  });
}

export async function getEthMonthly() {
  await alpha.crypto.monthly("eth", "usd").then((data) => {
    console.log(data);
    fillData(data);
    return data;
  });
}

async function fillData(data) {
  let dates = Object.keys(data["Time Series (Digital Currency Monthly)"]);
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
  seed(monthlyPriceData);
}

function seed(priceData) {
  // remove(ref(database, `/financialData`));
  for (let i = 0; i < priceData.length; i++) {
    set(ref(database, `financialData/` + "bitcoin/" + i), {
      month: priceData[i].month,
      price: priceData[i].price,
    });
  }
}
