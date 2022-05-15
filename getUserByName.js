const users = [{name: 'Alex'}, {name: 'Bob'}, {name: 'Pit'}];

const getUserByName = (arr, name) => {
    if(Array.isArray(arr) && name) {
        return arr.find(user => user.name === name);
    } else 
    if(!Array.isArray(arr)) {
        return new Error('Please enter an array of users')
    } else 
    if(!name) {
        return new Error('Please enter a name to search for')
    }
   
}

console.log(getUserByName(users, 'Bob'))

module.exports = getUserByName;