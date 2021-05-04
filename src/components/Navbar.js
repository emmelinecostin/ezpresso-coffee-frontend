import logo from '../Images/logo.jpg';

console.log(logo);
const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/"><img className="logo" src={logo}></img></a>
            <div className="links">
                <a href="/">HOME</a>
                <a href="/about">ABOUT</a>
                <a href="/inquires">INQUIRES</a>
            </div>
        </nav>
    );
}

export default Navbar;