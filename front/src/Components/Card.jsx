import Footer from './Footer';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import { getCookie, setCookie } from "../Scripts/Cookies";
import buttonArrow from '../Images/ButtonArrow.svg';
import image from "../Images/Products/Brocoli.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Card(){
    const [countToCard, setCountToCard] = useState(getCookie('card').reduce((acc, item) => acc + item.count, 0));

    const [products, setProducts] = useState(getCookie('card'));

    const [showOrderForm, setShowOrderForm] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(products);
    }, [products])

    const calcTotalPrice = ()=>{
        let totalPrice = 0;
        totalPrice = products.reduce((acc, item) => acc + item.count*item.product.newprice, totalPrice)
        return totalPrice;
    }

    const calcDiscount = ()=>{
        let discount = 0;
        products.forEach(element => {
            if(!isNaN(element.product.oldprice)){
                discount += (element.product.oldprice-element.product.newprice)*element.count;
            }            
        });
        return discount;
    }

    function deleteFromCard(id){
        setProducts(products.filter((product) => product.product.id !== id));
        //on delete inputs doesn't change
    }

    function changeQuantity(id, value){
        setProducts(products.map((product) => { 
            if(product.product.id === id){
                let newProd = product;
                newProd.count=parseInt(value);
                return newProd
            } 
            else{
                return product;
            }
        }));
    }

    function showOrderFormFunc(){
        setShowOrderForm(true);
        document.querySelector('.card__order-button').remove();
    }

    function submitOrder(e){
        e.preventDefault();
        let form = document.querySelector('.order-form');        
        const data = new FormData(form);
        let dataToSend = {};
        for (const [name,value] of data) {
            dataToSend[name] = value;
        }
        let productsArr = [];
        products.forEach(element => {
            productsArr.push({'id':element.product.id,
                            'count':element.count})
        });
        dataToSend["produts"] = productsArr;

        console.log(dataToSend);
        axios.post('http://localhost:4000/order', dataToSend, {
            headers: {
              'Content-Type': 'application/json'
            }})
        .then(function (response) {
            //clean Card
            navigate('/order-confirm');
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const OrderComponent = () => {
        return (
          <div>
            <form className='order-form' onSubmit={submitOrder}>
                <label>Full Name* <input name="name" required placeholder='Your Full Name'></input></label>
                <label>Your Email* <input name="email" required placeholder='example@yourmail.com'></input></label>
                <label>Address* <input name='address' required placeholder='Your company  address'></input></label>
                <label>Phone number* <input name='phone' required placeholder='Enter your phone'></input></label>
                <label className='order-form__message'>Message <textarea name='message' placeholder='Some extra information'></textarea></label>
                <button type="submit">Confirm</button>
            </form>
          </div>
        );
      };
    
    return (
        <>
            <Header getCardCount={countToCard}/>
            <div className='card'>
                <div className='card__decoration'>
                    <h1>Card</h1>
                </div>
                <div className='card__orders-container'>
                    {products.map((elem) => (
                        <div id={'product-'+elem.product.id} className="card__product">
                            <div className="card__product-name-price">
                                <img src={image} alt={elem.product.name}></img>
                                <h6>{elem.product.name}</h6>
                                <p className="product__prew-price">{elem.product.oldprice}</p>
                                <h6 className="product__new-price">{elem.product.newprice}</h6>
                            </div>
                            <div className="card__quantity-block">
                                <h6>Quantity : </h6>
                                <input id='product-count' type='number' defaultValue={elem.count} onChange={e => changeQuantity(elem.product.id, e.target.value)}></input>
                            </div>
                            <button className='card__delete-from-card' onClick={() => deleteFromCard(elem.product.id)}>X</button>
                        </div>
                    ))}
                    <h3 id='total-cost'>Total Cost {calcTotalPrice()}</h3>
                    <h3 id='discount'>Discount {calcDiscount()}</h3>
                    <button className='card__order-button' onClick={showOrderFormFunc}>To Order<img src={buttonArrow} alt='>'></img></button>
                    {showOrderForm && <OrderComponent />}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Card;