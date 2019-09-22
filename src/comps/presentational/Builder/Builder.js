import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from "../Burger/Burger";
import BuildControls from '../BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSummary from '../OrderSum/OrderSummary'

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
        totalPrice: 4,
        purchasable: false,
        ordering: false
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

        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
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

        this.updatePurchaseState(updateIngredients);
    }

    // sum is the ARRAY of ingredients' value.
    // reduce the ARRAY to single number by adding its values then evaluate > 0
    // returns TRUE or FALSE

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(ingredKey => {
            return ingredients[ingredKey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({ purchasable: sum > 0 })
    }

    purchaseHandler = () => {
        this.setState({ ordering: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ ordering: false })
    }
    purchaseContinueHandler = () => {
        alert("dummy")
    }

    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.ordering} ModalCollapsed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchCancel={this.purchaseCancelHandler}
                        purchContinue={this.purchaseContinueHandler}
                        priceTotal={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    toppings={this.addIngredientHandler}
                    minusTopping={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    orderNowClick={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default Builder;