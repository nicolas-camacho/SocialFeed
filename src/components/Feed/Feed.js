//CORE
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//UTILS
import moment from 'moment';
//COMPONENTS
import Post from './Post';
import { CenteredContainer, UpdateBadge } from './ui';

const Feed = ({ url, number, interval }) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [latest, setLatest] = useState('');

  useEffect(() => {
    getData();
    const mainInterval = setInterval(getData, interval);
    return () => clearInterval(mainInterval)
  }, [url, number, interval]);

  const getData = async () => {
    setLoading(true)
    let response = await fetch(`${url}?limit=${number}`);
    let data = await response.json();
    let date = moment().format('h:mm:ss a');
    setLatest(date);
    setPosts(data);
    setLoading(false);
  };

  return (
    <CenteredContainer>
      <h1 style={{ marginLeft: '10px' }}>Feed</h1>
      <div style={{ marginBottom: '20px' }}>
        <UpdateBadge>Last update: {latest}</UpdateBadge>{loading ? <span> ⏲</span> : null}
      </div>
      {posts ? posts.map((post, index) =>
        <Post
          key={index}
          post={post}
        />
      ) : null}
    </CenteredContainer>
  )
}

Feed.propTypes = {
  url: PropTypes.string,
  number: PropTypes.number,
  interval: PropTypes.number,
}

Feed.defaultProps = {
  url: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
  number: 10,
  interval: 60000
}

export default Feed
