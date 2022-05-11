import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import GradientBackground from "./gradientBackground";

export default function Nav(){
  const router = useRouter();
  const locations = [
    {
      name: 'Home',
      uri:  '/'
    },
    {
      name: 'Websites',
      uri:  '/websites'
    },
    {
      name: 'Art',
      uri:  '/art'
    },
    {
      name: 'Code',
      uri:  '/code'
    }
  ]

  return <nav>
    <ul className="flex flex-row gap-4 xs:text-lg font-jetbrains flex-wrap">
      {locations.map((location, index) => {
        return <li className="flex flex-col w-max" key={index}>
          <Link href={location.uri}>
            <a>{location.name}</a>
          </Link>
          {location.uri === router.pathname && <div className="h-px w-full relative -top-1"><GradientBackground /></div>}
        </li>
      })}
    </ul>
  </nav>
}