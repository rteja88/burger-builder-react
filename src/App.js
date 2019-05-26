import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';

/*
<Layout> contains other elements
<BurgerBuilder/> is a self closing component since its a independent entity.
*/

class App extends Component {

  render() {
            return (
              <div >
                <Layout>
                  
                  <BurgerBuilder/>
                </Layout>
              </div>
            ); // end of return
  } // end of render
}

export default App;
