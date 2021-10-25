import Ezpresso from '../Images/Ezpresso.jpg'
import CoffeePic from '../Images/coffee2.jpeg'

const Menu = () => {

    return (
        <div>
            <div className="menuImg">
                <img src={Ezpresso} alt="ezpresso" />
            </div>
            <div className="menuHeading">
                <h1>Ezpresso Menu</h1>
            </div>
            <div className="menuContainer">
                <div className="coffeeContainer">
                    <h2>Coffee</h2>
                    <p>Hot Coffee</p>
                    <p>Iced Coffee</p>
                    <p>Americano</p>
                </div>
                <div className="milkContainer">
                    <h2>Milks</h2>
                    <p>Whole Milk</p>
                    <p>Half & Half</p>
                    <p>Almond Milk</p>
                    <p>Oat Milk</p>
                </div>
                <div className="flavorsContainer">
                    <h2>Flavors</h2>
                    <p>Vanilla</p>
                    <p>Caramel</p>
                    <p>Hazelnut</p>
                    <p>Dark Chocolate</p>
                    <p>White Chocolate</p>
                    <p>Local Honey</p>
                </div>
            </div>
            <div className="requestContainer">
                <img src={CoffeePic} alt="picture of pouring milk in a coffee cup" />
                <div className="request">
                    <h2>Want an Event Special?</h2>
                    <div>
                        We are more than happy to add in your favorite flavor as a special.
                        We can also add italian soda in your package as well, we kindly ask that you specify
                        your needs and desires for your event!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;