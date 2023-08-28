import buttonArrow from '../Images/ButtonArrow.svg';
import news1Img from '../Images/News/News1Img.png';
import news2Img from '../Images/News/News2Img.png';
import person from '../Images/News/Person.svg';

function News(){
    return(
        <div className="news">
            <p className="handwriting-text">News</p>
            <div className="news__header">
                <h2>Discover weekly content about<br/>
                    organic food, & more</h2>
                <button>More News<img src={buttonArrow} alt='>'></img></button>
            </div>
            <div className="news__container">
                <div className='news__element'>
                    <img className='news__picture' src={news1Img} alt='News 1'></img>
                    <h6 className='news__date'>25<br/>Nov</h6>
                    <div className='news__text-block'>
                        <img className='news__author-icon' src={person} alt="person"></img>
                        <p className='news__author'>By Rachi Card</p>
                        <h6>The Benefits of Vitamin D & How to Get It</h6>
                        <p className='news__text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        <button>Read More<img src={buttonArrow} alt='>'></img></button>
                    </div>
                </div>
                <div className='news__element'>
                    <img className='news__picture' src={news2Img} alt='News 2'></img>
                    <h6 className='news__date'>25<br/>Nov</h6>
                    <div className='news__text-block'>
                        <img className='news__author-icon' src={person} alt="person"></img>
                        <p className='news__author'>By Rachi Card</p>
                        <h6>Our Favourite Summertime Tommato</h6>
                        <p className='news__text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        <button>Read More<img src={buttonArrow} alt='>'></img></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;