// req : dont use regex
function findFirstStringInBracket(str) {
  if (str.length > 0) {
    let indexFirstBracketFound = str.indexOf('(')
    if (indexFirstBracketFound >= 0) {
      let wordsAfterFirstBracket = str.substr(indexFirstBracketFound)
      if (wordsAfterFirstBracket) {
        wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1)
        let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(')')
        if (indexClosingBracketFound >= 0) {
          return wordsAfterFirstBracket.substring(0, indexClosingBracketFound)
        } else {
          return ''
        }
      } else {
        return ''
      }
    } else {
      return ''
    }
  } else {
    return ''
  }
}

/* 
answer number 3
 */
const simpleFindFirstStringInBracket = (str) => {
  // str.substring(1, 5)
  return str.substring(str.indexOf('(') + 1, str.indexOf(')'))
}

console.log(findFirstStringInBracket('(apel),(jeruk),(melon)'))
console.log(simpleFindFirstStringInBracket('(apel),(jeruk),(melon)'))
