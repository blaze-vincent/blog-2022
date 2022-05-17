import GradientBackground from './gradientBackground';

export default function H2({children}){
  return <h2 className="xs:text-xl sm:text-2xl text-lg w-full max-w-max overflow-hidden">
    {children}
    <div className='h-px w-full relative'>
      <GradientBackground />
    </div>
  </h2>
}