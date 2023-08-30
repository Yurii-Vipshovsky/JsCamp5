import logo from '../Images/Logo.svg';
import cartIco from '../Images/Header/Cart.svg';
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';

function Header({getCardCount}){

    useEffect(()=>{
        if(getCardCount!==0){
            document.getElementById("cart-count").classList.add('header-block__red-text');
        }
    })

    return(
        <div className="header-block">
            <img src={logo} alt="Organic"></img>
            <div className="header-block__links-container">
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Pages</Link>
                <Link to={'/'}>Shop</Link>
                <Link to={'/'}>Projects</Link>
                <Link to={'/'}>News</Link>
            </div>
            <div className="header-block__search-cart">
                <div className="header-block__search-container">
                    <input type="text" />
                    <button></button>
                </div>
                <Link to={'/card'}>
                    <div className="header-block__cart-container">
                            <div>
                                <img src={cartIco} alt="Cart"></img>
                            </div>                                    
                        <p>Cart (<b id="cart-count">{getCardCount}</b>)</p>
                    </div>
                </Link> 
            </div>
        </div>
    );
}

export default Header;