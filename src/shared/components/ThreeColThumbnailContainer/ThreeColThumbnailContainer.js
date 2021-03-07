import React,
{
    lazy,
    Suspense
} from 'react';
import './ThreeColThumbnailContainer.scss';
// import ThreeColThumbnail from './ThreeColThumbnail/ThreeColThumbnail';
const ThreeColThumbnail = lazy(() => import("./ThreeColThumbnail/ThreeColThumbnail"));

export default function ThreeColThumbnailContainer(props) {
    console.log("[ ThreeColThumbnailContainer ]: props.posts.data = ", props.posts.data);

    return(
            <React.Fragment>
                <Suspense fallback={<h1 style={{fontSize: "30px"}}>L O A D I N G ...</h1>}>
                    <div className="ThreeColThumbnailContainer">
                        <div className="inner-ThreeColThumbnailContainer">
                            {
                                props.posts.data ? props.posts.data.map((post, index) => {
                                    return <ThreeColThumbnail post={post} externalUrlPropName={props.externalUrlPropName} key={`thubmnail-${index}`} />
                                }) : null
                            }
                        </div>
                    </div>
                </Suspense>
            </React.Fragment>
    );
}
