import React from 'react';
import PropTypes from 'prop-types';

const LikeButton = ({ count }) => (
    <span className="like-button">
    <i className="fa fa-heart"/>
    <span className="like-count">
    {count ? count : null}
    </span>
    </span>
    );

    LikeButton.propTypes = {
        count: PropTypes.number
    }

export default LikeButton;