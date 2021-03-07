import React from 'react';
import './ViewFrameOverlay.scss';

export default function ViewFrameOverlay() {
    return (
        <div className="ViewFrameOverlay">
            <div className="view-frame top"></div>
            <div className="view-frame bottom"></div>
            <div className="view-frame left"></div>
            <div className="view-frame right"></div>
        </div>
    );
}
