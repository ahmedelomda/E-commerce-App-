import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/actions';
// Router
import { NavLink } from "react-router-dom";
import './style.css';
import Logo from './../../Images/logo3.png';
// npm install --save-dev @iconify/react @iconify/icons-ion
import { Icon } from '@iconify/react';
import cartOutline from '@iconify/icons-ion/cart-outline';


const Header = props => {
    
    const handleSubmit = ()=> {
        props.updateAuthentication(false);
        // this.props.history.push('/login');
    }

    return (
        <header className='header'>
            <div className= 'wrap'>
                <div className= 'logo'>
                   <img src={Logo} alt="e-com" />
                </div>
                { props.isAuthenticated? (
                    <div className='navbar-menu'>  
                        <ul className='navbar-nav'>
                            <li>
                                <NavLink to="/" 
                                    style={{
                                        fontWeight: "bold",
                                        color: "rgb(95 47 4)"
                                    }}
                                >
                                    Product
                                </NavLink>             
                            </li> 
                            <li >
                                <Icon icon={cartOutline} style={{fontSize:"19px", color:"orangered"}} />
                                <NavLink to="/cart" 
                                    style={{
                                        fontWeight: "bold",
                                        color: "rgb(95 47 4)"
                                    }}
                                >
                                    Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" 
                                    onClick={handleSubmit}
                                    style={{
                                        fontWeight: "bold",
                                        color: "rgb(95 47 4)"
                                    }}
                                >
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    ):(
                    <div className='navbar-menu'>  
                        <ul className='navbar-nav'>
                            <li >
                                <NavLink to="/" 
                                    style={{
                                        fontWeight: "bold",
                                        color: "rgb(95 47 4)"
                                    }}
                                >
                                    Product
                                </NavLink>             
                            </li> 
                            <li>
                                <Icon icon={cartOutline} style={{fontSize:"19px", color:"orangered"}}/>
                                <NavLink to="/cart" 
                                    style={{
                                        fontWeight: "bold",
                                        color: "rgb(95 47 4)"
                                    }}
                                >
                                    Cart
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to="/login" 
                                    style={{
                                        fontWeight: "bold",
                                        color: "rgb(95 47 4)"
                                    }}
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    )
                }
            </div>
        </header>  
    );    
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
       updateAuthentication: (isAuthenticated) => dispatch( {type: actionTypes.UPDATE_AUTHENTICATION, isAuthenticated}),
    };
 };

export default connect(mapStateToProps, mapDispatchToProps)(Header);