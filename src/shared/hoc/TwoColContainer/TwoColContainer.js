import React,
{
    lazy,
    Suspense
} from 'react';
import './TwoColContainer.scss';

export default function TwoColContainer(props) {
    // const totalColCount = props.totalColCount ? props.totalColCount : (props.leftColCount + props.rightColCount);
    // const getWidth = (colCount) => colCount / totalColCount * 100;
    // const leftColWidth = getWidth(props.leftColCount);
    // const rightColWidth = getWidth(props.rightColCount);

    // const leftColComponent = lazy(() => import(props.leftColComponent()));

    return(
        <div className="TwoColContainer">
            <div className="col left-col">{props.leftColComponent()}</div>
            <div className="col right-col">{props.rightColComponent()}</div>
        </div>
    );
}

// <div className="col left-col" style={{width: `${leftColWidth}%`}}>{props.leftColComponent()}</div>
// <div className="col right-col" style={{width: `${rightColWidth}%`}}>{props.rightColComponent()}</div>
