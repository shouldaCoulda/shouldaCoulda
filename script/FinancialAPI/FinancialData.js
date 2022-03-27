const alpha = require("alphavantage")({ key: "X9KUGYDCLGIU4V80" });

export function testAlpha() {
  alpha.forex.rate("btc", "usd").then((data) => {
    console.log(data);
  });
  console.log("hello from scripts");
}
export async function testMonthly() {
  await alpha.crypto.monthly("btc", "usd").then((data) => {
    console.log(data);
  });
  console.log("hello from testMonthly");
}
// module.exports = testAlpha;
