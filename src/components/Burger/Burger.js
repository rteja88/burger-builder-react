import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';

const burger = (props) => {

   /* const transformedIngredients= null;
     transformedIngredients = Object.keys(props.ingredients);
    console.log('transformedIngredients'+transformedIngredients); */

     const transformedIngredients = Object.keys(props.ingredients)
                                          .map( igKey => {
                                                    return [...Array(props.ingredients[igKey])]
                                                                                .map((_,i) =>{
                                                                                    return <BurgerIngredients key={igKey+i} types={igKey}/>
                                                                                });
                                                }); 

    return(
        
        <div className = {classes.Burger} >
            <BurgerIngredients types ="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients  types ="bread-bottom"/>

        </div>
        
    );
};

export default burger;