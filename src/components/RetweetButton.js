import React from 'react';
import Count from './ReCount';

function RetweetButton({count}) {
    return (
        <span className="retweet-button">
            <i className="fa fa-retweet"/>
            <Count count = {count}/>

        </span>
    );
}


    
export default RetweetButton;