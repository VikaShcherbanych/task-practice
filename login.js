const checkLogin = (mail, password) => {
    if(mail && password) {
      return true;
    } 
    return false;
  } 

const login = (req, fn) => {
	// req.body
// body  = {mail, password}
if(!req || !req.body){
    throw new Error('Please, enter email or password')
}

const {mail, password} = req.body;

	return fn(mail, password);
}

module.exports = {login, checkLogin};