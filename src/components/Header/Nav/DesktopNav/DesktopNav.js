import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './DesktopNav.scss';

export default function DesktopNav(props) {
    // function checkActive (match, location) {
    //     //some additional logic to verify you are in the home URI
    //     if(!location) return false;
    //     const {pathname} = location;
    //     // console.log(pathname);
    //     return pathname === "/";
    // }

    return (
        <nav className="DesktopNav">
            <ul>
                {props.navItems.map((item, index) =>
                    <li key={index}>
                        <NavLink
                            exact
                            to={index === 0 ? "/" : `/${item[1].title.toLowerCase()}`}
                            activeClassName="active-desktop-link" >
                                {item[1].title.toLowerCase()}
                        </NavLink>
                    </li>)
                }
            </ul>
        </nav>
    )
}
