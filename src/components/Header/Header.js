import React from 'react';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import './Header.scss';

export default function Header () {
    return (
        <div className="Header container">
            <header>
                <Logo />
                <Nav />
            </ header>
        </div>
    );
}
