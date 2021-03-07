import React from 'react';
import './InlineListItems.scss';

export default function InlineListItems(props) {
    return(
        <ul className="InlineListItems">
            {props.items.map((item, index) => <li key={index}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></li>)}
        </ul>
    );
}
