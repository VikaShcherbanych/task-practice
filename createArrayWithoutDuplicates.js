const createArrayWithoutDuplicates =(arr1, arr2) => {
   return  Array.isArray(arr1) && Array.isArray(arr2) 
    ?
    [... new Set(arr1.concat(arr2))]
    :
    new Error("The arguments of the function are incorrect"); 
}

const array1=[1, 2, 3, 3, 3, 34]
const array2=[1, 3, 5, 78]

console.log(createArrayWithoutDuplicates(array1, array2))

module.exports = createArrayWithoutDuplicates;