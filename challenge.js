/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'  
*/

function alternateCase(str) {
  return str.split('').map((el,index) => {
      return  index % 2 == 0
        ? el.toUpperCase()
        : el.toLowerCase();
    });
  }
  
module.exports = alternateCase;
