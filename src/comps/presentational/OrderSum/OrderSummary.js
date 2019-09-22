import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';


const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((ik, i) => {
        return (
            <li key={i}>
                <span style={{ textTransform: 'capitalize' }}>{ik}</span>: {props.ingredients[ik]}
            </li >
        );
    });

    return (
        <Aux>
            <h3>Order:</h3>
            <p>You Burger composition</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total Price: <b>{props.priceTotal.toFixed(2)}</b></p>
            <p>Continue to checkout</p>
            <Button btnType="Danger" clicked={props.purchCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchContinue}>Checkout</Button>
        </Aux>
    )
}

export default orderSummary;