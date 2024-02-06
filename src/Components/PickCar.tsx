import { useState } from "react"
import CarBox from "./CarBox"

import {CarData} from './CarData'

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

                        {active === "FirstCar" && <CarBox data={Car_Data} carID={0} />}
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default PickCar