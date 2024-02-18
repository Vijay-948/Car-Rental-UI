import Img1 from '../Assests/Download/appstore.svg';
import Img2 from '../Assests/Download/googleapp.svg';

import '../Styles/Download.css';
const Download = () => {
    return(
        <>
        <section className="download-section">
            <div className="container">
                <div className="download-text">
                    <h2>Unlock exclusive features and enjoy a seamless user experience by downloading our app today.</h2>
                    <p>
                    Embarking on a journey of self-discovery, one may find solace in the harmony of introspection and the melody of personal growth.
                    </p>

                    <div className="download-text__btns">
                        <img alt="download-img" src={Img1} />
                        <img alt='download-img' src={Img2} />
                    </div>

                </div>
            </div>
        </section>
         
        </>
    )

}

export default Download;

