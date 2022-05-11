import { useEffect } from "react"

export default function GradientBackground({className}){
  //parent should be positioned relatively and have overflow hidden for intended behavior
  
  //todo: try moving the left property of the element to 0(left of screen) since its currently relative to parent position
  useEffect(_ => {
    console.log()
  }, [])
  return <div className={"absolute w-screen h-full top-0 left-0 bg-gradient-to-r from-amber-200 to-orange-400 " + className} />
}