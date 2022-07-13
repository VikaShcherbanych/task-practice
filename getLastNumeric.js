const getLastNumeric = (str1, str2) => {
return +!+str2 || Math.pow(str1.slice(-1), str2.slice(-2) % 4 || 4) % 10;
};

console.log(getLastNumeric('12123242343527', '132435345462'));