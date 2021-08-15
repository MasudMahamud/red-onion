import React from 'react';


const Cart = ({ filterMenu, cartItems }) => {
    return (
        <>
            <div className='menu-tabs container'>
                <div className='menu-tab d-flex justify-content-around'>
                    {
                        cartItems.map((curElem, id) => {
                            return <button
                                style={{ borderBottom: '1px solid red' }}
                                className="btn btn-warning" key={id} onClick={() => filterMenu(curElem)}
                            > {curElem} </button>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Cart;