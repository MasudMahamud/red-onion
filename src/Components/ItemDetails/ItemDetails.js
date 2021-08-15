import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../FakeData/FakeData';
import "./ItemDetails.css";
import { Link } from 'react-router-dom';
import { addToDatabaseCart } from '../../utilities/databaseManager';




const ItemDetails = () => {

    const { itemId } = useParams();
    const items = fakeData.find(pd => pd.id === itemId);
    const { title, description, imgUrl, price } = items;

    const [count, setCount] = useState(1);
    const [cart, setCart] = useState([]);

    const handleAddItem = (items) => {
       // console.log('item added', items);
        const newCart = [...cart, items];
        setCart(newCart);

        const sameProduct = newCart.filter(item => item.id === items.id);
        const count = sameProduct.length;
       
     
        addToDatabaseCart(items.id, count);
    }

    // const handleAddItem = (items)=>{
    //     const toBeAddKey = items.id;
    //     const sameProduct = cart.find( pd => pd.id === toBeAddKey);
    //     let count = 1;
    //     let newCart;
    //     if(sameProduct){
    //          count = sameProduct.quantity + 1;
    //          sameProduct.quantity = count;
    //          const others = cart.filter(pd => pd.id !== toBeAddKey)
    //          newCart = [...others, items];

    //     }
    //     else{
    //         items.quantity = 1;
    //         newCart = [...cart, items];
    //     }

    //     setCart(newCart);
    //     addToDatabaseCart(items.id, count);
    // }




    return (
        <div className="container main">
            <div class="row">
                <div class="col-sm-6">
                    <div className="half ">
                        <div className="content ">
                            <h1 className="main-heading">{title}</h1>
                            <p>{description}</p>
                            <div className="cart-quantity">
                                <h1>${price * count}</h1>
                                <button onClick={() => setCount(count - 1)} className="cart-btn"> - </button>
                                <h5 className="price-box"> {count} </h5>
                                <button onClick={() => setCount(count + 1)} className='cart-btn'> + </button>
                            </div>
                           
                            <Link to="/shipment">
                                <div>
                                    <button onClick={() => handleAddItem(items)} variant="contained" color="secondary">Add</button>
                                </div>
                            </Link>


                            <div className="mini-image">
                                <img src={imgUrl} alt="" />
                            </div>
                            <div className="mini-image">
                                <img src={imgUrl} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-sm-6">
                    <div className="half ">
                        <img src={imgUrl} alt="" />
                    </div>
                </div>
            </div>

        </div>


    );
};

export default ItemDetails;
