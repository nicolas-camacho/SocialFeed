import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const UpdateBadge = styled.span`
  background-color: #e8e8e8;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  width: 25%;
`

export {
  CenteredContainer,
  UpdateBadge
}
