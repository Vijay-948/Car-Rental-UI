import Img1 from '../Assests/CarModels/volvo.jpg';
import Img2 from '../Assests/CarModels/volksWagen1.png';
import Img3 from '../Assests/CarModels/Jaguar.jpg'
import Img4 from '../Assests/CarModels/Bmw5.png';
import Img5 from '../Assests/CarModels/Fortuner.png';
import Img6 from '../Assests/CarModels/MahindraThar.png';
import Img7 from '../Assests/CarModels/Hyundai.png';
import Img8 from '../Assests/CarModels/Jeep.png';
import Img9 from '../Assests/CarModels/Honda.png';
import Img10 from '../Assests/CarModels/innova.png';



interface Car{
    name: string;
    img: string;
    price: string;
    model: string;
    year: string;
    transmission: string;
    fuel: string;
}


export const CarData: Car[]  = [
    
        {
            name: "Volvo",
            price: "5000",
            img:  Img1,
            model: "Volvo XC90",
            year: "2010",
            transmission: "manual",
            fuel: "Diesel",
            
        },
    
    
        {
            name: "Volkswagen",
            price: "1500",
            img:  Img2,
            model: "Polo GT",
            year: "2017",
            transmission: "manual",
            fuel: "Diesel",
            
        },
    

        {
            name: "BMW",
            price: "4000",
            img:  Img4,
            model: "BMW-5",
            year: "2010",
            transmission: "manual",
            fuel: "Diesel",
            
        },
    

        {
            name: "Jaguar",
            price: "4000",
            img:  Img3,
            model: "Jaguar XF",
            year: "2010",
            transmission: "manual",
            fuel: "Diesel",
            
        },
    
    
        {
            name: "Toyota Fortuner",
            price: "4000",
            img:  Img5,
            model: "Fortuner SW4",
            year: "2019",
            transmission: "manual",
            fuel: "Diesel",
            
        },
    
    
        {
            name: "Mahindra Thar",
            price: "4000",
            img:  Img6,
            model: "Thar Suv Lx",
            year: "2010",
            transmission: "manual",
            fuel: "Diesel",
            
        },
    
    
        {
            name: "Hyundai",
            price: "4000",
            img:  Img7,
            model: "Elantra",
            year: "2012",
            transmission: "manual",
            fuel: "Diesel",
            
        },
    
    
        {
            name: "Jeep",
            price: "4000",
            img:  Img8,
            model: "SUV",
            year: "2018",
            transmission: "manual",
            fuel: "Diesel",
            
        },
    
    
        {
            name: "Honda",
            price: "4000",
            img:  Img9,
            model: "Honda Amaze",
            year: "2010",
            transmission: "manual",
            fuel: "Diesel",
            
        },
    
    
        {
            name: "Toyota Innova",
            price: "4000",
            img:  Img10,
            model: "Crysta",
            year: "2010",
            transmission: "manual",
            fuel: "Diesel",
            
        }
    

]

// export const transformedCarData: Record<string, Car[]> = Object.fromEntries(
//     CarData.map((Car, index) => [index.toString(), Car])
//   );