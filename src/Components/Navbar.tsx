import { useState } from "react"
import { Link } from "react-router-dom";

import Logo from "../Assests/Logo/Vehicle Logo.png"

const Navbar = () => {
    const [nav, setNav] = useState(false);


    const handleNav = () => {
        setNav(!nav);
    }

    return(
        <>
        <nav>
            <div>
                <div>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <ul className="mobile-navbar__links">
                    <li>
                        <Link onClick={handleNav} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to="/models">
                            Models
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to="/testimonials">
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <div>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <img src={Logo} alt="Vehicle-log" />
                    </Link> 
                </div>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/mdoels">
                            Vehicle Models
                        </Link>
                    </li>
                    <li>
                        <Link to="/testimonials">
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div>
                    <Link to="/">
                        Register
                    </Link>
                </div>

                
            </div>



        </nav>
        </>

    );
}

export default Navbar;