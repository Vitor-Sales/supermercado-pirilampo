const stockProducts = require('./data.json');

const searchProductByName = (produto) => {
  // Desenvolva seu código dentro dessa função...
  // Declarar objeto
  const objetoProduto = {};
  let found = false;
  // Laço de repetição para procurar todos os produtos
  for (let index = 0; index < stockProducts.length; index += 1) {
     // Condicional comparando parametro com nome Produto. Se for igual retorna objeto com descrição e preço.
     if (produto === stockProducts[index].productName) {
      objetoProduto.description = stockProducts[index].description;
      objetoProduto.formattedPrice = `R$ ${stockProducts[index].price}`;
      found = true;
     };
  };
   // Outra condicional: se objeto continuar vazio, retorna null. Se for diferente de vazio retorna o objeto
   if (found === false) {
    return null;
   } else {
    return objetoProduto;
   };
};

console.log(searchProductByName('Nutella'));
console.log(searchProductByName('Nutla'));
console.log(searchProductByName());

module.exports = { searchProductByName };
