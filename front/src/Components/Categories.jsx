import buttonArrow from "../Images/ButtonArrow.svg";
import ShowStars from "../Scripts/ShowStars";
import ShowDollar from "../Scripts/ShowDollar";
import React, { useEffect, useState } from 'react';
import axios from "axios";

function Categories({ onData }){
    const HALF_PRODUCTS_COUNT = 8;

    const [allProducts, setProducts] = useState([]);

    const [productsToShow, setProductsToShow] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try{
                const result = await axios.get("http://localhost:4000/products");
                setProducts(result.data);
                setProductsToShow(result.data.slice(0,HALF_PRODUCTS_COUNT));
            }
            catch{
                console.log('No data From Server');
            }            
        }
    
        fetchProducts();
    }, []);

    function LoadMore(){
        setProductsToShow(allProducts);
        document.querySelector('#load-more-button').classList.add('hidden');
        document.querySelector('#hide-all-button').classList.remove('hidden');
    }

    function HideAll(){
        setProductsToShow(allProducts.slice(0, HALF_PRODUCTS_COUNT));
        document.querySelector('#load-more-button').classList.remove('hidden');
        document.querySelector('#hide-all-button').classList.add('hidden');
    }
        
    function sendDataToParent (productNumber) {
        onData(allProducts[productNumber]);
    };

    return(
        <div className="categories">
            <p className="handwriting-text">Categories</p>
            <h2>Our Products</h2>
            <div className="categories__container">
                {productsToShow.map((elem, index) => (
                    <div key={elem.id} className="product" onClick={()=>sendDataToParent(index)}>
                        <p className="product__category">{elem.category}</p>
                        <img className="product__image" src={"http://localhost:4000/"+ elem.image} alt={elem.name}></img>
                        <h6 className="product__name">{elem.name}</h6>
                        <div className="product__price-rating-block">
                            {Boolean(elem.oldprice) &&<p className="product__prew-price">{ShowDollar(elem.oldprice)}</p>}
                            <h6 className="product__new-price">{ShowDollar(elem.newprice)}</h6>
                            <div className='stars-container'>
                                {ShowStars(elem.rating)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={LoadMore} id="load-more-button">Load More<img src={buttonArrow} alt=">"></img></button>
            <button onClick={HideAll} id="hide-all-button" className="hidden">Hide All<img src={buttonArrow} alt=">"></img></button>
        </div>
    );
}

export default Categories;