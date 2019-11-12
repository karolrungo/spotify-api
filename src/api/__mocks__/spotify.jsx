console.log("JESTEM MOCKIEM")

const userInfo = {
  display_name: "Bob",
  email: "bob@bob.bob"
}

export const getUserInfoMock = jest.fn();

const mock = jest.fn().mockImplementation(() => ({
  getUserInfo: getUserInfoMock,
}));

export default mock;
