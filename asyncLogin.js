const checkLogin = (mail, password) => {
  if (mail && password) {
    return true;
  }
  return false;
};

const showError = (err) => {
  console.log("Sorry, you have an ", err);
};

const login = (req, checkLogin, showError) => {
  try {
    const { mail, password } = req.body;

    return checkLogin(mail, password);
  } catch (e) {
    showError(e);
  }
};

module.exports = { login, showError, checkLogin };
