
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 opacity-75"
                    src='https://i.ibb.co/mRCHGvg/banner.jpg'
                    alt="First slide"
                />
                <Carousel.Caption className='text-dark fw-bolder'>
                    <h3>Healthy, Convenient & Affordable.</h3>
                    <p> We supply produce that are ethically sourced and sustainably grown.

We value integrity and win-win relationships for both our customers and farmers. Doing more to help safe-guard the environment by being part of the solution.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 opacity-75"
                    src='https://i.ibb.co/Jn09b7r/banner-1.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption className='text-dark fw-bolder'>
                    <h3 >Farm Fresh</h3>
                    <p>We aim to provide you with premium quality and fresh products. Our slogan “Freshness guaranteed with excellent service,” represents Nature Farm as a whole.
</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 opacity-75"
                    src='https://i.ibb.co/Jn09b7r/banner-1.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption className='text-dark fw-bolder '>
                    <h3>Farm Fresh</h3>
                    <p>
                    We aim to provide you with premium quality and fresh products. Our slogan “Freshness guaranteed with excellent service,” represents Nature Farm as a whole.

                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;