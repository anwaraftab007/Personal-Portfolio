import hamburger from "../assets/icons/hamburger.svg"
import arrow from "../assets/icons/arrow-right.svg"
import Button from "../components/Button"
import { useState } from 'react'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section id="home" className="w-full flex lg:flex-row flex-col max-lg:justify-center items-center min-h-screen">
      <div className='flex lg:min-h-screen lg:flex-col flex-row w-full h-12 lg:w-12 bg-[#fdb82c] p-1 justify-between'>
       <div className="max-lg:align-top">
       <div className="w-10 h-10 bg-hero bg-cover max-lg:mx-1"></div>
      </div>
        <div className="social-icons flex max-lg:flex-row flex-col lg:align-bottom">
        <div className="w-10 h-10 bg-dribble bg-cover lg:my-3 max-lg:mx-2 max-sm:mx-1"></div>
        <div className="w-10 h-10 bg-linkedin bg-cover lg:my-3 max-lg:mx-2 max-sm:mx-1"></div>
        <div className="w-10 h-10 bg-twitter bg-cover max-lg:mx-2 max-sm:mx-1"></div>
       </div>
      </div>
      <div className="flex md:min-h-screen w-full bg-[#2d2d2d] lg:flex-col flex-row justify-between items-center">
        <div className="relative lg:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-dark-yellow">Learning Web Design</p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold text-white">
          I'm <span className="text-dark-yellow inline-block lg:mt-3">Anwar</span> Aftab
        </h1>
        <p className="font-monsterrat text-lg text-wrap leading-8 mt-6 mb-14 sm:max-w-sm text-white">
          
        </p>
        <div className="flex max-sm:flex-col flex-row md:gap-7 gap-4">
        <Button label='About Me' link="#about-me" iconUrl={arrow}/>
        <Button label='Resume'
        link="#resume" backgroundColor="bg-[#2d2d2d]"
        borderColor="border-[#fdb82c] "
        textColor="text-[#fdb82c]"/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero