import instagramLogo from '../Images/instagram.png'; 
import facebookLogo from '../Images/facebook.png'; 
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="copyright">Copyright © 2021 Ezpresso Coffee Bar</div>
                <a href="https://www.instagram.com/ezpresso.coffee.bar/?hl=en">
                    <img className="logo" alt='' src={instagramLogo}></img>
                </a>
                <a href="https://www.facebook.com/ezpresso.coffee.bar">
                    <img className="logo" alt='' src={facebookLogo}></img>
                </a>
            </div>
        </div>
    );
}

export default Footer;