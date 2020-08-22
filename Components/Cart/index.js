import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/actions';
import './style.css';
// npm install --save-dev @iconify/react @iconify/icons-ion
import { Icon } from '@iconify/react';
import arrowForwardCircleSharp from '@iconify/icons-ion/arrow-forward-circle-sharp';
import arrowBackCircle from '@iconify/icons-ion/arrow-back-circle';

class Cart extends Component {

    onDeleteProduct = (e, id) => {
        e.preventDefault();
        this.props.deleteProduct(id)   
        console.log(id)
    }

    onIncreaseQuantity = (id) => {
        this.props.increaseProductQuantity(id)
        // console.log(id)
    }

    onDecreaseQuantity = (id) => {
        this.props.decreaseProductQuantity(id)
    }

    getTotalPrice = () => { 
        let price = 0;
        this.props.savedProducts.map(item => price += item.price * item.quantity) // price = price + (item.price * item.quantity)
        return price
    }

    render() {
        console.log(this.props.savedProducts)
        return (
            <div className="containerFluid">
                { this.props.savedProducts.map(item => (
                    <div className="Card" key={item.id}>
                        <div className="halfCard">  
                            <img className="cardImg" src={item.img} alt="..." />
                        </div>
                        <div className="cardBody">
                            <h3 className="productName">
                                <b>{item.name} </b>
                            </h3>
                            <div>
                                <span className="span">{item.price}</span>
                                <button className="deleteButton" type="button" onClick={ (e) => this.onDeleteProduct(e, item.id)}>
                                    Delete
                                </button>
                            </div>
                            <h5 className="h5">QTY:</h5>
                            <div  className="quantity">
                                <button onClick={() => this.onDecreaseQuantity(item.id)} disabled={item.quantity === 1 } >
                                    <Icon  icon={arrowBackCircle} />
                                </button>
                                    <span className="price">{item.quantity}</span>
                                <button onClick={() => this.onIncreaseQuantity(item.id)}> 
                                    <Icon icon={arrowForwardCircleSharp} />
                                </button>   
                            </div>
                        </div>
                    </div>
                ))}
                <div className="cardPrice">
                    <h3 className="h3">Total Price :</h3>
                    <span className="totalPrice">{this.getTotalPrice()}</span>
                    <button className="button checkbtn" type="button">
                         Checkout
                    </button>
                </div>
            </div>
        ) 
    }
}

const mapStateToProps = store => ({
    savedProducts: store.savedCartProducts,
}); 
     
const mapDispatchToProps = dispatch => {
    return {
        increaseProductQuantity: (id) => dispatch( {type: actionTypes.INCREASE_QUANTITY, id}),
        decreaseProductQuantity: (id) => dispatch( {type: actionTypes.DECREASE_QUANTITY, id}),
        deleteProduct: id => dispatch( {type: actionTypes.CLEAR_PRODUCT, id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
