import { useEffect, useRef } from "react"

export default function GradientBackground({className}){
  //parent should be positioned relatively and have overflow hidden for intended behavior
  
  //todo: try moving the left property of the element to 0(left of screen) since its currently relative to parent position
  const thisElement = useRef(null);
  useEffect(_ => {
    thisElement.current.style.left = "" + -thisElement.current.getBoundingClientRect().x + "px"
  }, [])
  return <div ref={thisElement} className={"absolute w-screen h-full top-0 left-0 bg-gradient-to-r from-amber-200 to-orange-400 " + className} />
}