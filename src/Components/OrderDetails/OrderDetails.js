import React, { useState } from 'react';
import './OrderDetails.css';

const OrderDetails = (props) => {
    const [count, setCount] = useState(1);
    const { title, price,  imgUrl, id } = props.product;

    return (
        <>
            <div className="deliver">
                <div className="deliver-product">
                    <div>
                        <img src={imgUrl} alt="" />
                    </div>
                    <div className="deliver-product-info">
                        <span> {title} </span>
                        <h5> ${price * count} </h5>
                        <small> Delivery fee </small>
                    </div>
                    <button className="remove-btn" onClick={() => props.handleRemoveItem(id)}> x </button>
                    {/* <div className="cart">
                        <button onClick={() => setCount(count - 1)} className="cart-btn" > - </button>
                        <h5 className="price-box"> {count} </h5>
                        <button onClick={() => setCount(count + 1)} className="cart-btn"> + </button>
                    </div> */}
                </div>
            </div>
           
        </>
    );
};

export default OrderDetails;