import React from 'react';
import styled from 'styled-components';

const SetupBox = styled.div`
  background-color: #e8e8e8;
  border-radius: 10px;
  padding: 12px;
  margin: 10px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-constent: space-around;
`;

const CustomInput = styled.input`
  margin: 10px 0 20px 0;
  padding: 10px;
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid #d4d4d4;
  ::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
      -webkit-appearance: none; 
      margin: 0; 
  }
  -moz-appearance: textfield;
  :hover {
    box-shadow: inset 0 0 0 2px #000000;
  }
  :focus {
    outline: none;
    box-shadow: inset 0 0 0 2px #000000;
  }
`

const FetchButton = styled.button`
  margin: 4px;
  padding: 6px 16px;
  align-self: flex-end;
  background-color: #00e676;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  transition: 0.1s;
  cursor: pointer;
  :hover {
    box-shadow: inset 0 0 0 2px #000000;
  }
  :focus {
    outline: none;
  }
`

const CustomLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`

const ErrorMessage = ({ errors }) => {
  <p>
    ⛔ {error.map(error => `${error}, `)}
  </p>
}

const Error = styled(ErrorMessage)`
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
`

export {
  SetupBox,
  FormWrapper,
  CustomInput,
  Error,
  FetchButton,
  CustomLabel
}
