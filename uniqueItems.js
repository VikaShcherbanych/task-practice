/* 5 - розв'язати алгоритмичну задачу кількома способами:
є масив, який має числа, які повторюються, 
наприклад [1, 2, 5, 1, 7, 3, 2, 9]. 
Треба написати функцію, яка повертає масив унікальних чисел: [1, 2, 5, 7, 3, 9].
Розібратись, як елементи масиву розташовані в пам'яті */

const numbers = [1, 2, 5, 1, 7, 3, 2, 9, 11, 2, 3, 3];

// ---------first-----------

const getUniqueItems = arr => [...new Set(arr)]
console.log(getUniqueItems(numbers))

//---------second-----------

const getUniqueItems2 = arr => {
    const uniq = [];
    for(let i=0; i<arr.length; i++){
        if(!uniq.includes(arr[i])){
            uniq.push(arr[i])   
        }
    }
    return uniq;
}
console.log(getUniqueItems2(numbers))

//---------third-----------

const getUniqueItems3 = arr => {
    const uniq = [];
    arr.forEach(element => {
        !uniq.includes(element) ? uniq.push(element) : uniq
    })
    return uniq;
}
console.log(getUniqueItems3(numbers))

//---------fourth-----------

const getUniqueItems4 = arr => {
    return arr.reduce((acc, element) => {
        if (!acc.includes(element)){
           acc.push(element);
        }
        return acc;
    }, [])
}
console.log(getUniqueItems4(numbers))