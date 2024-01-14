import hamburger from "../assets/icons/hamburger.svg"
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
      <div className="min-h-screen w-full bg-[#2d2d2d]">
      </div>
    </section>
  )
}

export default Hero