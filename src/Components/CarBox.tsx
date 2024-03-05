import { useState } from "react";

// Define the Car interface with specific properties
interface Car {
    name: string;
    img: string;
    price: string;
    model: string;
    year: string;
    transmission: string;
    fuel: string;
}

// Define the props interface for CarBox component
interface CarBoxProps {
    data: Car[];
    carID: number;
}

const CarBox = ({ data, carID }: CarBoxProps) => {
    const [carLoad, setCarLoad] = useState(true);

    return (
        <>
            {/* Check if data at the specified carID exists */}
            {data[carID] && (
                <div key={carID} className="box-cars">
                    <div className="pick-car">
                        {carLoad && <span className="loader"></span>}
                        <img
                            style={{ display: carLoad ? 'none' : 'block' }}
                            src={data[carID].img}
                            alt="car_img"
                            onLoad={() => setCarLoad(false)}
                        />
                    </div>

                    <div className="pick-description">
                        <div className="pick-description__price">
                            <span>{data[carID].price}</span>/ rent per day
                        </div>
                        <div className="pick-description__table">
                            <div className="pick-description__table__col">
                                <span>Model</span>
                                <span>{data[carID].model}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Year</span>
                                <span>{data[carID].year}</span>
                            </div>
                        
                            <div className="pick-description__table__col">
                                <span>Transmission</span>
                                <span>{data[carID].transmission}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Fuel</span>
                                <span>{data[carID].fuel}</span>
                            </div>
                        </div>
                        <a className="btn" href="#booking-section">Reserve Now</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default CarBox;
