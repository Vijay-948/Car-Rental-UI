import { useEffect, useState } from 'react';
import data from './TestimonilasData';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';

interface Person {
    id: number;
    image: string;
    name: string;
    quote: string;
}

const Testimonials = () => {
    const [people, setPeople] = useState<Person[]>(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if(index < 0){
            setIndex(lastIndex);
        }

        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index + 1);
        }, 6000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);


    return (
        <>
          <section>
            <div className="title">
                <h2>
                    <span>Testimonials</span>
                </h2>
            </div>

            <div className="section-center">
                {people.map((person: Person, personIndex: number) => {
                    const {id, image, name, quote} = person;

                    let position: string = 'nextslide';
                    if(personIndex === index){
                        position = 'activeSlide';
                    }
                    if(personIndex === index - 1 || (index === 0 
                        && personIndex === people.length - 1)){
                            position = 'lastSlide';
                        }

                        return(
                            <article>
                                <img src={image} alt={name} className='person-img' />
                                <h4>{name}</h4>
                                <p className="quote">{quote}</p>
                                <FaQuoteRight className='icon' />
                            </article>

                        );
                })}

                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft/>
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight/>
                </button>
            </div>
          </section>
        </>
    )
  
}

export default Testimonials;