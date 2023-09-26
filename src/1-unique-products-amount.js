const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let uniqueProducts = stockProducts.length;
  return uniqueProducts;
};

console.log(getUniqueProductsAmount());

module.exports = { getUniqueProductsAmount };
