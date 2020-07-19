import React from 'react';
import { shallow } from 'enzyme';
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

  it('Renders once <Card /> component', () => {
    let wrapper = shallow(<Post post={postMock} />)
    expect(wrapper.find(Card)).toHaveLength(1);
  });


  it('Renders once <HeaderCard /> component', () => {
    let wrapper = shallow(<Post post={postMock} />)
    expect(wrapper.find(HeaderCard)).toHaveLength(1);
  });

  it('Renders <HeaderCard /> component inside <Card /> component once', () => {
    let wrapper = shallow(<Post post={postMock} />)
    expect(wrapper.find(Card).find(HeaderCard)).toHaveLength(1);
  });

  it('Renders Date Format correctly', () => {
    let wrapper = shallow(<Post post={postMock} />)
    expect(moment(wrapper.find(DateBadge).text(), 'DD/MM/YYYY, h:mm a')).toBeTruthy()
  });


});
