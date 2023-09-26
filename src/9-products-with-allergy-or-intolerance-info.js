const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  // variaveis: array
  const allergicPointedOut = [];
  let allergicContent = 'Pode conter:';
  // Laço de repetição procurando propriedade de alergia ou intolerancia
  for (let index = 0; index < stockProducts.length; index += 1) {
    allergicPointedOut.push({
      description: stockProducts[index].description,
      formattedPrice: `R$ ${stockProducts[index].price}`,
    })
    // transformando em array as chaves de cada objeto para procurar pela allegyOrIntolerance
    let objectKeysArray = Object.keys(stockProducts[index]);
    // Laço de repetição para checar se existe allergyOrIntolerance
    for (let indexKey = 0; indexKey < objectKeysArray.length; indexKey += 1) {
      if (objectKeysArray[indexKey] === 'allergyOrIntolerance') {
        for (let indexAllergy = 0; indexAllergy < stockProducts[index].allergyOrIntolerance.length; indexAllergy += 1) {
           allergicContent += ` ${stockProducts[index].allergyOrIntolerance[indexAllergy]}`;
        }
        allergicPointedOut[index].allergyOrIntoleranceMessage = allergicContent;
        allergicContent = 'Pode conter:';
      }
    }
  }
  return allergicPointedOut;
};

console.log(getProductsWithAllergyOrIntoleranceInfo());

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
