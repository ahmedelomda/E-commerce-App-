import React from 'react';
import {connect} from 'react-redux';
import { Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import Header from '../Components/Header';
import Login from '../Components/Registration/Login';
import Register from '../Components/Registration/SignUp';
import Product from '../Components/Products/product';
import Footer from '../Components/Footer';
import Details from '../Components/Products/singleproduct';
import Cart from '../Components/Cart';

function Navigation (props){
  return (
    <BrowserRouter> 
        <Header /> 
        <div className="App">
          <Switch>
            { props.isAuthenticated? (
                <React.Fragment>
                  <Route path='/' exact component={Product} />
                  <Route path='/details/:id' exact component={Details} />
                  <Route path='/cart' exact component={Cart} />
                  <Redirect to='/' />
                </React.Fragment>
              ):(
                <React.Fragment>
                  <Route path='/login' exact component={Login} />
                  <Route path='/register' exact component={Register} />
                  <Redirect to='/login' />
                </React.Fragment>
              )
            }   
          </Switch>
        </div>
        <Footer />
    </BrowserRouter>  
  );
}

const mapStateToProps = state => {
  return {
     isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps)(Navigation);