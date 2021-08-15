import React from 'react';
import './PlaceOrder.css';
import map from '../../image/map.png';
import DeliveryBoy from '../../image/Image/Deliveryman.png';
import Avatar from '../../image/ICON/Avatar.png';

const PlaceOrder = (props) => {
    console.log(props.value)

    const handleOrder = () => {
        alert('Order successfully done')
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 half">
                        <h4> Select Your Area :</h4>
                        <hr />
                        <img src={map} alt="" />
                    </div>


                    <div className="col-sm-4 half deliver">
                            <div className="deliver-image">

                                <img src={DeliveryBoy} alt="" />
                            </div>
                            <div className="deliver-location">
                                <div className="customer-location">
                                    <span>Your location</span>
                                    <small className="small"> 102 Rd No 7 </small>
                                </div>

                                <div className="shop-location">
                                    <span>Shop address</span>
                                    <small className="small"> Gulshan plaza </small>
                                </div>

                            </div>
                            <div className="delivery-time">
                                <h3> 10:10 </h3>
                                <p>Delivery Time</p>
                            </div>
                            <div className="raider">
                                <div>
                                    <img src={Avatar} alt="" />
                                </div>
                                <div className="raider-info">
                                    <span>Your raider</span>
                                    <span> Al-Amin </span>
                                </div>

                            </div>

                        <button className="order-btn"onClick={() => handleOrder()} > Order </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;