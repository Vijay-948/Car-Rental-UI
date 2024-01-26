

function Faq(){
    return(
        <>
        <section className="faq-section">
            <div className="container">
                <div className="faq-content">
                    <div className="faq-content__title">
                        <h1>FAQ</h1>
                        <h3>Frequently Asked Question</h3>
                        <p>
                             Visit our FAQ section for quick answers and insights into the car rental process, making your booking experience hassle-free.
                        </p>
                    </div>

                    <div className="all-questions">
                        <div className="faq-box">
                            <div>
                                <p>1. OPERATIONS</p>  
                                <i className="fa-solid fa-angle-down"></i>  
                            </div>
                            <div>
                                <strong>WHAT DOCUMENTS DO I NEED TO PRODUCE WHILE PICKING UP A SELF DRIVE CAR?</strong>
                                <p>
                                You need to produce the KYC Documents comprising photo identity, an address proof (such as original Passport/Aadhar card) and a valid Driving License. A Copy of each needs to be submitted while picking up the car.
                                </p>
                                <strong>WHEN DOES MY BOOKING START?</strong>
                                <p>The booking start time will be the same as selected by you at the time of making the booking</p>
                                <strong>WHAT IS THE ELIGIBILITY TO HIRE A SELF DRIVE CAR?</strong>
                                <p>
                                    The Hirer intending to enter into this Agreement and rent the vehicle on self-drive basis should have completed 21 years of age,
                                     shall having a driving experience of a minimum 1 year LMV, and shall submit a valid & Original driving license, PAN Card & Aadhar Card. write in another sentence
                                </p>
                                <strong>WHAT TYPE OF CARS DOES MODELS OFFER</strong>
                                <p>
                                    We offer BMW / Volvo / Toyto Fortuner / Mahindra Thar / Jeep / ,...., (Refer website for furhter detauls)
                                </p>
                                <strong>What is the minimum time one can rent the car for</strong>
                                <p>
                                    You can hire it for a minimum of 24 hour.
                                </p>
                            </div>
                        </div>

                        <div className="faq-box">
                            <div>
                                <p>2. Payment & Incidents</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            <div>
                                <strong>What Mode of Payments are accepted?</strong>
                                <p>
                                We accept payments through credit cards (Visa/MasterCard) and net banking for all transactions. Rental payments are to be made in advance through our website or mobile app. It's important to note that the Security Deposit should be paid before taking delivery of the vehicle. We do not accept cash as a mode of payment.
                                <ul>
                                    <li>PhonePay</li>
                                    <li>Google Pay</li>
                                    <li>Paytm</li>
                                </ul>
                                </p>

                                <strong>Are there any taxes on the rental amount?</strong>
                                <p>Yes, GST will be applicable as per the state laws.</p>

                                <strong>What happens in case of a break down?</strong>
                                <p>
                                    Request you to immediatelynotify us by calling on out helpline umber +91 1234567890 or by sending us an email on carrental@gmial.com.
                                     Our 24X7 experoenced technical team will assist you in case of break down and provide a replacement, if need.
                                </p>
                                <strong>What happens in case of a damage</strong>
                                <p>
                                    Security deposit covers damages up to INR 6,000; exceeding this,
                                    Hirer bears expenses through insurance. INR 6,000 cap void if terms violated. Rental company's damage assessment is final.
                                </p>
                            </div>
                        </div>
                        <div className="faq-box">
                            <div>
                                 <p>LEGAL</p>
                                <i className="fa-solid fa-angle-down"></i>

                            </div>
                        
                            <div>
                                <strong>What is the insurance Cover?</strong>
                                <p>
                                    Damage costs up to INR 6,000/- is to be paid by Hirer. 
                                    In case the damage is more than INR 6,000, an insurance claim will be filed. 
                                    The amount of depreciation and parts which are not covered under insurance will be borne by the Hirer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default Faq;