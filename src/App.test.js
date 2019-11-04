import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';
import AuthContext from './context/AuthContext'

import {MemoryRouter} from 'react-router-dom';

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains a div with App class', () => {
  const app = shallow(<App />);
  expect(app.find('.App')).toBeTruthy();
});

describe('When user is logged in <App />', () => {
  it('renders Home component by default', () => {
    const context = {
      isAuthenticated: () => true
    };

    const app = (
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const wrapper = mount(app);
    expect(wrapper.find('Home').length).toEqual(1);
  });

});

describe('When user is NOT logged in <App />', () => {
  it('renders Login component when trying to display default path', () => {
    const context = {
      isAuthenticated: () => false
    };

    const app = (
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const wrapper = mount(app);
    expect(wrapper.find('Login').length).toEqual(1);
  });
})
