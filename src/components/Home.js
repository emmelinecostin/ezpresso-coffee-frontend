import homeImg from '../Images/Coffee_bar_img.png'


const Home = () => {
    return (
        <div className="homePage">
            <div className="row">
                <div className="container firstComponent">
                    <div className="container CTA">
                        <h1 className="intro">
                            [PUNCH LINE]
                        </h1> 
                    </div>
                    <img className="homeImg" alt="" src={homeImg}></img>
                </div>
            </div>
        </div>
    );
}

export default Home;