import React from 'react';
import { Link } from 'react-router-dom';
import './ThreeColThumbnail.scss';
import ThumbnailArrowLink from '../../ThumbnailArrowLink/ThumbnailArrowLink';

export default function ThreeColThumbnail(props) {
    const thumbMediumUrl = props.post[1]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
    const postTitle = props.post[1].title.rendered;
    const postId = props.post[1].id;
    const externalUrl = props.post[1][props.externalUrlPropName];

    // console.log("Post title = ", props.post[1].title.rendered);
    // console.log("Post id = ", props.post[1].id);
    // console.log("external link = ", props.post[1][props.externalUrlPropName]);

    return(
        <React.Fragment>
            {externalUrl
                ?   <a href={externalUrl} target="_blank">
                        <div className="ThreeColThumbnail" key={postId}>
                            <div className="thumb-inner-container">
                                {<img src={thumbMediumUrl} alt={`${postTitle} thumbnail`} />}
                                <ThumbnailArrowLink title={postTitle} />
                            </div>
                        </div>
                    </a>

                :   <Link to={`/work/single/?id=${postId}`}>
                        <div className="ThreeColThumbnail" key={postId}>
                            <div className="thumb-inner-container">
                                {<img src={thumbMediumUrl} alt={`${postTitle} thumbnail`} />}
                                <ThumbnailArrowLink title={postTitle} />
                            </div>
                        </div>
                    </Link>
            }

        </React.Fragment>
    );
}

// <Link to={`/work/single/?id=${postId}`}>
// <div className="ThreeColThumbnail" key={postId}>
// <div className="thumb-inner-container">
// {<img src={thumbMediumUrl} alt={`${postTitle} thumbnail`} />}
// <ThumbnailArrowLink title={postTitle} />
// </div>
// </div>
// </Link>
// john/?post_type=work#038;p=180
// <Link to={`/work/?post_type=work&id=${postId}`}>




// <a href="">
// <div class="thumb-inner-container">
// {<img src={thumbMediumUrl} />}
// <ThumbnailArrowLink title={postTitle} />
// </div>
// </a>

// <div class="arrow-link thumb">{postTitle}<span class="arrow"></span></div>
