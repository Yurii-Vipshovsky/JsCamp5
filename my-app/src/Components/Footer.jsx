import logo from '../logo.svg';
import instagramIco from '../logo.svg';
import facebookIco from '../logo.svg';
import twitterIco from '../logo.svg';
import printestIco from '../logo.svg';

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
                    <p></p>
                    <div>
                        <img src={instagramIco} alt="Instagram"></img>
                        <img src={facebookIco} alt="Facebook"></img>
                        <img src={twitterIco} alt="X"></img>
                        <img src={printestIco} alt="Printest"></img>
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
                <p>Copyright C <b>Organick</b> | Designed by <b>VictorFlow</b> Templates - Powered by <b>Webflow</b></p>
            </div>
        </div>
    );
}

export default Footer;