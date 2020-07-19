//CORE
import React, { useState } from 'react';
//COMPONENTS
import Feed from './components/Feed';
import Form from './components/Form';
import { Container, SetupWrapper, Content, Bar } from './ui';

export default () => {

  const [config, setConfig] = useState({
    url: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
    limit: 3,
    interval: 10000
  });

  return (
    <>
      <Bar />
      <Container>
        <SetupWrapper>
          <Form config={config} setConfig={setConfig} />
        </SetupWrapper>
        <Content>
          <Feed url={config.url} number={config.limit} interval={config.interval} />
        </Content>
      </Container>
    </>
  )
};
