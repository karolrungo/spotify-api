import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';

import { AuthContextProvider } from './context/AuthContext'

import {MemoryRouter} from 'react-router-dom';

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains a div with App class', () => {
  const app = shallow(<App />);
  expect(app.find('.App')).toBeTruthy();
});

describe('When user is logged in <App />', () => {
  it('when user is logged in renders Home component by default', () => {
    const context = {
      token: 'AUTHORIZATION TOKEN',
    };

    const app = (
      <AuthContextProvider>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </AuthContextProvider>
    );

    const wrapper = mount(app);
    wrapper.setState(context)
    console.log(wrapper.debug())
    expect(wrapper.find('Home').length).toEqual(1);
  });
});
