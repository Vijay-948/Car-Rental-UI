import selectCar from '../Assests/PlanTrip/selectCar.png';
import Contact from '../Assests/PlanTrip/conactOperator.png';
import Drive from '../Assests/PlanTrip/DriveCar.png';
import './PlanTrip.css';


const PlanTrip = () => {
    return(
        <>
        <section className="plan-section">
            <div className="container">
                <div className="plan-contanier">
                    <div className="plan-container__title">
                        <h3>Quick & easy car rental</h3>    
                        <h2>Start your adventure planning today</h2>
                        
                    </div>

                    <div className="plan-container__boxes">
                        <div className="plan-container__boxes__box">
                            <img className='img1' src={selectCar} alt='icon_img'/>
                            <h3>Select Car</h3>
                            <p>
                            Discover solo or with loved ones. Our fleet ensures comfort and joy for every journey, offering the perfect car for you.
                            </p>
                        </div>

                        <div className="plan-container__boxes__box">
                            <img className='img2' src={Contact} alt='icon_img' />
                            <h3>Contact Operator</h3>
                            <p>
                            Our knowledgeable and friendly  operators are ready to assist with questions, ensuring a stress-free rental experience for a smooth and worry-free process.
                            </p>
                        </div>

                        <div className="plan-container__boxes__box">
                            <img className='img3' src={Drive} alt='icon_img' />
                            <h3>Let's Drive</h3>
                            <p>
                            Explore scenic drives or city streets with our diverse cars, catering to every travel preference for a seamless journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default PlanTrip