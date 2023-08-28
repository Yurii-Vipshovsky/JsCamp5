import AboutUsSection from "./AboutUsSection";
import Categories from "./Categories";
import EcoFriendly from "./EcoFriendly";
import NaturalFood from "./NaturalFood";
import News from "./News";
import Offer from "./Offer";
import SmallGetCards from "./SmallGetCarts";
import SquareBlocks from "./SquareBlocks";
import Subscribe from "./Subscribe";
import Testimonial from "./Testimonial";
import ModalProduct from "./ModalProduct";
import React, { useState } from 'react';
import { getCookie, setCookie } from "../Scripts/Cookies";

function MainPage({ sendDataToHeader }){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataToModal, setDataToModal] = useState({});

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChildData = (data) => {
        setDataToModal(data);
        openModal();
    };

    const addDataToCard = (data) => {
        console.log(data);
        let card = getCookie('card');
        card.push(data);
        setCookie('card', card, 30);
        sendDataToHeader(data.count);
        closeModal();
    };

    return(
        <>
            <NaturalFood></NaturalFood>
            <SmallGetCards></SmallGetCards>
            <AboutUsSection></AboutUsSection>
            <Categories onData={handleChildData}></Categories>
            <Testimonial></Testimonial>
            <Offer onData={handleChildData}></Offer>
            <EcoFriendly></EcoFriendly>
            <SquareBlocks></SquareBlocks>
            <News></News>
            <Subscribe></Subscribe>
            <ModalProduct isOpen={isModalOpen} getProduct={dataToModal} onClose={closeModal} addToCard={addDataToCard}></ModalProduct>
        </>
    );
}

export default MainPage;