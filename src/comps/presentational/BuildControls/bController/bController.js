import React from 'react';
import classes from './BuildControl.css';

const bController = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <buttons className={classes.Less} onClick={props.removedToppings} disabled={props.disabled}>Less</buttons>
        <buttons className={classes.More} onClick={props.addedToppings}>More</buttons>
    </div>
);

export default bController;