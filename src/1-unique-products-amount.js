const stockProducts = require('./data.json');

const getUniqueProductsAmount = (stockProducts) => {
  // Desenvolva seu código dentro dessa função...
  let uniqueProducts = stockProducts.length;
  return uniqueProducts;
};

console.log(getUniqueProductsAmount(stockProducts));

module.exports = { getUniqueProductsAmount };
