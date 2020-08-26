import React , { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    'salad' : 0.5,
    'bacon' : 0.6,
    'meat' : 1.5,
    'cheese' : 0.8
}
class BurgerBuilder extends Component {
    
    state = {
        ingredients : {
            'salad' : 0,
            'bacon' : 0,
            'meat' : 0,
            'cheese' : 0
        },
        totalPrice : 4,
        purchasable : false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = newCount;
        const updatedTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        console.log(updatedIngredient,updatedTotalPrice);
        let updatedPurchasable = false;
        if(updatedTotalPrice >4)
        {
            updatedPurchasable = true;
        }
        this.setState({
            ingredients : updatedIngredient,
            totalPrice : updatedTotalPrice,
            purchasable: updatedPurchasable
        })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount>0)
        {
            const newCount = oldCount - 1;
            const updatedIngredient = {
                ...this.state.ingredients
            }
            updatedIngredient[type] = newCount;
            const updatedTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            console.log(updatedIngredient,updatedTotalPrice);
            let updatedPurchasable = false;
            if(updatedTotalPrice >4)
            {
                updatedPurchasable = true;
            }
            this.setState({
                ingredients : updatedIngredient,
                totalPrice : updatedTotalPrice,
                purchasable: updatedPurchasable
            })
        }else {
            return;
        }
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo){
            disabledInfo[key] = ( disabledInfo[key] <=0);
        }
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    purchable={this.state.purchasable} />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;