import React from 'react';
import './NavButton.scss';

export default function NavButton(props) {
    return (
        <div className={`NavButton ${props.showXBtn ? "x-nav-btn" : "" }`} onClick={props.clicked} >
            <div className="inner-wrapper">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
