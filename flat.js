const array = [1, 2, [1, [[[34], 33], 2, 15], [[18]]]];
const array2 = [0, 1, 2, [[[3, 4]]]];
const a = [1, 4, [5, 7], 9]

const flat = (arr) => {
    const flattenArray = []
    for (let i=0; i<arr.length; i++) {
        Array.isArray(arr[i]) 
        ? 
        flattenArray.push(...flat(arr[i])) 
        : 
        flattenArray.push(arr[i])
        }
    return flattenArray;
}

console.log(flat(array))

// second

const flat2 = (arr, deep) => {
    const flattenArray = []
    arr.forEach(element => {
        Array.isArray(element) 
        ? 
        flattenArray.push(...flat(element)) 
        : 
        flattenArray.push(element)
    })
    return flattenArray;
};

console.log(flat2(array))

//third

function flat3(arr) {
    return arr.reduce((acc, el) => Array.isArray(el) ? acc.concat(flat3(el)) : acc.concat(el), []);
}

console.log(flat3(array));

//fourth

const flat4 = (array, depth=1) => {
    const flattend = [];
    (function flattener(list, dep) {
        for (const el of list) {
            if (Array.isArray(el) && dep) {
                flattener(el, dep-1)
            } else {
                flattend.push(el)
            }
        }
    })(array, depth);
    return flattend;
};

console.log(flat4(array, 2))