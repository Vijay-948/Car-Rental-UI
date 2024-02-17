

import '../Styles/Footer.css'

function Footer() {
    return (
        <>
        <footer>
            <div className="container">
                <div className="footer-content">
                    <ul className="footer-content__1">
                        <li>
                            <span>CAR</span> Rental
                        </li>
                        <li>
                            Explore our extensive range of vehicles designed to cater to all your driving requirements. 
                            Find the perfect car that suits your needs and ensures a comfortable and enjoyable journey.
                        </li>
                        <li>
                            <a href="tel:1234567">
                                <i className="fa-solid fa-phone"></i> &nbsp; +91 1234567890
                            </a>
                        </li>

                        <li>
                            <a href="mailto:rentalcar@gmail.com">
                                <i className="fa-solid fa-envelope"></i>
                                &nbsp; kvijayreddy948@gmail.com
                            </a>
                        </li>

                        <li>
                           <a target="_blank" rel="noreferrer" href="https://jephunneh.com/">
                            &copy; Design by Vijay Reddy
                           </a>
                        </li>
                    </ul>

                    <ul className="footer-content__2">
                        <li>Company</li>
                        <li>
                            <a href="#home">Hyderbad</a>
                        </li>
                        <li>
                            <a href="#home">Carrers</a>
                        </li>
                        <li>
                            <a href="#home">Mobile</a>
                        </li>
                        <li>
                            <a href="#home">Blog</a>
                        </li>
                        <li>
                            <a href="#home">How we Work</a>
                        </li>
                    </ul>

                    <ul className="footer-content__2">
                        <li>Working Hours</li>
                        <li>Mon - Sun 24/7</li>
                        
                    </ul>

                    <ul className="footer-content__2">
                        <li>Subscription</li>
                        <li>
                            <p>Subscribe your Email address for latest news & updates.</p>
                        </li>
                        <li>
                            <input type="email" placeholder="Enter Email Address"></input>
                        </li>
                        <li>
                            <button className="submit-email">Submit</button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )

}

export default Footer;