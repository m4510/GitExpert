import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Testing GifGridItem', () => {
  const title = 'Some Title';
  const url = 'http://localhost/some.png';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should render component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
