import styled from 'styled-components';

const SetupBox = styled.div`
  background-color: #f0ecea;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-constent: space-around;
`;

const CustomInput = styled.input`
  margin: 10px 0 10px 0;
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
`

const ErrorMessage = styled.div`
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0;
`

export {
  SetupBox,
  FormWrapper,
  CustomInput,
  ErrorMessage
}
