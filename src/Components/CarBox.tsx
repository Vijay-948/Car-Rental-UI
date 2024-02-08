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
                <div key={carID}>
                    {/* Image section */}
                    <div>
                        {/* Display a loading span while the image is loading */}
                        {carLoad && <span></span>}
                        {/* Display the car image and trigger onLoad when it's loaded */}
                        <img
                            style={{ display: carLoad ? 'none' : 'block' }}
                            src={data[carID].img}
                            alt="car_img"
                            onLoad={() => setCarLoad(false)}
                        />
                    </div>

                    {/* Car information section */}
                    <div>
                        {/* Display the price */}
                        <div>
                            <span>{data[carID].price}</span>/ rent per day
                        </div>
                        {/* Display model and year */}
                        <div>
                            <div>
                                <span>Model</span>
                                <span>{data[carID].model}</span>
                            </div>
                            <div>
                                <span>Year</span>
                                <span>{data[carID].year}</span>
                            </div>
                        

                        {/* Transmission and Fuel section */}
                        
                            <div>
                                <span>Transmission</span>
                                <span>{data[carID].transmission}</span>
                            </div>
                            <div>
                                <span>Fuel</span>
                                <span>{data[carID].fuel}</span>
                            </div>
                        </div>

                        {/* Reservation link */}
                        <a href="#booking-section">Reserve Now</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default CarBox;
