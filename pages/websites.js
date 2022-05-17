import GradientBackground from "../components/gradientBackground";
import Carousel from "../components/carousel/carousel";
import Carousel2 from '../components/carousel2/carousel';

export default function Websites(){

  return <>
  
    <div className="max-w-screen-md">
      <div className="relative overflow-hidden rounded-t flex items-center justify-center text-neutral-900 p-2">
        <GradientBackground />
        <h2 className="relative text-lg xs:text-xl sm:text-2xl font-syne text-center">SG Construction Company</h2>
      </div>
      <div className="w-full flex flex-row h-80">

      <Carousel className="overflow-visible" slideObjects={
        [
          {
            imgurl: '/websiteScreenshots/sgconstructco1.png'
          },
          {
            imgurl: '/websiteScreenshots/sgconstructco1.png'
          },
          {
            imgurl: '/websiteScreenshots/sgconstructco1.png'
          },
        ]
      } />
      </div>
    </div>
  </>
}