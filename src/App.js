//CORE
import React from 'react';
//UTILS
import styled from 'styled-components';
//COMPONENTS
import Feed from './components/Feed';

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`

export default () => (
  <Container>
    <Feed url='http://api.massrelevance.com/MassRelDemo/kindle.json' number={10} interval={10000} />
  </Container>
);
