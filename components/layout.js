import Head from "next/head"
import Header from './header'
import Footer from './footer'

export default function Layout({children}){
  return (<div
    className="bg-neutral-900 text-neutral-100"
  >
    <Head>
      <title>nine-orange-ten</title>
      <meta name="description" content="a blog created by blaze vincent" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="px-4 min-h-screen">{children}</main>

    <Footer/>
    </div>)
}