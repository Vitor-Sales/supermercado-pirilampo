const stockProducts = require('./data.json');

const vitaminsArray = (keys, values) => {
  let kindOfVitamins = [];
  for (let indexVitamin = 0; indexVitamin < keys.length; indexVitamin += 1) {
    kindOfVitamins.push(`${keys[indexVitamin]} - ${values[indexVitamin]}`);
  };
  return kindOfVitamins;
};

const getProductsRichInVitamin = () => {
  // Desenvolva seu código dentro dessa função...
  // Variaveis: arrays
  const productsVitamins = [];
  let kindOfVitamins = [];
  let count = 0;
  // Laço de repetição para achar esses produtos
  for (let index = 0; index < stockProducts.length; index += 1) {
    let objectKeys = Object.keys(stockProducts[index].nutritionalInfo);
    

    if (objectKeys[objectKeys.length - 1] === 'vitamins') {
      let vitaminKeys = Object.keys(stockProducts[index].nutritionalInfo.vitamins);
      let vitaminValues = Object.values(stockProducts[index].nutritionalInfo.vitamins);
      for (let indexVitamin = 0; indexVitamin < vitaminKeys.length; indexVitamin += 1) {
        kindOfVitamins.push(`${vitaminKeys[indexVitamin]} - ${vitaminValues[indexVitamin]}`);
      }
      productsVitamins.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        vitaminsInformation: kindOfVitamins
      });
      kindOfVitamins = [];
      

      };
    ;
  };
  // Condicional para adicionar produtos no array
  // Usar construtor em uma nova variavel para dar uma array das vitaminas
  // Laço de repetição para incluir as vitaminas
  // console.log(kindOfVitamins);
  // Retorno?
  return productsVitamins;
};



// const ArrayOfVitamins = () => {
//   const arrayOfArrays = [];
//   const loopArray = [];
//   for (let index = 0; index < stockProducts.length; index += 1) {
//     let vitaminKeys = Object.keys(stockProducts[index].nutritionalInfo.vitamins);
//     console.log(vitaminKeys);
//   }

// }
// console.log(ArrayOfVitamins());
console.log(getProductsRichInVitamin());

module.exports = { getProductsRichInVitamin };
