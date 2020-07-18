//CORE
import React from 'react';
//UTILS
import styled from 'styled-components';
//COMPONENTS
import Feed from './components/Feed';

const Container = styled.div`
  margin: auto;
`

export default () => (
  <Container>
    <Feed></Feed>
  </Container>
);
