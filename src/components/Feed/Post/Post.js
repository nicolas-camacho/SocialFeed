//CORE
import React from 'react';
import PropTypes from 'prop-types';
//UTILS
import styled from 'styled-components';

const Card = styled.div`
  background-color: #f0ecea;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`

const Post = ({ post }) => {

  function hashtag(text) {
    let repl = text.replace(/#(\w+)/g, '<a href="#">#$1</a>');
    let newRepl = repl.replace(/(https?:\/\/[^\s]+)/g, url => `<br><a href=${url} target="_blank">${url}</a>`)
    return newRepl;
  }

  return (
    <Card>
      <h1>{post.user.name}</h1><span>{post.created_at}</span>
      <div dangerouslySetInnerHTML={{ __html: hashtag(post.text) }}></div>
    </Card >
  )
}

export default Post
