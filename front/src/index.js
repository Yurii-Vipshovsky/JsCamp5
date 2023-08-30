import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Card from './Components/Card';
import NotFound from './Components/NotFound';
import OrderConfirm from './Components/OrderConfirm';
import AllOrders from './Components/AllOrders';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "card",
    element: <Card></Card>,
  },
  {
    path: "order-confirm",
    element: <OrderConfirm></OrderConfirm>,
  },
  {
    path: "all-orders",
    element: <AllOrders></AllOrders>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
