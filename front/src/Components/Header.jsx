import logo from '../Images/Logo.svg';
import cartIco from '../Images/Header/Cart.svg';
import { Link } from "react-router-dom";

function Header({getCardCount}){
    return(
        <div className="header-block">
            <img src={logo} alt="Organic"></img>
            <div className="header-block__links-container">
                <Link to={'/'}>Home</Link>
                <a>About</a>
                <a>Pages</a>
                <a>Shop</a>
                <a>Projects</a>
                <a>News</a>
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
                        <p>Cart <p id="cart-count">({getCardCount})</p></p>
                    </div>
                </Link> 
            </div>
        </div>
    );
}

export default Header;