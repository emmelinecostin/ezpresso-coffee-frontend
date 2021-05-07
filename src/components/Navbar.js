import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" >
                        <h1>EZPRESSO</h1>
                        <p style={{ letterSpacing: "3px" }}>Coffee Bar</p>
                    </Link> 
                    <Link to="/inquires" className="link">INQUIRES</Link>
                    <Link to="/about" className="link">ABOUT</Link>
                    <Link to="/" className="link">HOME</Link>
                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;