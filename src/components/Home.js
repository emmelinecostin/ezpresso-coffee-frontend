import homeImg from '../Images/Coffee_bar_img.png'

const Home = () => {
    return (
        <div className="homePage">
            <div className="flex-container firstComponent">
                <h1 className="heading">Welcome to <br/> Ezpresso Coffee Bar </h1>
                <img className="homeImg" alt="" src={homeImg}></img>
            </div>
        </div>
    );
}

export default Home;