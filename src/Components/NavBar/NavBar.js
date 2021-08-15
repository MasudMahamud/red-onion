import React, { useContext } from 'react';
import './NavBar.css'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../image/logo.png';
import Icon from '../../image/ICON/Path 1.png';
import { UserContext } from '../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <div className="my-nav">
                <Navbar bg='dark' variant='dark' fixed='top' expand='lg' >
                    <Navbar.Brand>
                        <img src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="div">
                        <div  >
                            <Nav className="nav-title">
                                <Nav.Link href='#' > <img src={Icon} alt="" srcset="" /> </Nav.Link>
                                <Link to="/home">
                                    <p id='sign-up-btn'> Home </p>
                                </Link>
                                <Link to="/login">
                                    <p id='sign-up-btn'> log in  </p>
                                </Link>
                                <p onClick={() => setLoggedInUser({})} id='sign-up-btn'> sign up </p>

                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        </>
    );
};

export default NavBar;