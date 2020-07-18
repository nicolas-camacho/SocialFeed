import React from 'react';
import { shallow } from 'enzyme';
import Feed from './Feed';

describe('Feed', () => {
  const app = shallow(<Feed />);

  it('renders title', () => {
    expect(app.find('h1').exists()).toBe(true);
  });
});
