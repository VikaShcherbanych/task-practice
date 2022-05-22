const { login, showError, checkLogin } = require("../asyncLogin");

const res = { body: { mail: "fd@gmail.com", password: "1vj6kdfh7vdj" } };
const error = "TypeError: Cannot destructure property 'mail' of 'req.body' as it is undefined";
const checkLoginMock = jest.fn(checkLogin);
const showErrorMock = jest.fn(showError);

describe("Login function", () => {
  test("should checkLogin function will called 1 time", async () => {
    await login(res, checkLoginMock, showErrorMock);
    expect(checkLoginMock).toBeCalledTimes(1);
  });
  test("should showErrorMock function will called 1 time", async () => {
    await login({}, checkLoginMock, showErrorMock);
    expect(showErrorMock).toBeCalledTimes(1);
  });
  test("should get parametrs  mail and password and return true", () => {
    expect(login(res, checkLoginMock, showErrorMock)).toBe(true);
  });
  test("should get only one parametr and return false", () => {
    expect(login({body: { mail: "fd@gmail.com"}}, checkLoginMock, showErrorMock)).toBe(false);
  });
  afterAll(() => jest.clearAllMocks());
});
