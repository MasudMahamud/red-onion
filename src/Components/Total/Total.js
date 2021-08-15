import React from 'react';
import './Total.css';

const Total = (props) => {
    const cart = props.cart;


    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + parseInt(product.price);

    }

    // console.log(cart)
    //    const total = cart.reduce((total,prd)=> total + prd.price , 0)
    const tax = 1;
    const Delivery = 2;
    return (
        <div className="order-cart">
            <div className="cart-info">
                <h6> Subtotal - {cart.length} item </h6>
                <h6>Tax : </h6>
                <h6>Delivery fee : </h6>
                <h5>Total : </h5>
            </div>
            <div className="cart-price">
                <h6> : ${total} </h6>
                <h6>: ${tax}</h6>
                <h6>: ${Delivery}</h6>
                <h6>: ${total + tax + Delivery }  </h6>

            </div>
        </div>

    );
};

export default Total;