import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />)
});

it('contains a div with App class', () => {
  const app = shallow(<App />)
  expect(app.find('.App')).toBeTruthy()
})

it('renders BrowserRouter with Switch', () => {
  const app = shallow(<App />)
  console.log(app.debug())
  expect(app.find('BrowserRouter').length).toEqual(1)
  expect(app.find('BrowserRouter').length).toEqual(1)
})
