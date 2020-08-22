import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Analysis from '../containers/Analysis';
import Header from '../containers/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('App test', () => {
  test('eist Header', () => {
    const wrapper = shallow(<App />); // shallowWrapper取得

    expect(wrapper.find(Header).length).toBe(1);
  });

  test('eist Analysis', () => {
    const wrapper = shallow(<App />); // shallowWrapper取得

    expect(wrapper.find(Analysis).length).toBe(1);
  });
});
