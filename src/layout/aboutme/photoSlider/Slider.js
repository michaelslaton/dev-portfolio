import React, {useState} from 'react';
import './Slider.css';
import sliderData from './sliderData';
import SliderBtn from './SliderBtn';

export default function Slider(){

  const [slideIndex, setSlideIndex] = useState(1)
  const maxLength = sliderData.length;

  function clickHandler(direction){
    console.log(`clicked! Max length:`, maxLength, ` Index: `, slideIndex);
    if(direction === `next`){

      if(slideIndex !== maxLength) setSlideIndex(slideIndex + 1)
      else if (slideIndex === maxLength) setSlideIndex(1);

    } else {

      if(slideIndex !== 1) setSlideIndex(slideIndex - 1)
      else if (slideIndex === 1) setSlideIndex(maxLength);

    }
  }

  

  function moveDot (index){
    setSlideIndex(index)
  }

  return (
    <div className="container-slider">
      {sliderData.map((image,i)=>{
        return (
          <div
          key={image.id}
          className={slideIndex === i + 1 ? "slide active-anim" : "slide"}
          >
            <img src={image.img}/>
          </div>
        )
      })}
      <SliderBtn handler={clickHandler} direction={'next'}/>
      <SliderBtn handler={clickHandler} direction={'prev'}/>

      <div className="container-dots">
        {Array.from({length: maxLength}).map((dot,i)=> (
          <div
          key={i}
          onClick={()=> moveDot(i+1)}
          className={slideIndex === i + 1 ? "dot active" : "dot"}
          />
        ))}
      </div>
    </div>
  )
}