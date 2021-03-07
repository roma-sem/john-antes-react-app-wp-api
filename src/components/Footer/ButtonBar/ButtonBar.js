import React from 'react';
import './ButtonBar.scss';
import HeaderOne from '../../../shared/components/HeaderOne/HeaderOne';

export default function ButtonBar() {
    const content="Reach out and let's collaborate!";

    return(
        <button className="ButtonBar">
            <a href="https://www.johnantesvisual.com/contact/">
                <HeaderOne content={content} />
            </a>
        </button>
    );
}
