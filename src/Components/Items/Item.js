import React, { useState } from 'react';
import './Item.css'
import Cart from '../Cart/Cart';
import MenuItems from '../MenuItems/MenuItems';
import fakeData from '../FakeData/FakeData';

const allCartValue = [...new Set(fakeData.map((curElem) => curElem.category)), "All"]

const Item = () => {
   const [items, setItems] = useState(fakeData);
   const [cartItems, setCartItems] = useState(allCartValue);

   const filterMenu = (category) => {

      if (category === "All") {
         setItems(fakeData);
         return;
      }

      const updatedItems = fakeData.filter((curElem) => {
         return curElem.category === category;
      })
      setItems(updatedItems);
   }

   return (
      <>
         <h2 className='mt-5 text-center main-heading'>Order Your Favorite Disk</h2>
         <hr />

         {/* Our Menu List will come here */}
         <Cart filterMenu={filterMenu} cartItems={cartItems}></Cart>

         {/* Our Menu Items List will come here */}
         <MenuItems items={items}></MenuItems>
         {/* <button> show </button> */}
      </>
   );
};

export default Item;