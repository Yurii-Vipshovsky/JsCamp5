import AboutUsSection from "./AboutUsSection";
import Categories from "./Categories";
import NaturalFood from "./NaturalFood";
import SmallGetCards from "./SmallGetCarts";
import Testimonial from "./Testimonial";

function MainPage(){
    return(
        <>
            <NaturalFood></NaturalFood>
            <SmallGetCards></SmallGetCards>
            <AboutUsSection></AboutUsSection>
            <Categories></Categories>
            <Testimonial></Testimonial>
        </>
    );
}

export default MainPage;