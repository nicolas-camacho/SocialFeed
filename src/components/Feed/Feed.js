//CORE
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//UTILS
import moment from 'moment';
//COMPONENTS
import Post from './Post';
import { CenteredContainer, UpdateBadge, MessageBanner, ShowMore } from './ui';

const Feed = ({ url, number, interval }) => {

  const [posts, setPosts] = useState([]); //state for set posts that comes from the url/json
  const [loading, setLoading] = useState(false); //state for catch the load of the data
  const [latest, setLatest] = useState('Sorry, but no data was Fetched 😓, please verify your setup.'); //state for catch the last time that the data was loaded
  const [errorMessage, setErrorMessage] = useState('') //state for Error handling
  const [page, setPage] = useState(0)

  useEffect(() => { //useEffect hook used for setup updateInterval everytime one of the parameters change
    setPage(0);
    getData();
    const mainInterval = setInterval(getData, interval);
    return () => clearInterval(mainInterval)
  }, [url, number, interval]);

  const getData = async () => { //function for fetching the data
    setLoading(true);
    let response = await fetch(`${url}?limit=${number}`)
      .catch(e => {
        setPosts([]);
        setErrorMessage('Something is wrong ❗ with the provided url, please verify your setup');
      });

    if (response && response.ok) {
      let data = await response.json();
      if (data.length) {
        let groupedData = new Array(Math.ceil(data.length / 3)).fill().map(_ => data.splice(0, 3))
        setPosts(groupedData);
        setErrorMessage('');
      } else setErrorMessage('Sorry, but no data was Fetched 😓, please verify your setup.')
    } else {
      setErrorMessage('Something is wrong ❗ with the provided url, please verify your setup')
    }

    let date = moment().format('h:mm:ss a');
    setLatest(date);
    setLoading(false);
  };

  return (
    <CenteredContainer>
      <h1 style={{ marginLeft: '10px' }}>Feed</h1>
      <div style={{ marginBottom: '10px' }}>
        <UpdateBadge>Last update: {latest}</UpdateBadge>{loading ? <span> ⏲</span> : null}
      </div>
      {posts.length ? posts.map((group, index) => {
        return parseInt(index) <= page ? group.map((post, index) => <Post key={index} post={post} />) : null
      }) : <MessageBanner text={errorMessage} />}
      {posts.length > (page + 1) ? <ShowMore onClick={() => setPage(page + 1)}>Show More 🔽</ShowMore> : null}
    </CenteredContainer>
  )
}

Feed.propTypes = {
  url: PropTypes.string,
  number: PropTypes.number,
  interval: PropTypes.number,
}

export default Feed
