// Create a resolved javascript Promise that will return 'Hello World!'.

function promiseHelloWorld() {
    return new Promise ((resolve) => {
      resolve('Hello World!')
    })
}

//Your challenge
//Write an async function which takes an apiUrl and jokeId which returns a promise.
//The data will need to be filtered to get the specified joke by id.
//When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.
//Handle error cases

//If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
//Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.

async function sayJoke(apiUrl, jokeId){
    const response = await fetch(apiUrl);
    const jsondata = await response.json();
    
    const joke = jsondata.jokes.find(function(joke) {
      return joke.id === jokeId
    })
    
    if (!joke) {
      throw new Error(`No jokes found id: ${jokeId}`)
    }
    
    return {
      saySetup: () => joke.setup,
      sayPunchLine: () => joke.punchLine,
    }
}

// CALLBACK HELL

// function submitOrder(user) {
//     var shoppingCart, zipCode, shippingRate, orderSuccessful;
    
//     // Get the current user's shopping cart
//     OrderAPI.getShoppingCartAsync(user)
//     .then(function(cart) {
//       shoppingCart = cart;
//       return CustomerAPI.getProfileAsync(user);
//     })
//     .then(function(profile) {
//     // Also look up the ZIP code from their profile
//       zipCode = profile.zipCode;
//     })
//     .then(function(x) {
//       // Calculate the shipping fees
//       shippingRate = calculateShipping(shoppingCart, zipCode);
//       return OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
//     })
//     .then(function(success) {
//       orderSuccessful = success;
// }); 

// Some notes:

// You can assume that the functions Bob is calling actually exist and take the given parameters in the given order.
// User "12345" is a valid user for testing
// Any provided function whose name ends in Async returns a Promise.
// Any provided function whose name does not end in Async is synchronous, i.e. calculateShipping().

async function submitOrder(user) {
    var shoppingCart, zipCode, shippingRate, orderSuccessful;
    
    // Get the current user's shopping cart
    shoppingCart = await OrderAPI.getShoppingCartAsync(user)
    
    // Also look up the ZIP code from their profile
    zipCode = (await CustomerAPI.getProfileAsync(user)).zipCode;
    
    // Calculate the shipping fees
    shippingRate = calculateShipping(shoppingCart, zipCode);
    
    // Submit the order
    orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate)
    
    console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
  }
