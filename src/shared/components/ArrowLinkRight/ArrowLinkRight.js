import React from 'react';
import './ArrowLinkRight.scss';

export default function ArrowLinkRight(props) {
    return(
        <React.Fragment>
            <div className="ArrowLinkRight">
                <a href={props.url} className="blue-link">{props.content}<span className="arrow"></span></a>
            </div>
        </React.Fragment>
    );
}
