import React from 'react';
import { shallow, mount } from 'enzyme';
import moment from 'moment';

import Post from './Post'
import { Card, HeaderCard, DateBadge } from './ui';

const postMock = {
  text: 'Text',
  user: {
    name: 'Name'
  },
  created_at: new Date().toString()
}

describe('Post', () => {

  let shallowWrapper = null

  beforeEach(() => {
    shallowWrapper = shallow(<Post post={postMock} />)
  });

  it('Renders once <Card /> component', () => {
    expect(shallowWrapper.find(Card)).toHaveLength(1);
  });


  it('Renders once <HeaderCard /> component', () => {
    expect(shallowWrapper.find(HeaderCard)).toHaveLength(1);
  });

  it('Renders <HeaderCard /> component inside <Card /> component once', () => {
    expect(shallowWrapper.find(Card).find(HeaderCard)).toHaveLength(1);
  });

  it('Renders Date Format correctly', () => {
    expect(moment(shallowWrapper.find(DateBadge).text(), 'DD/MM/YYYY, h:mm a')).toBeTruthy()
  });

  it('Renders User name correctly', () => {
    expect(shallowWrapper.find(HeaderCard).find('h2').html()).toContain(postMock.user.name)
  })
});
