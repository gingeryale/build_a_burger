import React from 'react';
import classes from './Navigation.css'
import Logo from "../Logo/Logo";
import NavItems from "./NavItems/NavItems";

const navToolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default navToolbar;