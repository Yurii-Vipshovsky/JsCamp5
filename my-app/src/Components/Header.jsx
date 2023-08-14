import logo from '../logo.svg';
import cartIco from '../logo.svg';

function Header(){
    return(
        <div className="header-block">
            <img src={logo} alt="Organic"></img>
            <div className="header-block__links-container">
                <a>Home</a>
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
                <div className="header-block__cart-container">
                    <img src={cartIco} alt="Cart"></img>
                    <p>Cart <p id="cart-count">(0)</p></p>
                </div>
            </div>
        </div>
    );
}

export default Header;