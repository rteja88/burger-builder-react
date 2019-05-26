import React from 'react';
import Auxx from '../../hoc/Auxx';

/*
Layout is a pure functional component which does not manage state using hooks either
*/
const layout  = (props) => (

    /*
    Please be noted instead of using Auxx, on can
        a) Return an array
        b) Use a <div> to wrap the JSX code beiing returned , We need JSON , so we use Auxx
    */
    <Auxx>
    <div>Toolbar, Sidedrawer , Backdrop</div>
    <main>
        {props.children}
    </main>
    </Auxx>
);

export default layout;