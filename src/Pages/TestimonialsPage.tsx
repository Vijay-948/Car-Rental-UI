import Testimonials from "../Components/Testmonials";

function TestimonialsPage() {
    return(
        <>
        <section className="testmonials-page">
            <Testimonials />

            <div className="book-banner">
                <div className="book-banner__overlay">
                    <div className="container">
                        <div className="text-content">
                            <h2>Book a  car by getting in touch with us</h2>
                            <span>
                                <i className="fa-solid fa-phone"></i>
                                <h3>+91 1234567890</h3>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default TestimonialsPage;