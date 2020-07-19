import React from 'react';
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

const Banner = styled.div`
  display: flex;
  justify-content: center;
  justitfy-text: center;
  font-size: 18px;
  background-color: #e8e8e8;
  margin: 10px;
  border-radius: 10px;
`

const ShowMore = styled.div`
  width: 30%;
  font-size: 16px;
  font-weight: bold;
  align-self: center;
  text-align: center;
  background-color: #e8e8e8;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
  :hover {
    background-color: #ededed;
  }
`

const MessageBanner = ({ text }) => {
  return (
    <Banner>
      <h3>{text}</h3>
    </Banner>
  )
}

export {
  CenteredContainer,
  UpdateBadge,
  MessageBanner,
  ShowMore
}
