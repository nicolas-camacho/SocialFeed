//CORE
import React from 'react';
import PropTypes from 'prop-types';
//UTILS
import moment from 'moment';
//COMPONENTS
import { Card, HeaderCard, DateBadge } from './ui';

const Post = ({ post }) => {

  const getHashtags = text => { //function for catch hashtags and links inside the post
    let repl = text.replace(/#(\w+)/g, '<a href="#">#$1</a>');
    let newRepl = repl.replace(/(https?:\/\/[^\s]+)/g, url => `<br><a href=${url} target="_blank">${url}</a>`)
    return newRepl;
  }

  return (
    <Card>
      <HeaderCard>
        <h2>{post.user.name}</h2><DateBadge>{moment(new Date(post.created_at)).format('DD/MM/YYYY, h:mm a')}</DateBadge>
      </HeaderCard>
      <div dangerouslySetInnerHTML={{ __html: getHashtags(post.text) }}></div>
    </Card >
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    created_at: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default Post
