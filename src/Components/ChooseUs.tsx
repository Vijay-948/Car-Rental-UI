import Img1 from '../Assests/ChooseUs/AllCars.png';
import Img2 from '../Assests/ChooseUs/CarLoc.jpg';
import Img3 from '../Assests/ChooseUs/rupee.png';
import Img4 from '../Assests/ChooseUs/Nocharges.png'

const ChooseUs = () =>{
   return(
    <>
    <section className="choose-section">
        <div className="container">
            <div className="choose-container">
                <img className='choose-container__img' src={Img1} alt='cars-img' />
                <div className="text-container">
                    <div className="text-container__left">
                        <h4>Why Choose Us</h4>
                        <h2>
                            Unbeatable deals, top-quality products: unmatched value you won't find elsewhere.
                        </h2>
                        <p>
                            Unlock unparalleled value with our unbeatable deals, ensuring premium services at budget-friendly prices.
                            Don't miss the chance for an exceptional renting experience that maximizes savings. Elevate your lifestyle without breaking the bank.
                        </p>
                        <a href='#home'>Find Details &nbsp;
                        <i className='fa-solid fa-anlge-right'></i>
                        </a>
                    </div>
                    <div className="text-container__right">
                        <div className="text-container__right__box">
                            <img src={Img2} alt='car-Img'/>
                            <div className="text-container__right__box__text">
                                <h4>Cross Country Drive</h4>
                                <p>
                                    Take your driving experience to the next level with our
                                    top-notch vehicles for your cross-country adventures.
                                </p>
                            </div>
                        </div>

                        <div className="text-container__right__box">
                            <img src={Img3} alt='coin-Img' />
                            <div className="text-container__right__box__text">
                                <h4>All Inclusive Pricing</h4>
                                <p>
                                    Get everything you need in one convenient, transparent
                                    price with our all-inclusive pricing policy.
                                </p>
                            </div>
                        </div>

                        <div className="text-container__right__box">
                            <img src={Img4} alt='coin-img'/>
                            <div className="text-container__right__box__text">
                                <h4>No Hidden Charges</h4>
                                <p>
                                    Enjoy peace of mind with our no hidden charges policy. We
                                    believe in transparent and honest pricing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
   )

}

export default ChooseUs;