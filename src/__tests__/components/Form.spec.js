/* eslint-disable no-unused-vars */
import * as REACT from 'react';
import { shallow } from 'enzyme';
import { Form } from 'components/Uikit';

const state = {
  transactions: [],
  balance: 0,
};

jest.mock('react-redux', () => ({
  useSelector: jest.fn(state => state),
  useDispatch: jest.fn(() => {}),
}));

const React = REACT.default;
React.useState = jest.fn();
const setIsFormValid = jest.fn();
const setInputs = jest.fn();
React.useState.mockReturnValue([false, setInputs]).mockReturnValue([false, setIsFormValid]);

describe('[Component] Form', () => {
  it('button should render disabled when form is not valid', () => {
    const wrapper = shallow(<Form />);
    const button = wrapper.find('button').props();
    expect(button.disabled).toBe(true);
  });

  it('input description should render correctly', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.exists('#description')).toBe(true);
  });

  it('input value should render correctly', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.exists('#value')).toBe(true);
  });

  it('input credit should render correctly', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.exists('#credit')).toBe(true);
  });

  it('input debit should render correctly', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.exists('#debit')).toBe(true);
  });
});
