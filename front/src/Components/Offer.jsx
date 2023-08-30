import React, { useEffect, useState } from 'react';
import axios from "axios";
import ShowStars from "../Scripts/ShowStars";
import ShowDollar from "../Scripts/ShowDollar";

function Offer({ onData }){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try{
            const result = await axios.get("http://localhost:4000/products");
            setProducts(result.data.slice(0,4));
            }
            catch{
                console.log('No data From Server');
            }
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
                    <div key={elem.id} className="product" onClick={()=>sendDataToParent(index)}>
                        <p className="product__category">{elem.category}</p>
                        <img className="product__image" src={"http://localhost:4000/"+ elem.image} alt={elem.name}></img>
                        <h6 className="product__name">{elem.name}</h6>
                        <div className="product__price-rating-block">
                            {Boolean(elem.oldprice) && <p className="product__prew-price">{ShowDollar(elem.oldprice)}</p>}
                            <h6 className="product__new-price">{ShowDollar(elem.newprice)}</h6>
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