import { useState } from "react";


interface Car{
    img: string;
    price: number;
    model: string;
    year: number;
    air: string;
    transmission: string;
    fuel: string;
}

interface CarBoxProps{
    data: Record<string, Car[]>;
    carID: string;
}
const CarBox = ({data, carID}: CarBoxProps) => {

    const [carLoad, setCarLoad] = useState(true);

    return(
        <>
        {data[carID].map((car: Car, id: number) => (
            <div>
                <div>
                    {carLoad && <span></span>}
                    <img
                      style={{display: carLoad ? 'none' : 'block'}}
                      src="{car.img}"
                      alt="car_img"
                      onLoad={()=> setCarLoad(false)}
                    />
                </div>

                <div>
                    <div>
                        <span>{car.price}</span>/ rent per day
                    </div>
                    <div>
                        <div>
                            <span>Model</span>
                            <span>{car.model}</span>
                        </div>

                        <div>
                            <span>Year</span>
                            <span>{car.year}</span>
                        </div>

                        <div>
                            <span>Air</span>
                            <span>{car.air}</span>
                        </div>

                        <div>
                            <span>Transmission</span>
                            <span>{car.transmission}</span>
                        </div>

                        <div>
                            <span>Fuel</span>
                            <span>{car.fuel}</span>
                        </div>
                    </div>

                    <a href="#booking-section">
                        Reserve Now
                    </a>
                   
                </div>
            </div>
        ))}
        </>

    );

}

export default CarBox;