//CORE
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//COMPONENTS
import { SetupBox, FormWrapper, CustomInput, Error, FetchButton, CustomLabel } from './ui'

const Form = ({ config, setConfig }) => {

  const { url, limit, interval } = config; //configuration parameters for the feed component

  const [formUrl, setFormUrl] = useState(url); //state for handling the url input
  const [formLimit, setFormLimit] = useState(limit); //state for handling the limit input
  const [formInterval, setFormInterval] = useState(interval); //state for handling the interval input
  const [formError, setformError] = useState({
    status: false,
    message: []
  }); //state for handling errors


  const updateConfig = e => { //function for setup the configuration
    let newConfig = {
      url: formUrl,
      limit: parseInt(formLimit),
      interval: parseInt(formInterval)
    }
    setConfig(newConfig)
    e.preventDefault();
  }

  const handleError = () => { //function for handling errors
    let newErrorList = formError.message.length
  }

  return (
    <div>
      <h1 style={{ marginLeft: '10px' }}>Setup</h1>
      <SetupBox>
        <FormWrapper onSubmit={e => updateConfig(e)}>
          <CustomLabel htmlFor="url">URL</CustomLabel>
          <CustomInput value={formUrl} onChange={e => setFormUrl(e.target.value)} type="text" placeholder="URL for json fetch" name="url" />
          <CustomLabel htmlFor="interval">Interval</CustomLabel>
          <CustomInput value={formInterval} onChange={e => setFormInterval(e.target.value)} type="number" placeholder="Update Interval" name="interval" />
          <CustomLabel htmlFor="limit">No. of Posts</CustomLabel>
          <CustomInput value={formLimit} onChange={e => setFormLimit(e.target.value)} type="number" placeholder="Number of post to fetch" name="limit" />
          <FetchButton type="submit">Fetch 🚀</FetchButton>
        </FormWrapper>
      </SetupBox>
    </div>
  )
}

Form.propTypes = {
  config: PropTypes.shape({
    url: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    interval: PropTypes.number.isRequired
  }).isRequired,
  setConfig: PropTypes.func.isRequired
}

export default Form
