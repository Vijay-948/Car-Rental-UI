

import AboutMain from '../Assests/About/about-main.jpg';
import icon1 from '../Assests/About/vehicles.png';
import icon2 from '../Assests/About/car-rental.png';
import icon3 from '../Assests/About/car-repair.png';
import Footer from '../Components/Footer';

function About() {
    return (
        <>
        <section className="about-page">
            <div className="container">
                <div className="about-main">
                    <img className="about-main__img" src={AboutMain} alt='car-renting' />
                    <div className="about-main__text">
                        <h3>About Company</h3>
                        <h2>You start the engine and your adventure begins</h2>
                        <p>
                        Certain but she but shyness why cottage. Guy the put instrument
                        sir entreaties affronting. Pretended exquisite see cordially the
                        you. Weeks quiet do vexed or whose. Motionless if no to
                        affronting imprudence no precaution. My indulged as disposal
                        strongly attended.
                        </p>
                        <div className="about-main__text__icons">
                            <div className="about-main__text__icons__box">
                                <img src={icon1} alt='car-icon' />
                                <span>
                                    <h4>10</h4>
                                    <p>Car Types</p>
                                </span>
                            </div>
                            <div className="about-main__text__icons__box">
                                <img src={icon2} alt='car-icon' />
                                <span>
                                    <h4>120+</h4>
                                    <p>Rental Outlets</p>
                                </span>
                            </div>
                            <div className="about-main__text__icons__box">
                                <img src={icon3} alt='car-icon' className='last-fk' />
                                <span>
                                    <h4>20</h4>
                                    <p>Mechanic Shop all Over India</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="book-banner">
            <div className="book-banner__overlay"></div>
            <div className="container">
                <div className="text-content">
                    <h2>Book a car by getting in touch with us</h2>
                    <span>
                        <i className='fa-solid fa-phone'></i>
                        <h3>+91 8435757485</h3>
                    </span>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default About;