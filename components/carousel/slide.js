import Image from "next/image";

export default function Slide({selectedSlide, order, data, onClick}){

  return <div
    className="w-full relative top-0 h-full"
    style={{
      cursor: order - selectedSlide === 0 ? 'default' : 'pointer'
    }}
    onClick={onClick}
  >
    <div 
      className=" w-full h-full"
      style={{
        opacity: 1/(Math.abs(order-selectedSlide)+1),
        transition: '0.125s'
      }}  
    >
      <Image src={data.imgurl} layout='fill' objectFit="cover" objectPosition="50% 0" />
    </div>
  </div>
}