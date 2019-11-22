import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';
import AuthContext from './context/AuthContext';

import {MemoryRouter, Switch, Route} from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute';

describe('<App />', () => {
  let app = null;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('contains a div with App class', () => {
    expect(app.find('.App')).toHaveLength(1);
  });

  it('renders routing components', () => {
    expect(app.find(Switch)).toHaveLength(1);
    expect(app.find(Route)).toHaveLength(2);
    expect(app.find(PrivateRoute)).toHaveLength(3);
  });
});

describe('when not logged in <App />', () => {
  const authContext = {
    isAuthenticated: jest.fn(),
  };
  let wrapper = null;

  beforeEach(() => {
    authContext.isAuthenticated.mockReturnValue(false);
    const app = (
      <AuthContext.Provider value={authContext}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    wrapper = mount(app)
  });

  it('renders Login component', () => {
    expect(wrapper.find('Login').length).toEqual(1);
  });

  it('does not render Navigation component', () => {
    expect(wrapper.find('Navigation').length).toEqual(0);
  });
});

describe('when logged in <App />', () => {
  const authContext = {
    isAuthenticated: jest.fn(),
  };
  let wrapper = null;

  beforeEach(() => {
    authContext.isAuthenticated.mockReturnValue(true);
    const app = (
      <AuthContext.Provider value={authContext}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    wrapper = mount(app)
  });

  it('renders Home component by default', () => {
    expect(wrapper.find('Home').length).toEqual(1);
  });

  it('renders Navigation component', () => {
    expect(wrapper.find('Navigation').length).toEqual(1);
  });
});

