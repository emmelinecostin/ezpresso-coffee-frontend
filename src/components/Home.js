import homeImg2 from '../Images/Ezpresso.jpg'

const Home = () => {
    return (
        <div className="homePage">
            <div className="bgImg">
                <img className="homeImg" alt="" src={homeImg2}></img>
            </div>
            <div className="row">
                <div className="container firstComponent">
                    <div className="container CTA">
                        <h1 className="intro">
                            [INTRODUCTION PUNCH LINE]
                        </h1>
                    </div>
                </div>
                <div className="testimonialContainer">
                    <h1>Testimonials</h1>
                    <div className="groupTestimonials">
                        <div className="testimonialsFirstGroup">
                            <p className="testimonial"><em>“There is no other place we would have wanted our mother to be, every moment of mom's life and to the end of her life, she was made to feel special and loved. Everyone was cared for like family by Vicky and staff, always putting the resident's needs first." </em>- Beverly</p>
                            <p className="testimonial"><em>“Opening up your home to my dad and later on for my mom relieved our burden so much!” </em>-Donna</p>
                        </div>
                        <div className="testimonialsSecondGroup">
                            <p className="testimonial"><em>"It was hard for us to give my wife's final days to someone else's care but found that was the right decisions. My daily visits convinced me that she was in the best possible care and in the finest care facility in Arizona"</em> - Walter</p>
                            <p className="testimonial"><em>You are one of God's Angels, thank you for what you do and your love.”</em> -Sue & John </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;