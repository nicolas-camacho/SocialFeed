//CORE
import React from 'react';
import PropTypes from 'prop-types';
//UTILS
import styled from 'styled-components';
import moment from 'moment';

const Card = styled.div`
  background-color: #e8e8e8;
  border-radius: 10px;
  padding: 10px 30px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const DateBadge = styled.span`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;
`

const Post = ({ post }) => {

  function hashtag(text) {
    let repl = text.replace(/#(\w+)/g, '<a href="#">#$1</a>');
    let newRepl = repl.replace(/(https?:\/\/[^\s]+)/g, url => `<br><a href=${url} target="_blank">${url}</a>`)
    return newRepl;
  }

  return (
    <Card>
      <Header>
        <h2>{post.user.name}</h2><DateBadge>{moment(new Date(post.created_at)).format('YYYY-MM-DD, h:mm a')}</DateBadge>
      </Header>
      <div dangerouslySetInnerHTML={{ __html: hashtag(post.text) }}></div>
    </Card >
  )
}

export default Post
