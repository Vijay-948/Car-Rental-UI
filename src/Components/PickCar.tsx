import { useState } from "react"
import CarBox from "./CarBox"

const PickCar = () => {
    const [active, setActive] =  useState("FirstCar");
    const [colorBtn, setColorBtn] = useState("btn1");


    const btnID = (id: string) => {
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
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}

export default PickCar