import React from 'react';
import Video from './Video.jsx';

const VideoList = (props) => {
  return (
    props.list.map(item => <Video url={item.url} date={item.date} />)
  )
};

export default VideoList;