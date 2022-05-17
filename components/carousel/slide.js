import Image from "next/image";

export default function Slide({selected, order, data}){

  return <div
    className="w-full relative top-0 h-full"
  >
    <div 
      className=" w-full h-full"
      style={{
        opacity: 1/(Math.abs(order-selected)+1),
        transition: '0.125s'
      }}  
    >
      <Image src={data.imgurl} layout='fill' objectFit="cover" objectPosition="50% 0" />
    </div>
  </div>
}