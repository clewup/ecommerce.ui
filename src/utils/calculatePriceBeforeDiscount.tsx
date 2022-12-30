export const calculatePriceBeforeDiscount = (
  price: number,
  discount: number
) => {
  const priceBeforeDiscount = (price / (100 - discount)) * 100;
  return bankersRound(priceBeforeDiscount);
};

function bankersRound(n: number, d = 2) {
  var x = n * Math.pow(10, d);
  var r = Math.round(x);
  var br = Math.abs(x) % 1 === 0.5 ? (r % 2 === 0 ? r : r - 1) : r;
  return br / Math.pow(10, d);
}
