import logo from '../Images/Logo.svg';
import instagramIco from '../Images/Footer/Insta.svg';
import facebookIco from '../Images/Footer/Fb.svg';
import twitterIco from '../Images/Footer/Twitter.svg';
import pintrestIco from '../Images/Footer/Pintrest.svg';

function Footer(){
    return(
        <div className="footer-block">
            <div className="info-block">
                <div className="info-block__contact-us">
                    <h5>Contact Us</h5>
                    <h6>Email</h6>
                    <p>needhelp@Organia.com</p>
                    <h6>Phone</h6>
                    <p>666 888 888</p>
                    <h6>Address</h6>
                    <p>88 road, borklyn street, USA</p>
                </div>
                <div className="info-block__follow-us">
                    <img src={logo} alt="Organick"></img>
                    <p>Simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum simply dummy text of the printing </p>
                    <div className="info-block__social_container">
                        <div>
                            <img src={instagramIco} alt="Instagram"></img>
                        </div>
                        <div>
                            <img src={facebookIco} alt="Facebook"></img>
                        </div>                        
                        <div>
                            <img src={twitterIco} alt="X"></img>
                        </div>                        
                        <div>
                            <img src={pintrestIco} alt="Pintrest"></img>
                        </div>
                    </div>
                </div>
                <div className="info-block__utility-pages">
                    <h5>Utility Pages</h5>
                    <p>Style Guide</p>
                    <p>404 Not Found</p>
                    <p>Password Protected</p>
                    <p>Licences</p>
                    <p>Changelog</p>
                </div>
            </div>
            <div className="footer-block__copyrigh-section">
                <p>Copyright &copy; <b>Organick</b> | Designed by <b>VictorFlow</b> Templates - Powered by <b>Webflow</b></p>
            </div>
        </div>
    );
}

export default Footer;