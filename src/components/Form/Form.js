//CORE
import React, { useState } from 'react';
//COMPONENTS
import { SetupBox, FormWrapper, CustomInput } from './ui'

const Form = ({ config, setConfig }) => {

  const { url, limit, interval } = config;

  const [formUrl, setFormUrl] = useState(url);
  const [formLimit, setFormLimit] = useState(limit);
  const [formInterval, setFormInterval] = useState(interval);

  const [errorUrl, setErrorUrl] = useState(null);
  const [errorLimit, setErrorLimit] = useState(null);
  const [errorInterval, setErrorInterval] = useState(null);

  const updateConfig = () => {
    let newConfig = {
      url: formUrl,
      limit: parseInt(formLimit),
      interval: parseInt(formInterval)
    }
    setConfig(newConfig)
  }

  const handleUrl = value => {
  }

  return (
    <div>
      <h1>Setup</h1>
      <SetupBox>
        <FormWrapper>
          <CustomInput value={formUrl} onChange={e => setFormUrl(e.target.value)} type="text" placeholder="URL for json fetch"></CustomInput>
          <CustomInput value={formInterval} onChange={e => setFormInterval(e.target.value)} type="number" placeholder="Number of post to fetch"></CustomInput>
          <CustomInput value={formLimit} onChange={e => setFormLimit(e.target.value)} type="number" placeholder="Update Interval"></CustomInput>
          <button type="button" onClick={() => updateConfig()}>Fetch</button>
        </FormWrapper>
      </SetupBox>
    </div>
  )
}

export default Form
