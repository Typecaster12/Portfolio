import './Slider.css';
import Data from './Data.json';
import { useState } from 'react';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';

const Slider = () => {

    //state for slider;
    const [slide, setSlide] = useState(0);

    //function to handle next slide;
    const nextSlide = () => {
        setSlide(slide === Data.length - 1 ? 0 : slide + 1);
    }

    //function to handle previous slide;
    const previousSlide = () => {
        setSlide(slide === 0 ? Data.length - 1 : slide - 1);
    }

    return (
        <>
            <div className="carousel">
                {
                    Data.map((item, index) => (
                        <div key={index} className={slide === index ? 'slider' : 'slider slider-hidden'}>
                            <p className="review">{item.review}</p>
                            <h3 className='name'>{item.name}</h3>
                            <p className='role'>{item.role}</p>
                        </div>
                    ))
                }
            </div>

            <div className="buttons">
                {
                    Data.map((_, index) => (
                        <button className={slide === index ? 'indicator' : 'indicator indicator-inactive'} key={index}></button>
                    ))
                }
            </div>

            <div className="arrows">
                <div className="left" onClick={previousSlide}>
                    <HiOutlineArrowSmLeft />
                </div>

                <div className='right' onClick={nextSlide}>
                    <HiOutlineArrowSmRight />
                </div>
            </div>
        </>
    )
}

export default Slider
