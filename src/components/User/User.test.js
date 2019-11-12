import React from 'react';
import {act} from 'react-dom/test-utils';
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

  it('calls spotify api on click', () => {
    wrapper = mount(<User />);
    expect(spotifyMock.getUserInfo).not.toHaveBeenCalled();
    wrapper
      .find('button')
      .last()
      .simulate('click');
    expect(spotifyMock.getUserInfo).toHaveBeenCalledTimes(1);
  });

  it('updates display info with data from api', async () => {
    const userInfo = {
      display_name: 'Bob',
      email: 'bob@bob.bob',
    };
    spotifyMock.getUserInfo.mockImplementation(() => Promise.resolve(userInfo));

    wrapper = mount(<User />);
    expect(wrapper.find('p')).toHaveLength(1)
    await wrapper
      .find('button')
      .last()
      .simulate('click');

    wrapper.update()
    expect(wrapper.find('p')).toHaveLength(3)
  })
});
