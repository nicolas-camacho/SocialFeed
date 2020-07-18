//CORE
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//UTILS
import styled from 'styled-components';
//COMPONENTS
import Post from './Post';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Feed = ({ url, number, interval }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
    const mainInterval = setInterval(getData, interval);
    return () => clearInterval(mainInterval)
  }, []);

  const getData = async () => {
    let response = await fetch(`${url}?limit=${number}`);
    let data = await response.json();
    setPosts(data);
  };

  return (
    <CenteredContainer>
      <h1>Feed</h1>
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
