import { eventNames } from "process";
import { SetStateAction, useEffect, useState } from "react";
import React, {MouseEvent} from 'react';


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

    const handlesetPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    }

    const handlesetAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event?.target.value);
    }

    const handlesetEmail = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event?.target.value);
    }

    const handleSetAddress = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAddress(event.target.value);
    }

    const handleSetCity = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setCity(event.target.value);
    }

    const handleSetZipCode = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setZipCode(event.target.value);
    }


    const openModal = (event: MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();

        const errorMsg = document.querySelector(".errorMessage") as HTMLElement;

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
    })



}


export default BookCar;