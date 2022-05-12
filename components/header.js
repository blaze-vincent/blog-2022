import Nav from "./nav";
import GradientBackground from "./gradientBackground";

export default function Header(){

  return (<header className="pl-4 flex flex-col items-start">
    <div className="relative overflow-hidden text-neutral-900 xs:text-3xl sm:text-4xl text-2xl p-4 w-full">
      {/* rounded-bl works but left edge is moved to left edge of screen now */}
      <GradientBackground className='rounded-bl'/>
      <h1 className="relative font-syne">nine-orange-ten</h1>
    </div>
    <Nav />
  </header>)
}