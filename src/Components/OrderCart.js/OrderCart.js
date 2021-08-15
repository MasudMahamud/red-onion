import React from 'react';

const OrderCart = (props) => {
    const cart = props.cart;
    console.log(cart)
    const { title,  price } = props.items;
    const count = props.count;
  // const total = cart.reduce((total, curElem) => total + curElem.price * count, 0)
    console.log(cart);
    return (
        <div>
             <p> {title} </p>
            <h1> add : {count} </h1>
            <h2>price : {price * count} </h2>
        </div>
    );
};

export default OrderCart;