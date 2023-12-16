import React from 'react';
import DateTime from './DateTime.jsx';
import DateTimePretty from './DateTimePretty.jsx';

const Video = (props) => {

  const ProcessedDate = DateTimePretty(DateTime)

  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <ProcessedDate date={props.date}/>
    </div>
  );
};

export default Video;