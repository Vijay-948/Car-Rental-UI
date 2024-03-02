import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import CarModels from "./Pages/CarModels";
import Testimonials from "./Components/Testimonials";
import Contact from "./Pages/Contact";
import TestimonialsPage from "./Pages/TestimonialsPage";




function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route index path="/" element={<HomePage/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="models" element={<CarModels/>}/>
      <Route path="testimonials" element={<Testimonials/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
   

    </>
  );
}

export default App;
