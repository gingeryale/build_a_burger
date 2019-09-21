import React from 'react';
import classes from './Burger.css';
import BIngr from '../BIngr/BIngr';

const burger = (props) => {
    // tranform an object of K,V pairs into an array
    // value of Object: amount  /  key of Object: ingredient
    let transformedStateObjBurgerArray = Object.keys(props.ingredients)
        .map(ingrKey => {
            return [...Array(props.ingredients[ingrKey])].map(
                (b, i) => {
                    return <BIngr key={ingrKey + i} type={ingrKey}
                    />
                }
            )
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedStateObjBurgerArray == 0) {
        transformedStateObjBurgerArray = <p>Start adding ingredients</p>
    }
    return (
        <div className={classes.burger}>
            <BIngr type="bread-top" />
            {transformedStateObjBurgerArray}
            <BIngr type="bread-bottom" />
        </div>
    );
}

export default burger;