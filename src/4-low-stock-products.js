const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  // Criar novo array
  const estoqueBaixo = [];
  // Criar laço de repetição para checar todos os indices de stockProducts
  for (let index = 0; index < stockProducts.length; index += 1) {
    // Criar condicional para colocar no novo array produtos que estão com estoque baixo
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      estoqueBaixo.push(`${stockProducts[index].productName}: ${stockProducts[index].quantityInStock} unidades`)
    }
  }
  return estoqueBaixo;
};

console.log(getLowStockProducts());

module.exports = { getLowStockProducts };
