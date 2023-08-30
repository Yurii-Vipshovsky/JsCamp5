import Footer from './Footer';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import { getCookie, setCookie } from "../Scripts/Cookies";
import buttonArrow from '../Images/ButtonArrow.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShowDollar from "../Scripts/ShowDollar";

function Card(){
    const [countToCard, setCountToCard] = useState(getCookie('card').reduce((acc, item) => acc + item.count, 0));

    const [products, setProducts] = useState(getCookie('card'));

    const [showOrderForm, setShowOrderForm] = useState(false);

    const navigate = useNavigate();

    const calcTotalPrice = ()=>{
        let totalPrice = 0;
        totalPrice = products.reduce((acc, item) => acc + item.count*item.product.newprice, totalPrice)
        return totalPrice+'$';
    }

    useEffect(()=>{
        setCountToCard(products.reduce((acc, item) => acc + item.count, 0));
        setCookie('card', products, 30);
    },[products])

    const calcDiscount = ()=>{
        let discount = 0;
        products.forEach(element => {
            if(!isNaN(element.product.oldprice)){
                discount += (element.product.oldprice-element.product.newprice)*element.count;
            }            
        });
        return discount+'$';
    }

    function deleteFromCard(id){
        setProducts(products.filter((product) => product.product.id !== id));
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
        if(countToCard>0){
            setShowOrderForm(true);
            document.querySelector('.card__order-button').remove();
        }
    }

    function submitOrder(e){
        e.preventDefault();
        let inputs = document.querySelectorAll('input');
        inputs.forEach(element => {
            element.classList.remove('invalid-input');
        });
        let isDataCorrect = true;
        let form = document.querySelector('.order-form');        
        const data = new FormData(form);
        let dataToSend = {};
        const lettersPattern = /^[a-zA-Zа-яА-Я\s]+$/;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var phonePattern = /^[\d+]+$/;
        for (const [name,value] of data) {
            if(name==='name'){
                if(!lettersPattern.test(value)){
                    isDataCorrect=false;
                    document.querySelector('input[name="name"]').classList.add('invalid-input');
                }
            }
            if(name==='email'){
                if(!emailPattern.test(value)){
                    isDataCorrect=false;
                    document.querySelector('input[name="email"]').classList.add('invalid-input');
                }
            }
            if(name==='phone'){
                if(!phonePattern.test(value)){
                    isDataCorrect=false;
                    document.querySelector('input[name="phone"]').classList.add('invalid-input');
                }
            }
            dataToSend[name] = value;
        }
        if(isDataCorrect){
            let productsArr = [];
            products.forEach(element => {
                productsArr.push({'id':element.product.id,
                                'count':element.count})
            });
            dataToSend["products"] = productsArr;

            axios.post('http://localhost:4000/order', dataToSend, {
                headers: {
                'Content-Type': 'application/json'
                }})
            .then(function (response) {
                setCookie('card', [], 30);
                navigate('/order-confirm');
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    const OrderComponent = () => {
        return (
          <div>
            <form className='order-form' onSubmit={submitOrder}>
                <label>Full Name* <input name="name" required placeholder='Your Full Name'></input></label>
                <label>Your Email* <input name="email" required placeholder='example@yourmail.com'></input></label>
                <label>Address* <input name='address' required placeholder='Your company address'></input></label>
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
                        <div key={elem.product.id} className="card__product">
                            <div className="card__product-name-price">
                                <img src={"http://localhost:4000/"+ elem.product.image} alt={elem.product.name}></img>
                                <h6>{elem.product.name}</h6>
                                {Boolean(elem.product.oldprice) && <p className="product__prew-price">{ShowDollar(elem.product.oldprice)}</p>}
                                <h6 className="product__new-price">{ShowDollar(elem.product.newprice)}</h6>
                            </div>
                            <div className="card__quantity-block">
                                <h6>Quantity : </h6>
                                <input className='card__product-count' type='number' value={elem.count} onChange={e => changeQuantity(elem.product.id, e.target.value)}></input>
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