import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';
import { SetupBox, CustomInput, FetchButton, CustomLabel } from './ui';

const clickFn = jest.fn();

const configMock = {
  url: '',
  limit: 0,
  interval: 0
}

describe('Form', () => {

  const shallowWrapper = shallow(<Form config={configMock} setConfig={clickFn} />);

  it('renders title', () => {
    expect(shallowWrapper.find('h1').html()).toContain('Setup');
  });

  it('Renders three <CustomInput /> components', () => {
    expect(shallowWrapper.find(CustomInput)).toHaveLength(3);
  })

  it('Renders three <CustomLabel /> components', () => {
    expect(shallowWrapper.find(CustomLabel)).toHaveLength(3);
  })

  it('Renders three <CustomLabel /> components', () => {
    expect(shallowWrapper.find(CustomLabel)).toHaveLength(3);
  })
});
