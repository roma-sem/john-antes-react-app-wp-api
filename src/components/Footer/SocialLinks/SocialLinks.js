import React from 'react';
import './SocialLinks.scss';
import InlineListItems from '../../../shared/components/InlineListItems/InlineListItems';

export default function SocialLinks(props) {
    const items = [
        {
            title: "Facebook",
            url: "https://www.facebook.com/JohnAntesVisual/"
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/john_antes/"
        },
        {
            title: "Dribble",
            url: "https://dribbble.com/johnantes"
        },
        {
            title: "Behance",
            url: "https://www.behance.net/johnantes"
        }
    ];

    return(
        <div className="SocialLinks">
            <InlineListItems items={items} />
        </div>
    );
}
