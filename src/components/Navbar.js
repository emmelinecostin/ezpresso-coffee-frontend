import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="row">
                    <div className="container">
                        <Link to="/" className="link">HOME</Link>
                        <Link to="/about" className="link">ABOUT</Link>
                        <Link to="/inquires" className="link">INQUIRES</Link>
                    </div>
                    <div className="container">
                        <Link to="/" className="Logo">
                            <h1>EZPRESSO</h1>
                            <p style={{ letterSpacing: "3px" }}> Coffee Bar</p>
                        </Link>
                    </div>
                    <div className="container">
                        <Link to="/login" className="link">LOGIN</Link>
                        <Link to="/signup" className="link">SIGN UP</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;