import React from 'react';
import classes from './BuildControl.css';

const bController = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removedToppings} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.addedToppings}>More</button>
    </div>
);

export default bController;