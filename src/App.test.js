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

  it('renders navigation', () => {
    expect(app.find('Navigation')).toHaveLength(1);
  });

  it('renders routing components', () => {
    expect(app.find(Switch)).toHaveLength(1);
    expect(app.find(Route)).toHaveLength(2);
    expect(app.find(PrivateRoute)).toHaveLength(2);
  });
});

describe('when rendering default path, <App />', () => {
  const authContext = {
    isAuthenticated: jest.fn(),
  };
  let app = null;

  beforeEach(() => {
    app = (
      <AuthContext.Provider value={authContext}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  });

  it('renders Home component when user is logged in', () => {
    authContext.isAuthenticated.mockReturnValue(true);
    const wrapper = mount(app);

    expect(wrapper.find('Home').length).toEqual(1);
  });

  it('renders Login component when user is not logged in', () => {
    authContext.isAuthenticated.mockReturnValue(false);
    const wrapper = mount(app);

    expect(wrapper.find('Login').length).toEqual(1);
  });
});
