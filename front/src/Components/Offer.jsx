import React, { useEffect, useState } from 'react';
import axios from "axios";
import ShowStars from "../Scripts/ShowStars";

function Offer({ onData }){
    const [products, setProducts] = useState([]);

    const imagePath = '../Images/Products/';

    useEffect(() => {
        async function fetchProducts() {
            const result = await axios.get("http://localhost:4000/products");
            setProducts(result.data.slice(0,4));
        }
    
        fetchProducts();
    }, []);

    function sendDataToParent (productNumber) {
        onData(products[productNumber]);
    };

    return(
        <div className="offer-block">
            <p className="handwriting-text">Offer</p>
            <h2>We Offer Organic For You</h2>
            <div className="categories__container">
                {products.map((elem, index) => (
                    <div className="product" onClick={()=>sendDataToParent(index)}>
                        <p className="product__category">{elem.category}</p>
                        <img src={imagePath+elem.img} alt={elem.name}></img>
                        <h6 className="product__name">{elem.name}</h6>
                        <div className="product__price-rating-block">
                            <p className="product__prew-price">{elem.oldprice}</p>
                            <h6 className="product__new-price">{elem.newprice}</h6>
                            <div className='stars-container'>
                                {ShowStars(elem.rating)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Offer;