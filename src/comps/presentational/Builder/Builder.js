import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from "../Burger/Burger";
import BuildControls from '../BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 2.5,
    cheese: 1.3,
    meat: 4.8,
    bacon: 1.8
}
class Builder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }

        updateIngredients[type] = updatedCount;
        const toppings = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + toppings;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }

        updateIngredients[type] = updatedCount;
        const minusToppings = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - minusToppings;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    }

    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    toppings={this.addIngredientHandler}
                    minusTopping={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default Builder;