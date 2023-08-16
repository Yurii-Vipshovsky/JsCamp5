import buttonArrow from '../Images/ButtonArrow.svg';

function NaturalFood(){
    return(
        <div className="natural-food">
            <div className="natural-food__text-container">
                <p className="handwriting-text">100% Natural Food</p>
                <h1>Choose the best 
                healthier way
                of life</h1>
                <button>Explore Now<img src={buttonArrow} alt='>'></img></button>
            </div>
        </div>
    );
}

export default NaturalFood;