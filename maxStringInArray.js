const maxStringInArray = (array) => {
    if(array === undefined) {
        throw new Error('This function called without argument')
    }
    if(!Array.isArray(array)) {
        throw new Error('Argument is not array')
    }
  let maxLength = 0;
  array.forEach((element) => {
      if(typeof element !== 'string') {
          throw new Error('Array element is not a type string')
      }
    if (element.length > maxLength) {
      maxLength = element.length;
    }
  });
  return array.length > 0 ? array.filter((el) => el.length === maxLength) : [];
};

const arrayWithString = ['hgfff', 'fhguj', 'ghjfv', 'rty', 'fg', 'bhhj'];

console.log(maxStringInArray(arrayWithString))

module.exports = maxStringInArray;
