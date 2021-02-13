import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test GifExpertApp', () => {
  test('should render the component correctly', () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render categories correctly ', () => {
    const categories = ['Goku', 'Naruto'];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GiftGrid').length).toBe(categories.length);
  });
});
