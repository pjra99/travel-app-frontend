import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

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
        <div className="slide-container h-96 ml-32 flex">
        <div><Slide className="w-668px">
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide w-668px flex" key={index}>
              <div className="h-96 w-668px rounded-md" style={{'backgroundImage': `url(${slideImage.url})`, backgroundSize: 'cover'}}>
              </div>
            </div>
          ))} 
        </Slide>
        </div>
    
        </div>
    )
}

export default Slides