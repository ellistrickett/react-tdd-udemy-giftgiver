import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('initializes the `stat` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
})