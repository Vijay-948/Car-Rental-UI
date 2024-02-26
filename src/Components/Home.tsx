import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import car from '../Assests/Hero/HeroJaguar.png'
import bg from '../Assests/Hero/hero-bg.png'
import bg2 from '../Assests/Hero/home-bg.png'
import  './Home.css'


const Home = () => {

    const [goUp, setGoUp] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const bookBtn = () => {
        document
            .querySelector("#booking-section")
            ?.scrollIntoView({behavior: "smooth"});

    }

    useEffect(() => {
        const onPageScroll = () => {
            if(window.scrollY > 700){
                setGoUp(true);
            }else{
                setGoUp(false);
            }
        
        }

        window.addEventListener("scroll", onPageScroll);

        return () => {
            window.removeEventListener("scroll", onPageScroll);
        }

    }, [])



    return(
        <>
        <section id="home" className="hero-section">
            <div className="container">
                <div  className="hero-content">
                    <div className="hero-content__text">
                        <h4>Plan your trip now</h4>
                        <h1>
                            Experience huge <span>car</span> rental discounts
                        </h1>
                        <p>
                            Explore limitless possibilities with our dream-worthy car rentals, featuring unbeatable prices, unlimited miles, and flexible pick-up choices.
                        </p>
                        <div className="hero-content__text__btns">
                            <Link className="hero-content__text__btns__book-ride" to="/">
                                Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                            </Link>
                            <Link className="hero-content__text__btns__learn-more" to="/">
                                Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                            </Link>
                        </div>
                    </div>

                    <img src={car} alt="car-img" className="hero-content__car-img"/>
                </div>
            </div>

            <div onClick={scrollToTop} className={'scroll-up ${goUp ? "show-scroll" : ""}'}>
            <i className="fa-solid fa-angle-up"></i>
            </div>
        </section>
        </>
    )

}

export default Home;