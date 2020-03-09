import React from 'react';
import {configure, shallow} from 'enzyme';
import App from './App'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const app = shallow(<App/>);

it('should renders app', () => {
    expect(app).toMatchSnapshot();
});

it('should initializes the state with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('should add a new gift to state when clicking the add first button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual([{id: 1}])
});
