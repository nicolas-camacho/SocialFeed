import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';
import { SetupBox, FormWrapper, CustomInput, Error, FetchButton, CustomLabel } from './ui';

const clickFn = jest.fn();

describe('Form', () => {
  it('Renders three <CustomInput /> components', () => {
    const configMock = {
      url: '',
      limit: 0,
      interval: 0
    }
    const wrapper = shallow(<Form config={configMock} setConfig={clickFn} />);
    expect(wrapper.find(CustomInput)).toHaveLength(3);
  })
});
