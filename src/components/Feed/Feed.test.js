import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import Feed from './Feed';
import { UpdateBadge } from './ui'

let initialProps = {
  url: 'any string',
  limit: 0,
  interval: 0
}

describe('Feed', () => {
  const shallowWrapper = shallow(<Feed {...initialProps} />);

  it('renders title', () => {
    expect(shallowWrapper.find('h1').html()).toContain('Feed');
  });

  it('UpdateBadge format', () => {
    expect(moment(shallowWrapper.find(UpdateBadge).text(), 'h:mm:ss a')).toBeTruthy();
  })

  it('getData called corretly', () => {
    let lastUpdate = shallowWrapper.find(UpdateBadge).text()
    shallowWrapper.update()
    expect(shallowWrapper.find(UpdateBadge).text).not.toEqual(lastUpdate)
  })
});
