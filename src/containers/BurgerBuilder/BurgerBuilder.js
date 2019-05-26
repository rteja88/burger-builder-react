/*
This is going to be a class component , as we are going to manage state in here for whole Burger thats 
going to be built.
*/

import React, {Component} from 'react';
import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    state =  {
        ingredients : {
            meat:  2,
            salad: 1,
            bacon: 2,
            cheese: 2
        }
    }

    render(){

       return(
            <Auxx>
               <Burger ingredients={this.state.ingredients}/> 
            </Auxx>
       );
    }
}

export default BurgerBuilder;