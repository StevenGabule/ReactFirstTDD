import React from 'react';
import {configure, shallow} from 'enzyme';
import App from './App'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const wrapper = shallow(<App/>);

it('should renders app', () => {
    expect(wrapper).toMatchSnapshot();
});
// describe(<App/>, () => {
//
// });