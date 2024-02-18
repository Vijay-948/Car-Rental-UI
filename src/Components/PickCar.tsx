import { useState } from "react"
import CarBox from "./CarBox"

import { CarData } from './CarData'

import '../Styles/PickCar.css';

const PickCar = () => {
    const [active, setActive] =  useState("car_1");
    const [colorBtn, setColorBtn] = useState("btn1");


    const btnID = (id: any) => {
        setColorBtn(colorBtn === id ? "" : id);
    }

    const colorButton = (id: any) => {
        return colorBtn === id ? { backgroundColor: 'red', color: 'white'}: {};
    }


    return(
        <>
        <section className="pick-section">
            <div className="container">
                <div className="pick-container__title">
                    <div >
                        <h3>Vehicle Models</h3>
                        <h2>Our rental fleet</h2>
                        <p>Pick a fantastic vehicle from our selection for your next adventure or work trip. Our cars are well-kept and ready to make your journey smooth and enjoyable.</p>
                    </div>

                    <div className="pick-container__car-content">
                        <div className="pick-box">
                            <button 
                              className={`${colorButton("btn1")}`}
                              onClick={() =>{
                                  setActive("car_1");
                                  btnID("btn1");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={`${colorButton("btn2")}`}
                              id="btn2"
                              onClick={() =>{
                                  setActive("car_2");
                                  btnID("btn2");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={`${colorButton("btn3")}`}
                              id="btn3"
                              onClick={() =>{
                                  setActive("car_3");
                                  btnID("btn3");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={`${colorButton("btn4")}`}
                              id="btn4"
                              onClick={() =>{
                                  setActive("car_4");
                                  btnID("btn4");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={`${colorButton("btn5")}`}
                              id="btn5"
                              onClick={() =>{
                                  setActive("car_5");
                                  btnID("btn5");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={`${colorButton("btn6")}`}
                              id="btn6"
                              onClick={() =>{
                                  setActive("car_6");
                                  btnID("btn6");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={`${colorButton("btn7")}`}
                              id="btn7"
                              onClick={() =>{
                                  setActive("car_7");
                                  btnID("btn8");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={`${colorButton("btn8")}`}
                              id="btn8"
                              onClick={() =>{
                                  setActive("car_8");
                                  btnID("btn8");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={`${colorButton("btn9")}`}
                              id="btn9"
                              onClick={() =>{
                                  setActive("car_9");
                                  btnID("btn9");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={`${colorButton("btn10")}`}
                              id="btn10"
                              onClick={() =>{
                                  setActive("car_10");
                                  btnID("btn10");
                              }}
                            >
                                Volvo Suv  
                            </button>
                        </div>

                        {active === "car_1" && <CarBox data={CarData} carID={0} />}
                        {active === "car_2" && <CarBox data={CarData} carID={1} />}
                        {active === "car_3" && <CarBox data={CarData} carID={2} />}
                        {active === "car_4" && <CarBox data={CarData} carID={3} />}
                        {active === "car_5" && <CarBox data={CarData} carID={4} />}
                        {active === "car_6" && <CarBox data={CarData} carID={5} />}
                        {active === "car_7" && <CarBox data={CarData} carID={6} />}
                        {active === "car_8" && <CarBox data={CarData} carID={7} />}
                        {active === "car_9" && <CarBox data={CarData} carID={8} />}
                        {active === "car_10" && <CarBox data={CarData} carID={9} />}
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default PickCar