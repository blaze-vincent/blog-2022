import Slide from "./slide";
import {useState} from 'react';

export default function Carousel({className, slideObjects}){
  const [displayedSlide, setDisplayedSlide] = useState(0);
  function controlDisplayedSlide(){
    setDisplayedSlide(displayedSlide < slideObjects.length ? displayedSlide++ : 0)
  }
  
  return <div className="relative w-full h-80">
    <div 
      className={"flex flex-row absolute h-full top-0" + className}
      style={{
        width: `${100 * slideObjects.length}%`,
        left: `${-100 * displayedSlide}%`,
        transition: '0.125s'
      }}
      onClick={controlDisplayedSlide}
    >
        {slideObjects.map((slideObj, index) => {
          return <Slide key={index} data={slideObj} selected={displayedSlide} order={index} />
        })}
      </div>
    </div>
}