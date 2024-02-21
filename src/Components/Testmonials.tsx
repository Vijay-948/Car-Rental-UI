import '../Styles/Testimonials.css';

function Testimonials() {
    return (
        <>
          <section className="testmonials-section">
            <div className="container">
                <div className="testmonials-content">
                    <div className="testmonials-content__title">
                        <h4>Reviewed by People</h4>
                        <h2>Client's Testmonials</h2>
                        <p> 
                        Discover the positive impact we've made on the our clients by
                        reading through their testimonials. Our clients have experienced
                        our service and results, and they're eager to share their
                        positive experiences with you.
                        </p>
                    </div>

                    <div className="all-testmonials">
                        <div className="all-testmonials__box">
                            <span className="quotes-icon">
                                <i className="fa-solid fa-qupte-right"></i>
                            </span>
                            <p>
                            "Renting a car from this website was fantastic! The process was so easy, and the rates were very reasonable. I had a smooth experience overall.""  
                            </p>
                            <div className="all-testmonials__box__name">
                                <div className="all-testmonials__box__name__profile">
                                    <img alt="user_img" />
                                    <span>
                                        <h4>Vijay</h4>
                                        <p>Bangalore</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="all-testmonials__box box-2">
                            <span className="quotes-icon">
                                <i className="fa-solid fa-quote-right"></i>
                            </span>
                            <p>
                            "Our car rental experience was top-notch! Booking online was quick, and the rental rates were budget-friendly. Everything went smoothly during our trip."
                            </p>
                            <div className="all-testmonials__box__name">
                                <div className="all-testmonials__box__name__profile">
                                    <img alt="user_img" />
                                    <span>
                                        <h4>Karan</h4>
                                        <p>Hyderbad</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="all-testmonials__box box-3">
                            <span className="quotes-icon">
                                <i className="fa-solid fa-quote-right"></i>
                            </span>
                            <p>
                            "Highly satisfied with my car rental! The website made it easy to book, and the prices were very competitive. I'll be using this service again for sure."
                            </p>
                            <div className="all-testmonials__box__name">
                                <div className="all-testmonials__box__name__profile">
                                    <img alt="user-img" />
                                    <span>
                                        <h4>David</h4>
                                        <p>Hyderbad</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="all-testmonials__box box-4">
                            <span className="quotes-icon">
                                <i className="fa-solid fa-quote-right"></i>
                            </span>
                            <p>
                            "Had a great time renting a car here! The booking was a breeze, and the prices were affordable. Would definitely recommend to others."
                            </p>
                            <div className="all-testmonials__box__name">
                                <div className="all-testmonials__box__name__profile">
                                    <img alt="user-img" />
                                    <span>
                                        <h4>Rahul</h4>
                                        <p>Delhi</p>
                                    </span>
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

export default Testimonials