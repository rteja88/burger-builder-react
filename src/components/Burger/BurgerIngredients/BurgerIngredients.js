/*
This is going to be a pure func component cos ,we are not managing any state here indeed returning some JSX  
based on condition
*/
import React, {Component} from 'react';
import classes from './BurgerIngredients.module.css';
import PropTypes from 'prop-types';

class BurgerIngredients extends Component { 
    
    
render() { 
    
  
        let burgerIngredient = null;
     // Return nothing if invalid ingredient selected.

        switch(this.props.types){    
            case ('bread-bottom'):
                burgerIngredient = 
                <div className={classes.BreadBottom}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                break;
            case ('bread-top'):
                burgerIngredient = <div className={classes.BreadTop}>
                     <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                break;
            case ('meat'):
                burgerIngredient = <div className={classes.Meat}></div>
                break;
            case ('bacon'):
                burgerIngredient = <div className={classes.Bacon}></div>
                break;
            case ('cheese'):
                burgerIngredient = <div className={classes.Cheese}></div>
                break;  
            case ("salad"):
                    burgerIngredient = <div className={classes.Salad}></div>
                    break;  
            default:
                    burgerIngredient = null;                 

        } // end of switch
        return burgerIngredient;

    
}
    
} // end of class

BurgerIngredients.propTypes = {
    types: PropTypes.string.isRequired
};

export default BurgerIngredients;

