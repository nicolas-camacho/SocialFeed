//CORE
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//UTILS
import moment from 'moment';
//COMPONENTS
import Post from './Post';
import { CenteredContainer, UpdateBadge } from './ui';

const Feed = ({ url, number, interval }) => {

  const [posts, setPosts] = useState([]); //state for set posts that comes from the url/json
  const [loading, setLoading] = useState(false); //state for catch the load of the data
  const [latest, setLatest] = useState(''); //state for catch the last time that the data was loaded

  useEffect(() => { //useEffect hook used for setup updateInterval everytime one of the parameters change
    getData();
    const mainInterval = setInterval(getData, interval);
    return () => clearInterval(mainInterval)
  }, [url, number, interval]);

  const getData = async () => { //function for fetching the data
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

export default Feed
