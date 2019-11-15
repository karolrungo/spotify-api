import React from 'react';
import {mount} from 'enzyme';
import User from './User';
import Spotify from './../../api/spotify';
jest.mock('./../../api/spotify');

describe('<User />', () => {
  let wrapper = null;
  const spotifyMock = Spotify();

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('calls api when component is rendered', () => {
    expect(spotifyMock.getUserInfo).not.toHaveBeenCalled();
    wrapper = mount(<User />);
    expect(spotifyMock.getUserInfo).toHaveBeenCalledTimes(1);
  })

  it('renders data from api in paragraphs', () => {
    const userInfo = {
      display_name: 'Bob',
      email: 'bob@bob.bob',
    };
    spotifyMock.getUserInfo.mockResolvedValue(userInfo);
    wrapper = mount(<User />);
    expect(wrapper.find('p')).toHaveLength(1)

    setImmediate(() => {
      wrapper.update()
      expect(wrapper.find('p')).toHaveLength(3)
    })
  })
});
