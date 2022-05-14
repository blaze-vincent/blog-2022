import Navlink from "./navlink";
import { useRouter } from "next/router"

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

  return <nav className="mb-6 mt-1">
    <ul className="flex flex-row gap-4 xs:text-lg font-jetbrains flex-wrap">
      {locations.map((location, index) => {
        return <Navlink key={index} uri={location.uri} name={location.name} routerPathname={router.pathname}/>
      })}
    </ul>
  </nav>
}