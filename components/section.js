export default function Section({children}){
  return <section className="flex flex-col gap-2 relative hover:translate-x-2 transition-transform">
    {children}
  </section>
}