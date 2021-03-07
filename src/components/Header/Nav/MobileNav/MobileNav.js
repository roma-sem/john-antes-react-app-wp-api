import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNav.scss';
import Logo from '../../Logo/Logo';

export default function MobileNav(props) {
    return (
        <nav className="MobileNav">
            <Logo className="nav-logo" />

            <ul>
                {props.navItems.map((item, index) =>
                    <li key={index} onClick={props.clicked}>
                        <NavLink
                            exact
                            to={index === 0 ? "/" : `/${item[1].title.toLowerCase()}`}
                            activeClassName="active-mob-nav-link">
                                {item[1].title.toLowerCase()}
                        </NavLink>
                    </li>)
                }
            </ul>
        </nav>
    )
}
