import React from 'react';
import './Header.css';
import BannerBackground from '../../image/bannerBackground.png';

const Header = () => {
    return (
        <>
            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${BannerBackground})` }} className='header' >
                <div className="banner-description">
                    <h1>Best Food Waiting For Your Belly</h1>
                    <input type="text" placeholder="Search food items" />
                    <button type="button" id="search-btn" class="btn btn-dark">Search</button>
                </div>
            </div>
        </>
    );
};

export default Header;
