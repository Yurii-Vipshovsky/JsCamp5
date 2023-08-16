import citrusImg from "../Images/AboutUsSection/CitrusFruits.png"
import organicFoodIco from "../Images/AboutUsSection/OrganicFoodIco.png"
import qualityStandartsIco from "../Images/AboutUsSection/QualityStandartsIco.png"
import buttonArrow from '../Images/ButtonArrow.svg';

function AboutUsSection(){
    return(
        <div className="about-us-section">
            <img src={citrusImg} alt="Citrus"></img>
            <div className="about-us-section__text-container">
                <p className="handwriting-text">About Us</p>
                <h2>We Believe in Working
                Accredited Farmers</h2>
                <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className="about-us-section__small-block">
                    <img src={organicFoodIco} alt="Organic Food"></img>
                    <div>
                        <h6>Organic Foods Only</h6>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
                <div className="about-us-section__small-block">
                    <img src={qualityStandartsIco} alt="Organic Food"></img>
                    <div>
                        <h6>Quality Standards</h6>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>
                <button>Shop Now<img src={buttonArrow} alt='>'></img></button>
            </div>
        </div>
    );
}

export default AboutUsSection;