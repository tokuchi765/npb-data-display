import React from 'react';
import Analysis from '../containers/Analysis';
import Image from '../components/Image';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Analysis test', () => {
  test('eist Image', () => {
    const wrapper = shallow(<Analysis />); // shallowWrapper取得

    expect(wrapper.find(Image).length).toBe(2);
  });
});
