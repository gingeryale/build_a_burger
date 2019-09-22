import React from 'react';
import classes from './NavItems.css'
import NavItem from './NavItem/NavItem';


const navigtionItems = () => (
    <ul className={classes.NavigationItems}>
        <NavItem link="/" active>
            Burger Builder
        </NavItem>
        <NavItem link="/">
            Checkout
        </NavItem>
    </ul>
);

export default navigtionItems;