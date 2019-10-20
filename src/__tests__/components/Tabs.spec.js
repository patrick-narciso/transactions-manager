/* eslint-disable no-unused-vars */
import * as REACT from 'react';
import { shallow } from 'enzyme';
import { Tabs } from 'components/Uikit';

const state = {
  transactions: [],
  balance: 0,
};

jest.mock('react-redux', () => ({
  useSelector: jest.fn(state => state),
}));

const React = REACT.default;
React.useState = jest.fn();

const props = {
  tab1Title: 'tab1title',
  tab2Title: 'tab2title',
  tab1Content: 'tab1content',
  tab2Content: 'tab2content',
};

describe('[Component] Tabs', () => {
  it('should render Tabs component with props correctly', () => {
    const wrapper = shallow(<Tabs {...props} />);
    const tab1Title = wrapper.find('#tab1Title');
    const tab2Title = wrapper.find('#tab2Title');
    expect(tab1Title.text()).toBe(props.tab1Title);
    expect(tab2Title.text()).toBe(props.tab2Title);
  });
});
