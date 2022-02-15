import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './App';
import reportWebVitals from './reportWebVitals';

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
  handle: "catperson",
  name: "IAMA Cat Person"
  },
  likes: 5,
  retweets: 5,
  timestamp: "2016-07-30 21:24:37"
  };

ReactDOM.render(
    <Tweet  tweet={testTweet}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
