import H2 from './h2'
import Section from './section'
import GithubSVG from './svg/github'
import LinkedInSVG from './svg/linkedin'

export default function ProfileSection(){
  return <Section>
    <H2>About me</H2>
    <p>I&apos;m Blaze Vincent.</p>
    <p>
      I&apos;m a recent graduate of the Southeastern Community College Network Administration and Cybersecurity program. 
      Now I&apos;m finishing up my AS, still at SCC. 
      After that, I&apos;ll be pursuing computer science at Iowa State University.
    </p>
    <p>
      Obviously, my hobbies include drawing pictures with lots of lines, sculpting faces, and writing JavaScript. 
      I also like to spend time with my birds, listen to music, and probably some other things I&apos;m not considering at the time of writing this. 
    </p>
    <div className='flex flex-row gap-2 items-center'>
      <p>You can find me a few other places:</p>
      <ul className='fill-neutral-100 flex flex-row gap-2'>
        <li>
          <a href='https://github.com/blaze-vincent' target='_blank'>
            <GithubSVG />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/blaze-vincent' target='_blank'>
            <LinkedInSVG />
          </a>
        </li>
      </ul>
    </div>
  </Section>
}