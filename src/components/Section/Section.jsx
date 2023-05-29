import style from './Section.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Window from '../Window/Window'
import { useState } from 'react';

export default function Section({name, desc, imageArr, startDate, endDate}){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        cssEase: "linear"
      };


    return(
        <>
            <div className='prjct'>
                    <div className='slider' style={{width: 500}}>
                        <Slider {...settings}>
                            {imageArr.map((item)=>
                                <div key={item}>
                                    <img src={item} alt="image" className='sectionImage'  />
                                </div>
                            )}
                        </Slider>
                    </div>
                    <div className='par'>
                        <h1>
                            {name}
                        </h1>
                        <p>
                            {desc}
                        </p>
                        <span className='date'>
                            {startDate}
                        </span><br />
                        <span className='date'>
                            {endDate}
                        </span>
                    </div>
                </div>
        </>
    )
}