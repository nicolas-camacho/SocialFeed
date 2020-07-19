//CORE
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//UTILS
import { ERRORLIST } from '../../resources/constanst';
//COMPONENTS
import { SetupBox, FormWrapper, CustomInput, ErrorBadge, FetchButton, CustomLabel } from './ui'

const Form = ({ config, setConfig }) => {

  const { url, limit, interval } = config; //configuration parameters for the feed component

  const [formState, setFormState] = useState({
    formUrl: url,
    formLimit: limit,
    formInterval: interval
  })
  const [errorList, setErrorList] = useState([]); //state for handling list of errors
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => { //useEffect for handle error everytime that the data change
    handleError();
  }, [formState])

  const onChageInput = e => { //function for handling changes on inputs
    const { name, value } = e.target
    setFormState(prevState => ({ ...prevState, [name]: value }))
  }

  const updateConfig = e => { //function for setup the configuration
    const { formUrl, formLimit, formInterval } = formState

    if (!errorStatus) {
      let newConfig = {
        url: formUrl,
        limit: parseInt(formLimit),
        interval: parseInt(formInterval)
      };
      setConfig(newConfig);
    }
    e.preventDefault();
  }

  const getError = (category, code) => { //function to get error by category and code on ERRORLIST constant
    let newError = ERRORLIST[category].find(error => error.code === code)
    return newError
  }

  const removeError = code => { //function to remove errors from error state handler
    let newErrorList = errorList
    let errorIndex = newErrorList.findIndex(error => error.code === code)
    if (errorIndex >= 0) newErrorList.splice(errorIndex, 1);
    setErrorList(newErrorList);
  }

  const handleError = () => { //function for handling errors

    const { formUrl, formInterval, formLimit } = formState

    let newErrorList = [];
    let newErrorStatus = false;

    if (formUrl === "") newErrorList.push(getError('url', 'url1'));
    else removeError('url1');

    if (formLimit === '') newErrorList.push(getError('limit', 'limit1'));
    else removeError('limit1');
    if (parseInt(formLimit) === 0) newErrorList.push(getError('limit', 'limit2'));
    else removeError('limit2');
    if (isNaN(parseInt(formLimit))) newErrorList.push(getError('limit', 'limit3'));
    else removeError('limit3');

    if (formInterval === '') newErrorList.push(getError('interval', 'interval1'));
    else removeError('interval1');
    if (formInterval < 5000) newErrorList.push(getError('interval', 'interval2'));
    else removeError('interval2')
    if (isNaN(parseInt(formInterval))) newErrorList.push(getError('interval', 'interval3'));
    else removeError('interval3');

    newErrorStatus = newErrorList.filter(error => error.type === 'error').length === 0 ? false : true;

    setErrorList(newErrorList);
    setErrorStatus(newErrorStatus);
  }

  let disabled = errorStatus ? { 'disabled': 'disabled' } : {};

  return (
    <div>
      <h1 style={{ marginLeft: '10px' }}>Setup</h1>
      <SetupBox>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {errorList ? errorList.map((error, index) => <ErrorBadge key={index} type={error.type}>{error.message}</ErrorBadge>) : null}
        </div>
        <FormWrapper onSubmit={e => updateConfig(e)}>
          <CustomLabel htmlFor="formUrl">URL</CustomLabel>
          <CustomInput value={formState.formUrl} onChange={e => onChageInput(e)} type="text" placeholder="URL for json fetch" name="formUrl" />
          <CustomLabel htmlFor="formInterval">Interval</CustomLabel>
          <CustomInput value={formState.formInterval} onChange={e => onChageInput(e)} type="number" placeholder="Update Interval" name="formInterval" />
          <CustomLabel htmlFor="formLimit">No. of Posts</CustomLabel>
          <CustomInput value={formState.formLimit} onChange={e => onChageInput(e)} type="number" placeholder="Number of post to fetch" name="formLimit" />
          <FetchButton type="submit" {...disabled}>Fetch 🚀</FetchButton>
        </FormWrapper>
      </SetupBox>
    </div >
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
