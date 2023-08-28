import Footer from "./Footer";
import Header from "./Header";
import { getCookie } from "../Scripts/Cookies";
import { Link } from "react-router-dom";
import buttonArrow from '../Images/ButtonArrow.svg';

function NotFound(){
    return(
        <>
            <Header getCardCount={getCookie('card').reduce((acc, item) => acc + item.count, 0)}/>
            <div className="not-found">
                <div>
                    <p className="not-found__404">404</p>
                    <h1>Page not found</h1>
                    <p>The page you are looking for doesn't exist or has been moved</p>
                    <Link to={'/'}>
                        <button>Go to Homepage<img src={buttonArrow} alt='>'></img></button>
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default NotFound;