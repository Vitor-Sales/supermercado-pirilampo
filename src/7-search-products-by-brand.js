const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  // Desenvolva seu código dentro dessa função...
  // Variaveis: array
  const produtosMarca = [];
  // Laço de repetição para checar marca de cada produto
  for (let index = 0; index < stockProducts.length; index += 1) {
    // Condicional: se marca for a procurada adiciona ao array
    if (brand === stockProducts[index].brand) {
      produtosMarca.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`
      })
    }
  }
  // O que retorna
  return produtosMarca;
};

console.log(searchProductsByBrand('Andorinha'));
console.log(searchProductsByBrand('Hortifruti'));


module.exports = { searchProductsByBrand };
