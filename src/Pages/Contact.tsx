import Footer from '../Components/Footer';
import '../Styles/Contact.css';

function Contact(){
    return(
        <>
          <section className="contact-page">
            <div className="container">
                <div className="contact-div">
                    <div className="contact-div__text">
                        <h2>Need additional Information?</h2>
                        <p>
                            I'm a well-rounded professional who's skilled in research, development, and learning. With over 10 years of experience,
                            I bring a wealth of expertise to the table.
                        </p>
                        <a href='tel:+1234567890'>
                            <i className="fa-solid fa-phone"></i>&nbsp; 123456789

                        </a>
                        <a href="mailto:rentalcar124@gmail.com">
                            <i className="fa-solid fa-envelope"></i>&nbsp; rentalcar124@gmail.com
                        </a>
                        <a href="https://carrental.com/hyderabad, https://carrental.com/hyderabad">
                            <i className="fa-solid fa-location-dot"></i>&nbsp; Bangalore, Hyderbad
                        </a>
                    </div>

                    <div className="contact-div__form">
                        <form>
                            <label>
                                Full Name <b>*</b>
                            </label>
                            <input type="text" placeholder="Vijay"></input>

                            <label>
                                Email <b>*</b>
                            </label>
                            <input type="email" placeholder="example@gmail.com"></input>

                            <label>
                                Tell us about it <b>*</b>
                            </label>
                            <textarea placeholder="Write Something Here..."></textarea>

                            <button type="submit">
                                <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="book-banner">
                <div className="book-banner__overlay"></div>
                <div className="container">
                    <div className="text-content">
                        <h2>Book a car by getting in touch with us</h2>
                        <span>
                            {/* <i className="fa-solid fa-phone"></i> */}
                            <h3>+91 1234567890</h3>
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
          </section>
        </>
    );

}

export default Contact;