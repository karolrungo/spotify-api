import React from 'react';
import {mount} from 'enzyme';
import User from './User';
import Spotify from './../../api/spotify';
jest.mock('./../../api/spotify');

describe('<User />', () => {
  let wrapper;
  beforeEach(() => {
  });

  it('renders a paragraph', () => {

    const spotifyMock = new Spotify()
    spotifyMock.getUserInfo = jest.fn().mockImplementation(() => { 
    console.log("JESTEM MOCKIEm!")
    return {
      name: "Bob"
    } })


    wrapper = mount(<User />);
    expect(spotifyMock.getUserInfo).toHaveBeenCalledTimes(1);
    expect(wrapper.find('p')).toHaveLength(1);
  });
});
