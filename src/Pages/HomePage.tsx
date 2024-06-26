import Banner from "../Components/Banner";
import BookCar from "../Components/BookCar";
import ChooseUs from "../Components/ChooseUs";
// import Download from "../Components/Download";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
// import Navbar from "../Components/Navbar";
import PickCar from "../Components/PickCar";
import PlanTrip from "../Components/PlanTrip";
import Testimonials from "../Components/Testimonials";
// import About from "./About"
// import CarModels from "./CarModels"
// import Contact from "./Contact";

const HomePage = () => {
  return (
    <>
      <Home />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Faq />
      <Testimonials />
      {/* <Download /> */}
      <Footer />
    </>
  );
};

export default HomePage;
