import React from 'react';
import {act} from 'react-dom/test-utils';
import {mount} from 'enzyme';
import User from './User';
import {getUserInfoMock} from './../../api/spotify';
jest.mock('./../../api/spotify');

describe('<User />', () => {
  let wrapper = null;

  it('calls spotify api on click', async () => {
    const userInfo = {
      display_name: 'Bob',
      email: 'bob@bob.bob',
    };
    getUserInfoMock.mockImplementation(() => Promise.resolve(userInfo));

    wrapper = mount(<User />);
    await wrapper
      .find('button')
      .last()
      .simulate('click');
    expect(getUserInfoMock).toHaveBeenCalledTimes(1);

    wrapper.update()
    expect(wrapper.find('p')).toHaveLength(3)
  });
});
