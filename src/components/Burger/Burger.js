import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
                                    .map(ingKey => 
                                        [...Array(props.ingredients[ingKey])]
                                        .map((ele,i) =>{
                                            return <BurgerIngredient type={ingKey} key={ingKey + i} />
                                        }))
                                        .reduce((arr, el)=>{
                                            return arr.concat(el);
                                        }, []);
    
    console.log(transformedIngredients);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please Add Ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger;