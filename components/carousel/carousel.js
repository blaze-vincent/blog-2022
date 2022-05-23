import Slide from "./slide";
import {useState} from 'react';

export default function Carousel({className, slideObjects}){
  const [displayedSlide, setDisplayedSlide] = useState(0);
  
  return <div className="relative w-full h-80">
    <div 
      className={"flex flex-row absolute h-full top-0" + className}
      style={{
        width: `${100 * slideObjects.length}%`,
        left: `${-100 * displayedSlide}%`,
        transition: '0.125s'
      }}
    >
      {slideObjects.map((slideObj, index) => {
        return <Slide 
          key={index} 
          data={slideObj} 
          selectedSlide={displayedSlide} 
          order={index}
          onClick={_ => {setDisplayedSlide(index)}} 
        />
        })}
      </div>
      <div className="absolute w-full gap-6 items-center flex flex-row bottom-2 justify-center">
        {slideObjects.map((_, key) => {
          return <button 
            key={key} 
            className="w-6 h-6 rounded-full" 
            onClick={_ => {setDisplayedSlide(key)}}
            style={{
              backgroundColor: key === displayedSlide ? '#171717' : 'white',
              transition: '125ms'
            }}  
          />
        })}
      </div>
    </div>
}