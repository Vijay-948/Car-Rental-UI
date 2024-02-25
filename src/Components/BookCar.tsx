import { eventNames } from "process";
import { SetStateAction, useEffect, useState } from "react";
import React, {MouseEvent} from 'react';
import Volvo from '../Assests/CarModels/volvo.jpg';
import BMW from '../Assests/CarModels/Bmw5.png';
import VolksWagen from '../Assests/CarModels/volksWagen1.png';
import Jaguar from '../Assests/CarModels/Jaguar.jpg';
import Hyundai from '../Assests/CarModels/Hyundai.png';
import Jeep from '../Assests/CarModels/Jeep.png';
import MahindraThar from '../Assests/CarModels/MahindraThar.png';
import Honda from '../Assests/CarModels/Honda.png';
import Innova from '../Assests/CarModels/innova.png';
import ToyotaFortuner from '../Assests/CarModels/Fortuner.png'
import '../Styles/BookCar.css';




const BookCar = () => {

    const [modal, setModal] = useState(false);

    const [carType, setCarType] = useState("");
    const [pickUp, setPickUp]  = useState("");
    const [dropOff, setDropOff] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [carImg, setCarImg] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");

    const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setFirstName(event.target.value);
    }

    const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setLastName(event.target.value);
    }

    const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    }

    const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event?.target.value);
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event?.target.value);
    }

    const handleAddress = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAddress(event.target.value);
    }

    const handleCity = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setCity(event.target.value);
    }

    const handleZipCode = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setZipCode(event.target.value);
    }


    const openModal = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) =>{
        event.preventDefault();

        const errorMsg = document.querySelector(".error-message") as HTMLElement;

        if(carType === "" || pickUp === "" || dropOff === "" || startDate === "" || endDate === ""){
            errorMsg.style.display = "flex";
        }else{
            setModal(!modal);
            const modalDiv = document.querySelector(".booking-modal");
            modalDiv?.scroll(0, 0);
            errorMsg.style.display = "none";
        }
    }

    useEffect(()=>{
        if(modal === true){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
    }, [modal]);

    const confirmBooking = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        setModal(!modal);
        const doneMsg = document.querySelector(".booking-done") as HTMLElement;
        //doneMsg.style.display="flex";
        if(doneMsg){
            doneMsg.style.display="flex";
        }
        //     console.log("element not found");
        // }
    }

    const handleCar = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCarType(event.target.value);
        setCarImg(event.target.value);
    }

    const handlePick = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setPickUp(event.target.value);

    }

    const handleDrop = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDropOff(event.target.value);
    }
    const handleStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);

    }

    const handleSetEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    }

    let imgUrl: string;

    if(carImg === "Volvo XC90"){
        imgUrl = Volvo;
    }else if(carImg === "VolksWagen Polo GT"){
        imgUrl = VolksWagen;
    }else if(carImg === "BMW-5"){
        imgUrl = BMW;
    }else if(carImg === "Jaguar XF"){
        imgUrl = Jaguar;
    }else if(carImg === "Toyota Fortuner SW4"){
        imgUrl = ToyotaFortuner;
    }else if(carImg === "Mahindra Thar SUV LX"){
        imgUrl = MahindraThar;
    }else if(carImg === "Hyundai Elantra"){
        imgUrl = Hyundai;
    }else if(carImg === "Jeep"){
        imgUrl = Jeep;
    }else if(carImg === "Honda Amaze"){
        imgUrl = Honda;
    }else if(carImg === "Toyota Innova Crysta"){
        imgUrl = Innova;
    }else{
        imgUrl = "";
    }

    const hideMessage = () => {
        const doneMsg = document.querySelector(".booking-done") as HTMLElement;
        if(doneMsg != null){
            doneMsg.style.display = "none"
        }
        
    }

    return (
        <>
        <section id="booking-section" className="book-section">
            <div onClick={openModal}
                className={`modal-overlay ${modal ? "active-modal" : ""}`}>
            </div>

            <div className="container">
                <div className="book-content">
                    <div className="book-content__box">
                        <h2>Book a Car</h2>

                        <p className="error-message">
                            All fields required! <i className="fa-solid fa-xmark"></i>
                        </p>

                        <p className="booking-done">
                            Check your email to confirm an order.{" "}
                            <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
                        </p>

                    <form className="box-form">
                        <div className="box-form__car-type">
                            <label>
                                <i className="fa-solid fa-car"></i> &nbsp;Select Your Car Type <b>*</b>
                            </label>
                            <select value={carType} onChange={handleCar}>
                                <option>Select Your Car Model</option>
                                <option value="Volvo XC90">Volvo XC90</option>
                                <option value="VolksWagen Polo GT">VolksWagen Polo GT</option>
                                <option value="BMW-5">BMW-5</option>
                                <option value="Jaguar XF">Jaguar XF</option>
                                <option value="Toyota Fortuner SW4">Toyota Fortuner SW4</option>
                                <option value="Mahindra Thar SUV LX">Mahindra Thar SUV LX</option>
                                <option value="Hyundai Elantra">Hyundai Elantra</option>
                                <option value="Honda Amaze">Honda Amaze</option>
                                <option value="Jeep">Jeep</option>
                                <option value="Toyota Innova Crysta">Toyota Innova Crysta</option>
                            </select>
                        </div>

                        <div className="box-form__car-type">
                            <label>
                                Pick-up<b>*</b>
                            </label>
                            <select value={pickUp} onChange={handlePick}>
                                <option>Select Pick Up Loaction</option>
                                <option>Gachbowli, Hyderbad, Telegana</option>
                                <option>KPHB, Hyderbad, Telegana</option>
                                <option>Greater Noida, Uttar Pradesh</option>
                                <option>Marathalli, Bengaluru, Karnataka</option>
                                <option>Thirukumarapuram, Arumbakkam, Chennai</option>
                            </select>
                        </div>

                        <div className="box-form__car-type">
                            <label>
                                Drop-of<b>*</b>
                            </label>
                            <select value={dropOff} onChange={handleDrop}>
                                <option>Select Drop Off Location</option>
                                <option>Gachbowli, Hyderbad, Telegana</option>
                                <option>KPHB, Hyderbad, Telegana</option>
                                <option>Greater Noida, Uttar Pradesh</option>
                                <option>Marathalli, Bengaluru, Karnataka</option>
                                <option>Thirukumarapuram, Arumbakkam, Chennai</option>
                            </select>
                        </div>

                        <div className="box-form__car-time">
                            <label>
                                Start-Date
                            </label>
                            <input id="picktime"
                            value={startDate}
                            onChange={handleStartDate}
                            type="date"></input>
                        </div>

                        <div className="box-form__car-time">
                            <label>
                                End Date
                            </label>
                            <input
                            id="droptime"
                            value={endDate}
                            onChange={handleSetEndDate}
                            type="date"></input>
                        </div>

                        <button onClick={openModal} type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </div>
        </section>



        <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
            <div className="booking-modal__title">
                <h2>Complete Reservation Form</h2>
                <i onClick={openModal} className="fa-solid fa-xmark"></i>
            </div>

            <div className="booking-modal__message">
                <h4>
                    <i className="fa-solid fa-circle-info"></i>
                    Upon completing this reservation enquiry, you will receive a confirmation email with the details of your booking and further instructions.
                </h4>
                <p>
                Upon completing your reservation, receive a rental voucher and toll-free support number for assistance on arrival.
                </p>
            </div>

            <div className="booking-modal__car-info">
                <div className="dates-div">
                    <div className="booking-modal__car-info__dates">
                        <h5>Location & Date</h5>
                        <span>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <h6>Pick-up Date & Time</h6>
                                <p>
                                    {startDate} /{" "}
                                    <input type="time" className="input-time"></input>
                                </p>
                            </div>
                        </span>
                    </div>

                    <div className="booking-modal__car-info__dates">
                        <span>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <h6>End Date & Time</h6>
                                <p>
                                    {endDate} / {" "}
                                    <input type="time" className="input-time"></input>
                                </p>
                            </div>
                        </span>
                    </div>

                    <div className="booking-modal__car-info__dates">
                        <span>
                            <i className="fa-solid fa-calendar-days"></i>
                            <div>
                                <h6>Pick-Up Location</h6>
                                <p>{pickUp}</p>
                            </div>
                        </span>
                    </div>

                    <div className="booking-modal__car-info__dates">
                        <span>
                            <i className="fa-solid fa-calendar-days"></i>
                            <div>
                                <h6>Drop-Off Location</h6>
                                <p>{dropOff}</p>
                            </div>
                        </span>
                    </div>
                </div>

                <div className="booking-modal__car-info__model">
                    <h5>
                        <span>Car Model You Slelected -</span>{carType}
                    </h5>

                    {imgUrl && <img src={imgUrl} alt="car_img" />}
                </div>
            </div>

            <div className="booking-modal__person-info">
                <h4>Personal Information</h4>
                <form className="info-form">
                    <div className="info-form__2col">
                        <span>
                            <label>
                                First Name <b>*</b>
                            </label>
                            <input 
                            value={firstName}
                            onChange={handleFirstName}
                            type="text"
                            placeholder="Enter your first name"
                            ></input>
                            <p className="error-modal">This field is required.</p>
                        </span>

                        <span>
                            <label>
                                Last Name <b>*</b>
                            </label>
                            <input
                            value={lastName}
                            onChange={handleLastName}
                            type="text"
                            placeholder="Enter your last name"
                            ></input>
                            <p className="error-modal">This field is required.</p>
                        </span>

                        <span>
                            <label>
                                Phone Number <b>*</b>
                            </label>
                            <input
                            value={phone}
                            onChange={handlePhone}
                            type="tel"
                            placeholder="Enter your phone number"
                            ></input>
                            <p className="error-modal">This field is required.</p>
                        </span>

                        <span>
                            <label>
                                Age <b>*</b>
                            </label>
                            <input
                            value={age}
                            onChange={handleAge}
                            type="number"
                            placeholder="example: 20"
                            ></input>
                            <p className="error-modal">This field is required.</p>
                        </span>
                    </div>

                    <div className="info-form__1col">
                        <span>
                            <label>
                                Email <b>*</b>
                            </label>
                            <input
                            value={email}
                            onChange={handleEmail}
                            type="email"
                            placeholder="example@gmail.com"
                            ></input>
                            <p className="error-modal">This field is required.</p>
                        </span>

                        <span>
                            <label>
                                Address <b>*</b>
                            </label>
                            <input
                            value={address}
                            onChange={handleAddress}
                            type="text"
                            placeholder="Type your permanent address"
                            ></input>
                            <p className="error-modal">This field is required.</p>
                        </span>
                    </div>
                    <div className="info-form__2col">
                        <span>
                            <label>
                                City <b>*</b>
                            </label>
                            <input
                            value={city}
                            onChange={handleCity}
                            type="text"
                            placeholder="Enter your city"
                            ></input>
                            <p className="error-modal">This field is required.</p>
                        </span>

                        <span>
                            <label>
                                Zip Code <b>*</b>
                            </label>
                            <input
                            value={zipCode}
                            onChange={handleZipCode}
                            type="text"
                            placeholder="Enter your zip code"
                            ></input>
                            <p className="error-modal">This field is required.</p>
                        </span>
                    </div>

                    <span className="info-form__checkbox">
                        <input type="checkbox"></input>
                        <p>Please send me latest news and updates</p>
                    </span>

                    <div className="reserve-button">
                        <button onClick={confirmBooking}>Book Now</button>
                    </div>
                </form>
            </div>
        </div>

        </>
    )


}


export default BookCar;