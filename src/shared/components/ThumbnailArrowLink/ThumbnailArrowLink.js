import React from 'react';
import './ThumbnailArrowLink.scss';

export default function ThumbnailArrowLink(props) {
    // console.log("ThumbnailArrowLink title = ", props.title);

    return(
        <div className="ThumbnailArrowLink">
            {props.title}<span className="arrow"></span>
        </div>
    );
}

// {props.title}<span class="arrow"><img src={require('../../../assets/images/arrow_right.svg')} alt="right arrow"/></span>
