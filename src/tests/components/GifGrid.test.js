import React from 'react';
import { shallow } from 'enzyme';
import { GiftGrid } from '../../components/GiftGrid';
import { useFetchGifts } from '../../hooks/useFetchGifts';
jest.mock('../../hooks/useFetchGifts');

describe('Test in Grid Component', () => {
  const category = 'Naruto';

  test('should render component correctly', () => {
    useFetchGifts.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GiftGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render the component with the data', () => {
    const gifts = [
      {
        id: 1,
        title: 'Some title',
        url: 'https://localhost.com/images',
      },
      {
        id: 2,
        title: 'title 2',
        url: 'https://localhost.com/titles',
      },
    ];

    useFetchGifts.mockReturnValue({
      data: gifts,
      loading: false,
    });

    const wrapper = shallow(<GiftGrid category={category} />);

    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifts.length);
  });
});
