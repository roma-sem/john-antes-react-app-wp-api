import React from 'react';
import './FooterLogo.scss';


export default function FooterLogo() {
    return(
        <div className="FooterLogo">
            <img alt="Footer Logo" src={require('../../../../assets/images/logo-JA-footer-2.png')} />
        </div>
    );
}
