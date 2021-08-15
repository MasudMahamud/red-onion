import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Item from './Components/Items/Item';
import Service from './Components/Service/Service';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import ItemDetails from './Components/ItemDetails/ItemDetails';
 import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipment from './Components/Shipment/Shipment';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
   
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <NavBar></NavBar>
        <Switch>

          <Route exact path="/">
            <Header></Header>
            <Item></Item>
            <Service></Service>
            <Footer></Footer>
          </Route>

          <Route path="/home">
            <Header></Header>
            <Item></Item>
            <Service></Service>
            <Footer></Footer>
          </Route>

          <Route path="/item/:itemId">
            <ItemDetails />
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>

          <Route path="/shipment">
            <Shipment></Shipment>
          </Route>
          <Route path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </Route>

        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
