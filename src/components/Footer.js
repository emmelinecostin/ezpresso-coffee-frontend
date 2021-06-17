import instagramLogo from '../Images/Instagramlogo.png'; 
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="copyright">Copyright © 2021 Ezpresso Coffee Bar</div>
                <a href="https://www.instagram.com/ezpresso.coffee.bar/?hl=en">
                    <img className="instagramLogo" src={instagramLogo}></img>
                </a>
            </div>
        </div>
    );
}

export default Footer;