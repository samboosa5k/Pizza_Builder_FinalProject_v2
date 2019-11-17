import React, { Component } from 'react';

// import Aux from '../../hoc/Aux.jsx';
import Burger from './Burger.jsx';
// import BuildControls from './BuildControls.jsx';
// import Modal from '../../components/UI/Modal/Modal.jsx';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary.jsx';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.4

}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    constructor( props ) {
        super( props );
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4, //base price
            purchasable: false,
            purchasing: false
        }
        this.updatePurchaseState = this.updatePurchaseState.bind( this );
        this.addIngredientHandler = this.addIngredientHandler.bind( this );
        this.removeIngredientHandler = this.removeIngredientHandler.bind( this );
        this.purchaseHandler = this.purchaseHandler.bind( this );
        this.purchaseCancelHandler = this.purchaseCancelHandler.bind( this );
        this.purchaseContinueHandler = this.purchaseContinueHandler.bind( this );
    }

    updatePurchaseState( ingredients ) {

        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey]
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addIngredientHandler( type ) {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState( updatedIngredients );
    }

    removeIngredientHandler( type ) {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState( updatedIngredients );

    }

    purchaseHandler() {
        this.setState( { purchasing: true } );
    }

    purchaseCancelHandler() {
        this.setState( { purchasing: false } );
    }

    purchaseContinueHandler() {
        alert( 'You continue!' );
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (

            <div>
                {/* <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal> */}
                <Burger ingredients={this.state.ingredients} />
                {/* <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} /> */}
            </div>
        );
    }
}

export default BurgerBuilder;
