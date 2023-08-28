import Header from "./Header";
import Footer from "./Footer";
import thankForOrder from "../Images/OrderConfirm/Backgroud.jpg";

function OrderConfirm(){
    return(
        <>
            <Header getCardCount={0}></Header>
            <h1 className="order-confirm__text">Thank you for your order</h1>
            <img src={thankForOrder} alt="Thank"></img>
            <Footer></Footer>
        </>
    );
}

export default OrderConfirm;