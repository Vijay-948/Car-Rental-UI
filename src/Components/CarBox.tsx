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

// CarBox component
const CarBox = ({ data, carID }: CarBoxProps) => {
    // State to track whether the car image is loaded
    const [carLoad, setCarLoad] = useState(true);

    return (
        <>
            {/* Check if data at the specified carID exists */}
            {data[carID] && (
                <div key={carID} className="box-cars">
                    {/* Image section */}
                    <div className="pick-car">
                        {/* Display a loading span while the image is loading */}
                        {carLoad && <span className="loader"></span>}
                        {/* Display the car image and trigger onLoad when it's loaded */}
                        <img
                            style={{ display: carLoad ? 'none' : 'block' }}
                            src={data[carID].img}
                            alt="car_img"
                            onLoad={() => setCarLoad(false)}
                        />
                    </div>

                    {/* Car information section */}
                    <div className="pick-description">
                        {/* Display the price */}
                        <div className="pick-description__price">
                            <span>{data[carID].price}</span>/ rent per day
                        </div>
                        {/* Display model and year */}
                        <div className="pick-description__table">
                            <div className="pick-description__table__col">
                                <span>Model</span>
                                <span>{data[carID].model}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Year</span>
                                <span>{data[carID].year}</span>
                            </div>
                        

                        {/* Transmission and Fuel section */}
                        
                            <div className="pick-description__table__col">
                                <span>Transmission</span>
                                <span>{data[carID].transmission}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Fuel</span>
                                <span>{data[carID].fuel}</span>
                            </div>
                        </div>

                        {/* Reservation link */}
                        <a className="btn" href="#booking-section">Reserve Now</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default CarBox;
