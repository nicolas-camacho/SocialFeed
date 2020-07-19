import styled from 'styled-components';

const Card = styled.div`
  background-color: #e8e8e8;
  border-radius: 10px;
  padding: 10px 30px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`

const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`

const DateBadge = styled.span`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;
`

export {
  Card,
  HeaderCard,
  DateBadge
}
