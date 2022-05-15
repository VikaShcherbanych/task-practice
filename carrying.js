function curry(f) { // curry(f) выполняет каррирование
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // использование
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  console.log( curriedSum(1)(2) ); // 3

  //===============================

  function sum(n,m,o,p){ // uncurried standard function
    return n + m + o + p;
  }
   
  function curry(fn){ // takes an uncurried function and returns a curried function
    return function(...a){
             return a.length >= fn.length ? fn(...a)
                                          : curry(fn.bind(fn,...a));
           };
  }

  var csum = curry(sum); // now csum is the curried version of sum
console.log(csum(1,2,3,6));

//==================================

