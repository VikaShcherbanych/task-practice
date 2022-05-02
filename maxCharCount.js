const str = 'трансформація11';
const str1 = 'sdnf,sbfgdfsmhbgdfvbvhdsfv3435'

const maxCharCount = (word) => {
    const newWord = word.toLowerCase();
    const letterNumber = newWord.split('').reduce((acc, el) => {
        console.log(acc[el])
        acc[el] ? acc[el] = acc[el] +1 : acc[el] = 1
        console.log(acc)
        return acc
    }, {})
    
    return Object.entries(letterNumber).sort((a,b) => b[1] - a[1])[0]

}
console.log(maxCharCount(str1))