const subStringPolindrom = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
        if (str.substring(i, j + 1) === str.substring(i, j + 1).split("").reverse().join("")) {
            result.push(str.substring(i, j + 1));
        }
        }
    }
    return result[0];
}


console.log(subStringPolindrom('adggda'));
console.log(subStringPolindrom('tabble'));


