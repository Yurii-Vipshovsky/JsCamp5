import happyClient from "../Images/Testimonial/Client.jpg";
import ShowStars from "../Scripts/ShowStars";


function Testimonial(){
    return(
        <div className="testimonial">
            <div className="testimonial__review">
                <p className="handwriting-text">Testimonial</p>
                <h2>What Our Customer Saying?</h2>
                <img src={happyClient} alt="happy Client"></img>
                <div className="stars-container">
                    {ShowStars(5)}
                </div>
                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                <h6>Sara Taylor</h6>
                <p>Consumer</p>
            </div>
            <div className="testimonial__achives-container">
                <div className="testimonial__achiv-border">
                    <div className="testimonial__achiv">
                        <h2>100%</h2>
                        <p>Organic</p>
                    </div>
                </div>
                <div className="testimonial__achiv-border">
                    <div className="testimonial__achiv">
                        <h2>285</h2>
                        <p>Active Product</p>
                    </div>
                </div>
                <div className="testimonial__achiv-border">
                    <div className="testimonial__achiv">
                        <h2>350+</h2>
                        <p>Organic Orchads</p>
                    </div>
                </div>
                <div className="testimonial__achiv-border">
                    <div className="testimonial__achiv">
                        <h2>25+</h2>
                        <p>Years of Farming</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Testimonial;