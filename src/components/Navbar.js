import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="row">
                    <div className="container">
                        <Link to="/" className="link">HOME</Link>
                        <Link to="/about" className="link">ABOUT</Link>
                    </div>
                    <div className="container">
                        <Link to="/" className="Logo">
                            <h1>EZPRESSO</h1>
                            <p style={{ letterSpacing: "3px" }}> Coffee Bar</p>
                        </Link>
                    </div>
                    <div className="container">
                        <Link to="/inquires" className="link">INQUIRES</Link>
                        <Link to="/gallery" className="link">GALLERY</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;