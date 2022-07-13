const randomTree = {
    'one': 'one',
    'two': new Date(),
    'three': {
        'four': 'object',
        'five': {
            'six': 6,
            'seven': [7, 'string', null]
        }
    },
    'eight': {
        'null': null,
        'array': [
            [0, 1], ['stringArr1', 'stringArr2', {'objArr': {}}]
        ]
    }
}

const printObject = (obj) => {
    if (typeof obj !== 'object') {
        return 'Enter the object to print';
    }
    for (let key in obj) {
        if (obj[key] === null) {
            console.log('null');
        } else if (obj[key] instanceof Date) {
            console.log(obj[key]);
        } else if (obj[key] === 'object') {
            console.log('object');
        } else if (typeof obj[key] === 'object') {
            printObject(obj[key]);
        } else {
            console.log(key, obj[key]);
        }
    }
}

console.log(printObject(randomTree));