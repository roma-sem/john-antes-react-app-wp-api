import React from 'react';
import './HeaderOne.scss';

export default function LargeTxt(props) {
    function decodeEntities(str) {
        return str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
    }

    return(
        <h1 className="HeaderOne">{decodeEntities(props.content)}</h1>
    );
}
