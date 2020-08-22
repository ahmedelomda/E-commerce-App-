import React, { Component } from 'react';
import { connect } from  'react-redux';
import * as actionTypes from '../../Store/actions';
import './singleStyle.css';
import ProductsMock from './ProductsMock';

class Singleproduct extends Component {
    state = {
        productDetails:{},
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.addToCart({...this.state.productDetails, quantity:1});
        this.props.history.push('/cart');
    }

    componentDidMount() {
        const productId = this.props.match.params.id;
        const productDetails = ProductsMock.find(item => item.id === Number(productId));
        this.setState({ productDetails });  //update the state and trigger a rerender of the components
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="singleCard">
                    <div className="semicard">  
                        <img className="img" src={ this.state.productDetails.img } alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="productName">
                            <b>{ this.state.productDetails.name }</b>
                        </h3>
                        <div>
                            <span className="span">{ this.state.productDetails.price }</span>
                            <p className="details">
                            { this.state.productDetails.description }
                            </p>
                            <button className="button" type="button" onClick={this.handleSubmit}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
 };

const mapDispatchToProps = dispatch => {
    return {
       addToCart: item => dispatch( {type: actionTypes.ADD_PRODUCT_TO_CART, item})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Singleproduct);
