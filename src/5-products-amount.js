const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  // Criar variavel para receber a soma
  let totalStock = 0;
  // Criar laço de repetição para percorrer o estoque de cada produto e fazer a soma
  for (let index = 0; index < stockProducts.length; index += 1) {
    totalStock += stockProducts[index].quantityInStock;
  }
  // return soma de todos os produtos
  return totalStock;
};

getProductsAmount();

module.exports = { getProductsAmount };
