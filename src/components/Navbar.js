import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="row">
                    <div className="container">
                        <Link to="/about" className="link">OUR STORY</Link>
                        <Link to="/menu" className="link">MENU</Link>
                        
                    </div>
                    <div className="logoContainer">
                        <Link to="/" className="Logo">
                            <h1>EZPRESSO</h1>
                            <p style={{ letterSpacing: "3px" }}> Coffee Bar</p>
                        </Link>
                    </div>
                    <div className="container">
                        <Link to="/gallery" className="link">GALLERY</Link>
                        <Link to="/inquires" className="link">CONTACT US</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;