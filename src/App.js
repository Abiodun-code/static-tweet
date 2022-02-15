import './index.css';
import './App.css';
import Avatar from './components/Avatar';
import Author from './components/Author';
import Message from './components/Message';
import Time from './components/Time';
import ReplyButtons from './components/ReplyButtons';
import RetweetButton from './components/RetweetButton';
import LikeButton from './components/LikeButton';
import MoreOptionsButton from './components/MoreOptionButton';

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="container">
        <Author author={tweet.author}/>
        <Time  time={tweet.timestamp}/>
        <Message text={tweet.message} />
        <div className='buttons'>
          <ReplyButtons/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton  count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}



export default Tweet;
