const { login, checkLogin } = require("../login");

const res = { body: { mail: "fd@gmail.com", password: "1vj6kdfh7vdj" } };
const checkLoginMock = jest.fn(checkLogin); 

describe("Login function", () => {
  test("should checkLogin function will called 1 times", () => {
    login(res, checkLoginMock) 
    expect(checkLoginMock).toBeCalledTimes(1)
  });
  test("should get parametrs  mail and password and return true", () => {
    expect(login(res, checkLoginMock)).toBe(true);
  });
  test("should not have  parametrs and return an error", () => {
    expect(() => login()).toThrowError(
      new Error("Please, enter email or password")
    );
  });
  test("should not have a body property in the parameters and return an error", () => {
    expect(() => login({}, checkLoginMock)).toThrowError(
      new Error("Please, enter email or password")
    );
  });
  afterAll(() => jest.clearAllMocks())
});
