const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  // Desenvolva seu código dentro dessa função...
  // Variaveis: array
  const productsOnSale = [];
  // Laço de repetição para checagem dos produtos em promoção
  for (let index = 0; index < stockProducts.length; index += 1) {
    // Condicional para se o produtor estiver em promoção seja adicionado ao novo array.
    if (stockProducts[index].onSale === true) {
      productsOnSale.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        onSale: stockProducts[index].onSale
      })
    }
  }
  // Retorno da array
  return productsOnSale;
};

console.log(getProductsOnSale());

module.exports = { getProductsOnSale };
