//Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.
//Every call is saved as an array of arguments.

function spy(func) {

    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
}

function sum(a, b) { return a + b}
wrapper = spy(sum)

function multiplication(a, b) { return a * b}
wrapper1 = spy(multiplication)

console.log(wrapper(1, 2)); // 3
console.log(wrapper(5, 7)); // 12
console.log(wrapper.calls); //[[1,2], [5, 7]]

console.log(wrapper1(1, 2)); // 2
console.log(wrapper1(5, 5)); // 25
console.log(wrapper.calls); //[[1,2], [5, 5]]
