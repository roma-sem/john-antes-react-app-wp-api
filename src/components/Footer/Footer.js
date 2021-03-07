import React from 'react';
import './Footer.scss';
import ButtonBar from './ButtonBar/ButtonBar';
import HorizontalLineDivider from '../../shared/components/HorizontalLineDivider/HorizontalLineDivider';
import SocialLinks from './SocialLinks/SocialLinks';
import LogoCopyrightContainer from './LogoCopyrightContainer/LogoCopyrightContainer';

export default function Footer() {
    return(
        <footer className="container">
            <div>
                <ButtonBar />
                <HorizontalLineDivider />
                <SocialLinks />
                <LogoCopyrightContainer />
            </div>
        </footer>
    );
}
