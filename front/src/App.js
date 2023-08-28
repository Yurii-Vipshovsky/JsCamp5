import Footer from './Components/Footer';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import './Styles/main.css';
import React, { useState } from 'react';
import { getCookie } from "./Scripts/Cookies";
import { Outlet } from "react-router-dom";

function App() {

  const [countToCard, setCountToCard] = useState(getCookie('card').reduce((acc, item) => acc + item.count, 0));

  const getCountFromMainPage = (count) => {
    setCountToCard(countToCard+count);
  }

  return (
    <>
      <Header getCardCount={countToCard}/>
      <Outlet/>
      <MainPage sendDataToHeader={getCountFromMainPage}></MainPage>
      <Footer/>
    </>
  );
}

export default App;
