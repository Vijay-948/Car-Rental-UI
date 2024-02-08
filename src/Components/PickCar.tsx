import { useState } from "react"
import CarBox from "./CarBox"

import { CarData } from './CarData'

const PickCar = () => {
    const [active, setActive] =  useState("FirstCar");
    const [colorBtn, setColorBtn] = useState("btn1");


    const btnID = (id: any) => {
        setColorBtn(colorBtn === id ? "" : id);
    }

    const colorButton = (id: any) => {
        return colorBtn === id ? { backgroundColor: 'red', color: 'white'}: {};
    }


    return(
        <>
        <section>
            <div>
                <div>
                    <div>
                        <h3>Vehicle Models</h3>
                        <h2>Our rental fleet</h2>
                        <p>Pick a fantastic vehicle from our selection for your next adventure or work trip. Our cars are well-kept and ready to make your journey smooth and enjoyable.</p>
                    </div>

                    <div>
                        <div>
                            <button 
                              className={'dfdaf'}
                              onClick={() =>{
                                  setActive("");
                                  btnID("btn1");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={'dfdaf'}
                              onClick={() =>{
                                  setActive("");
                                  btnID("btn1");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={'dfdaf'}
                              onClick={() =>{
                                  setActive("");
                                  btnID("btn1");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={'dfdaf'}
                              onClick={() =>{
                                  setActive("");
                                  btnID("btn1");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={'dfdaf'}
                              onClick={() =>{
                                  setActive("");
                                  btnID("btn1");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={'dfdaf'}
                              onClick={() =>{
                                  setActive("");
                                  btnID("btn1");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={'dfdaf'}
                              onClick={() =>{
                                  setActive("");
                                  btnID("btn1");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={'dfdaf'}
                              onClick={() =>{
                                  setActive("");
                                  btnID("btn1");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={'dfdaf'}
                              onClick={() =>{
                                  setActive("");
                                  btnID("btn1");
                              }}
                            >
                                Volvo Suv  
                            </button>
                            <button 
                              className={'dfdaf'}
                              onClick={() =>{
                                  setActive("");
                                  btnID("btn1");
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