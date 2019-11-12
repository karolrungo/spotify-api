console.log('JESTEM MOCKIEM');

const getUserInfoMock = jest.fn();

const mock = jest.fn().mockImplementation(() => ({
  getUserInfo: getUserInfoMock,
}));

export default mock;
