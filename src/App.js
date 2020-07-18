//CORE
import React, { useState } from 'react';
//UTILS
import styled from 'styled-components';
//COMPONENTS
import Feed from './components/Feed';
import Form from './components/Form'

const Container = styled.div`
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const SetupWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`

export default () => {

  const [config, setConfig] = useState({
    url: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
    limit: 3,
    interval: 10000
  });

  return (
    <Container>
      <SetupWrapper>
        <Form config={config} setConfig={setConfig} />
      </SetupWrapper>
      <div style={{ width: '70%' }}>
        <Feed url={config.url} number={config.limit} interval={config.interval} />
      </div>
    </Container>
  )
};
