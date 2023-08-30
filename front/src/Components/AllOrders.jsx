import Footer from "./Footer";
import Header from "./Header";
import { getCookie } from "../Scripts/Cookies";
import React, { useEffect, useState } from 'react';
import axios from "axios";

function AllOrders(){

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const result = await axios.get("http://localhost:4000/all-orders");
            console.log(result.data);
            setAllOrders(result.data);
        }
    
        fetchProducts();
    }, []);

    return(
        <>
            <Header getCardCount={getCookie('card').reduce((acc, item) => acc + item.count, 0)}/>
            <div className="all-orders">
                <h1>All Orders</h1>
                <table>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Message</th>
                        <th>Product</th>
                        <th>Count</th>
                    </tr>
                    {allOrders.map((elem) => (
                        <tr>
                            <td>{elem.fullName}</td>
                            <td>{elem.email}</td>
                            <td>{elem.phoneNumber}</td>
                            <td>{elem.address}</td>
                            <td>{elem.message}</td>
                            <td>{elem.name}</td>
                            <td>{elem.count}</td>
                        </tr>
                    ))}
                </table>
                
            </div>
            <Footer></Footer>
        </>
    );
}

export default AllOrders;