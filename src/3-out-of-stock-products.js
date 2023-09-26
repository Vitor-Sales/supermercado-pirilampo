const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  // Criar array vazio para receber produtos sem estoque
  const produtosSemEstoque = [];
  // Vou passar por todos produtos dentro do array
  for (let index = 0; index < stockProducts.length; index += 1) {
    // Vou criar uma condicional para checar se está com o estoque zerado. Se estiver vai entrar no array ProdutosSemEstoque
    if (stockProducts[index].quantityInStock === 0) {
      produtosSemEstoque.push(stockProducts[index].productName);
    }
  }
  return produtosSemEstoque;
};
console.log(getOutOfStockProducts());
module.exports = { getOutOfStockProducts };
