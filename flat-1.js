const flat = (array) => {
    const flattenArr = [];
    for (let i=0; i<array.length; i++){
      if(Array.isArray(array[i])){
        flattenArr.push(...flat(array[i]))
      } else {
        flattenArr.push(array[i])
      }
    }
    return flattenArr;
}

const a = [1, [2, 10], [[[3, 4], 6]], 5]

console.log(flat(a))

console.log(...a)