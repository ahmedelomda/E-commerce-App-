import React, { Component } from 'react';
import { connect } from  'react-redux';
import * as actionTypes from '../../Store/actions';
import { NavLink } from 'react-router-dom';
import './productStyle.css';
import ProductsMock from './ProductsMock';

class Product extends Component {

    state = {
    }

    render() {
        return (
            <div className='container'>
                <div className="container-row">
                    { ProductsMock.map(item => (
                        <div className="card" key={item.id}>
                            <div className="semicard">  
                                <img className="img" src={ item.img } alt="..." />
                            </div>
                            <div className="card-body">
                                <h3 className="name">
                                    <b>{item.name}</b>
                                </h3>
                                <div>
                                    <span>{item.price}</span>
                                    <NavLink to= {`/details/${item.id}`}
                                        style={{
                                            fontWeight: 500,
                                            color: "#838282"
                                        }}
                                    >
                                        More Info
                                    </NavLink>
                                    <button className="button" type="button" 
                                        onClick={ ()=> {
                                            this.props.history.push('/cart');
                                            this.props.addToCart({ ...item, quantity: 1 });
                                        }}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
       addToCart: item => dispatch( {type: actionTypes.ADD_PRODUCT_TO_CART, item})
    };
};

export default connect(null, mapDispatchToProps)(Product);