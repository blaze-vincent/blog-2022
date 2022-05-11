import Nav from "./nav";

export default function Header(){

  return (<header className="px-4 flex flex-col items-start">
    <h1 className="bg-gradient-to-r from-amber-200 to-orange-400 text-neutral-900 xs:text-3xl sm:text-4xl text-2xl p-4 font-syne rounded-b">
      nine-orange-ten
    </h1>
    <Nav />
  </header>)
}