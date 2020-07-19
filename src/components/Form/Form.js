//CORE
import React, { useState } from 'react';
//COMPONENTS
import { SetupBox, FormWrapper, CustomInput, Error, FetchButton, CustomLabel } from './ui'

const Form = ({ config, setConfig }) => {

  const { url, limit, interval } = config;

  const [formUrl, setFormUrl] = useState(url);
  const [formLimit, setFormLimit] = useState(limit);
  const [formInterval, setFormInterval] = useState(interval);
  const [formError, setformError] = useState({
    status: false,
    message: []
  });


  const updateConfig = e => {
    let newConfig = {
      url: formUrl,
      limit: parseInt(formLimit),
      interval: parseInt(formInterval)
    }
    setConfig(newConfig)
  }

  const handleError = () => {
    let newErrorList = formError.message.length
  }

  return (
    <div>
      <h1 style={{ marginLeft: '10px' }}>Setup</h1>
      <SetupBox>
        <FormWrapper>
          <CustomLabel for="url">URL</CustomLabel>
          <CustomInput value={formUrl} onChange={e => setFormUrl(e.target.value)} type="text" placeholder="URL for json fetch" name="url" />
          <CustomLabel for="interval">Interval</CustomLabel>
          <CustomInput value={formInterval} onChange={e => setFormInterval(e.target.value)} type="number" placeholder="Update Interval" name="interval" />
          <CustomLabel for="limit">No. of Post</CustomLabel>
          <CustomInput value={formLimit} onChange={e => setFormLimit(e.target.value)} type="number" placeholder="Number of post to fetch" name="limit" />
          <FetchButton type="button" onClick={e => updateConfig(e)}>Fetch 🚀</FetchButton>
        </FormWrapper>
      </SetupBox>
    </div>
  )
}

export default Form
