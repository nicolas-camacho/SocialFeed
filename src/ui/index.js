import styled from 'styled-components';

const Bar = styled.div`
  background-color: #00c4ff;
  height: 5px;
`

const Container = styled.div`
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const SetupWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const Content = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

export {
  Bar,
  Container,
  SetupWrapper,
  Content
}
