const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...
  // Criar um array para receber os nomes dos produtos
  // Entrar no array pelo indice e na propriedade do objeto
  const nomeProdutos = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    nomeProdutos.push(stockProducts[index].productName);
  }
  return nomeProdutos;
};

console.log(getUniqueProductsName());

module.exports = { getUniqueProductsName };
