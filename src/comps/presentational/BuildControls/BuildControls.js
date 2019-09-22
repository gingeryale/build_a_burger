import React from 'react';
import classes from './buildControls.css';
import BC from './bController/bController';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p><b>Total Price: {props.price.toFixed(2)}</b></p>
        {controls.map(ctrl => (
            <BC key={
                ctrl.label}
                label={ctrl.label}
                addedToppings={() => props.toppings(ctrl.type)}
                removedToppings={() => props.minusTopping(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}>
            ORDER NOW</button>
    </div>
);

export default buildControls;