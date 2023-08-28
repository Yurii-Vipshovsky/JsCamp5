import React, { useState } from 'react';
import buttonArrow from '../Images/ButtonArrow.svg';
import image from "../Images/Products/Brocoli.png";
import ShowStars from "../Scripts/ShowStars";

const ModalProduct = ({ isOpen, onClose, getProduct, addToCard }) => {
    if (!isOpen) return null;

    const handleModalClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    }

    const chageDescription = (e) =>{
        if (e.target.id == 'additional-info-button') {
            document.getElementById('product-description-button').classList.remove('active');
            document.getElementById('additional-info-button').classList.add('active');
            document.getElementById('additional-info-text').classList.remove('hidden');
            document.getElementById('product-description-text').classList.add('hidden');
        }
        else{
            document.getElementById('additional-info-button').classList.remove('active');
            document.getElementById('product-description-button').classList.add('active');
            document.getElementById('product-description-text').classList.remove('hidden');
            document.getElementById('additional-info-text').classList.add('hidden');
        }
    }

    function sendDataToCard () {
        let productCount = parseInt(document.getElementById('product-count').value);
        if(isNaN(productCount) || productCount<=0){
            //error
            return;
        }
        addToCard({
            //change to product id mb
            'product':getProduct,
            'count': productCount
        });
    };
 
    const imagePath = "";
    return (
        <div className="modal-overlay" onClick={handleModalClick}>
            <div className='modal-overlay__product'>
                <button className='modal-overlay__close-button' onClick={onClose}>X</button>
                <div className='modal-overlay__product-block'>
                    <div className='modal-overlay__image-block'>       
                        <p className="product__category">{getProduct.category}</p>
                        <img src={image} alt={getProduct.name}></img>
                    </div>
                    <div className='modal-overlay__main-description-block'>
                        <h6 className="product__name">{getProduct.name}</h6>
                        <div className='stars-container'>
                            {ShowStars(getProduct.rating)}
                        </div>
                        <p className="product__prew-price">{getProduct.oldprice}</p>
                        <h6 className="product__new-price">{getProduct.newprice}</h6>
                        <p>{getProduct.smallDiscription}</p>
                        <div className='modal-overlay__add-to-card-block'>
                            <h6>Quantity : </h6>
                            <input id='product-count' type='number' defaultValue='1'></input>
                            <button onClick={sendDataToCard}>Add To Card<img src={buttonArrow} alt='>'></img></button>
                        </div>
                    </div>
                </div>
                <div className='modal-overlay__additional-description-block'>
                    <button id='product-description-button' className='active' onClick={chageDescription}>Product Description</button>
                    <button id='additional-info-button' onClick={chageDescription}>Additional Info</button>
                </div>
                <p id='product-description-text'>{getProduct.productDescription}</p>
                <p id='additional-info-text' className='hidden'>{getProduct.additionalInfo}</p>
            </div>
        </div>
    );
};

export default ModalProduct;