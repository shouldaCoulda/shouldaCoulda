const alpha = require("alphavantage")({ key: "X9KUGYDCLGIU4V80" });

export function testAlpha() {
  alpha.forex.rate("btc", "usd").then((data) => {});
}
export async function testMonthly() {
  await alpha.crypto.monthly("btc", "usd").then((data) => {
    console.log(data);

    return data;
  });
}
// module.exports = testAlpha;
