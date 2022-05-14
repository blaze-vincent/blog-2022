import Link from "next/link"
import GradientBackground from "./gradientBackground";

export default function Navlink({uri, name, routerPathname}){
    return <li className="flex flex-col w-max">
      <Link href={uri}>
        <a>{name}</a>
      </Link>
      {uri === routerPathname && <div 
        className="h-px w-full relative -top-1 overflow-hidden"
      >
        <GradientBackground />
      </div>}
  </li>
}