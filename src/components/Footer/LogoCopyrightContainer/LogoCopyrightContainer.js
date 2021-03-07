import React from 'react';
import './LogoCopyrightContainer.scss';
import FooterLogo from './FooterLogo/FooterLogo';
import Copyright from './Copyright/Copyright';

export default function LogoCopyrightContainer() {
    return(
        <div className="LogoCopyrightContainer">
            <FooterLogo />
            <Copyright />
        </div>
    );
}
