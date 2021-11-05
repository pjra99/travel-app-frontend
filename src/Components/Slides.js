import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useEffect } from 'react';
import { useState } from 'react';

const slideImages = [
    {
      url: '/himachal.jpg',
      caption: 'Himachal'
    },
    {
      url: '/goa.jpg',
      caption: 'Goa'
    },
    {
      url: '/kerala.jpg',
      caption: 'Kerala'
    },
  ];

function Slides(){

    return (
        <div className="slide-container mb-20 md:mb-0 md:ml-32 ml-10 flex flex-wrap" >
        <div><Slide className="w-80 md:w-668px">
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide w-668px flex" key={index}>
              <div className="h-96 w-96 md:w-668px rounded-md" style={{'backgroundImage': `url(${slideImage.url})`, backgroundSize: 'cover'}}>
              </div>
            </div>
          ))} 
        </Slide>
        </div>
        <div className="w-96 md:ml-14">
        <h2 className="font-heading text-2xl md:mt-0 mt-10">Himachal Pradesh</h2>
        <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
       <button className="mt-20 bg-black text-white w-60 h-10 text-xl rounded-md">Explore this Place More</button>
        </div>
        </div>
    )
}

export default Slides