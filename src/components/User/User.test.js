import React from 'react';
import {act} from 'react-dom/test-utils';
import {mount} from 'enzyme';
import User from './User';
import {getUserInfoMock} from './../../api/spotify';
jest.mock('./../../api/spotify');

describe('<User />', () => {
  let wrapper = null;

  it('calls spotify api on click', async () => {
    wrapper = mount(<User />);
    await wrapper
      .find('button')
      .last()
      .simulate('click');

    wrapper.update()
    console.log(wrapper.html());

    expect(getUserInfoMock).toHaveBeenCalledTimes(1);
    expect(wrapper.find('p')).toHaveLength(1);
  });
});
