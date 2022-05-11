import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Nav(){
  const router = useRouter();
  const [locations, setLocations] = useState([
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
  ])

  return <nav>
    <ul className="flex flex-row gap-4 xs:text-lg font-jetbrains flex-wrap">
      {locations.map((location, index) => {
        return <li key={index} className={location.uri === router.pathname && 'underline'}>
          <Link href={location.uri}>
            <a>{location.name}</a>
          </Link>
        </li>
      })}
    </ul>
  </nav>
}