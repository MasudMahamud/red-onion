// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { UserContext } from '../../App';
// import { useContext } from 'react';
// import './Shipment.css';

// const Shipment = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = data => {

//     }

//     console.log(watch("example")); // watch input value by passing the name of it

//     return (
//         <div style={{marginTop:'130px'}}>
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-6">
//                     <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
//                         <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your name" />
//                         {errors.name && <span className="error" >name is required</span>}

//                         <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your email" />
//                         {errors.email && <span className="error" >email is required</span>}

//                         <input defaultValue={loggedInUser.Division} {...register("Division", { required: true })} placeholder="Division" />
//                         {errors.division && <span className="error" >Division is required</span>}

//                         <input defaultValue={loggedInUser.Division} {...register("State", { required: true })} placeholder="State" />
//                         {errors.state && <span className="error" >State is required</span>}

//                         <input defaultValue={loggedInUser.zipcode} {...register("zipcode", { required: true })} placeholder="zipcode" />
//                         {errors.zipcode && <span className="error" >zipcode is required</span>}
//                         <input type="submit" />
//                     </form>
//                 </div>

//                 <div className="col-sm-6">
//                     <div> <h4> Gulshan Plaza </h4> </div>
//                     <div className="raider">
//                             <div>
//                                 <img src='' alt="" />
//                             </div>
//                             <div className="raider-info">
//                                 <span>Your raider</span>
//                                 <span> Al-Amin </span>
//                             </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//         </div>
//     );

// };

// export default Shipment;

import React, { useEffect } from 'react';
import './Shipment.css'
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import FakeData from '../FakeData/FakeData';
import Total from '../Total/Total';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Shipment = (props) => {

    const [cart, setCart] = useState([]);
    const handleRemoveItem = (itemId) => {
        const newCart = cart.filter(pd => pd.id !== itemId)
        setCart(newCart);
        removeFromDatabaseCart(itemId);
    }

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const itemId = Object.keys(saveCart);

        const cartItems = itemId.map(id => {
            const item = FakeData.find(pd => pd.id === id);
            item.quantity = saveCart[id];
            return item;
        });
        setCart(cartItems);
    }, [])


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (e) => {
        const value = e;
        console.log(value);
    }

    return (
        <div style={{ marginTop: '70px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <input disabled={true} value="Deliver to Door" />

                            <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your name" />
                            {errors.name && <span className="error" >name is required</span>}
                            <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your email" />
                            {errors.email && <span className="error" >email is required</span>}

                            <input defaultValue={loggedInUser.address} {...register("address", { required: true })} placeholder="Your address" />
                            {errors.address && <span className="error" >This filed is required</span>}


                            <input disabled={true} value="Flat, suite or floor" />
                            <input disabled={true} value="Business Name" />
                            <input disabled={true} value="Add delivery instructor" />

                            <input type="submit" />
                            {/* <input  type="button" value="save & continue" /> */}

                        </form>

                    </div>
                    <div className="col-sm-6">
                        <h4> <small>From</small> Gulshan Plaza Restaura</h4>
                        <p> Arriving in 20 - 30 minute </p>

                        {/* come form here */}
                        {
                            cart.map(pd => <OrderDetails
                                product={pd}
                                handleRemoveItem={handleRemoveItem} >
                            </OrderDetails>)
                        }

                        {/*come from here */}
                        <Total cart={cart}></Total>

                        <br />
                        <br />
                        <Link to="/placeOrder">
                            <button
                                handleSubmit={handleSubmit}
                                className='place-order-btn'
                                style={{ marginTop: "24px" }}
                                variant="contained" color="danger">
                                place order
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipment;