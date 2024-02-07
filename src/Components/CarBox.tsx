import { useState } from "react";

interface Car {
    name: string;
    img: string;
    price: string;
    model: string;
    year: string;
    transmission: string;
    fuel: string;
}

interface CarBoxProps {
    data: Car[];
    carID: number;
}

const CarBox = ({ data, carID }: CarBoxProps) => {
    const [carLoad, setCarLoad] = useState(true);

    return (
        <>
            {data[carID] && (
                <div key={carID}>
                    <div>
                        {carLoad && <span></span>}
                        <img
                            style={{ display: carLoad ? 'none' : 'block' }}
                            src={data[carID].img}
                            alt="car_img"
                            onLoad={() => setCarLoad(false)}
                        />
                    </div>

                    <div>
                        <div>
                            <span>{data[carID].price}</span>/ rent per day
                        </div>
                        <div>
                            <div>
                                <span>Model</span>
                                <span>{data[carID].model}</span>
                            </div>

                            <div>
                                <span>Year</span>
                                <span>{data[carID].year}</span>
                            </div>

                            {/* <div>
                                {/* Assuming 'air' property is part of your Car type 
                                <span>Air</span>
                                <span>{data[carID].air}</span>
                            </div> */}

                            <div>
                                <span>Transmission</span>
                                <span>{data[carID].transmission}</span>
                            </div>

                            <div>
                                <span>Fuel</span>
                                <span>{data[carID].fuel}</span>
                            </div>
                        </div>

                        <a href="#booking-section">Reserve Now</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default CarBox;
