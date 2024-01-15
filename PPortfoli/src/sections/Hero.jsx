import hamburger from "../assets/icons/hamburger.svg"
import arrow from "../assets/icons/arrow-right.svg"
import nav from "../components/nav"
import Button from "../components/Button"
import { navLinks } from "../constants"
import { useState } from 'react'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const Menu = () =>{
   return ( <div className="absolute top-0 left-4 z-10 flex flex-row p-3 bg-dark-yellow border border-[#fba700]">
        <ul className="">
            {navLinks.map((item) => (
              <li key={item.label} className="my-6">
                <a href={item.href}
                className="font-montsterrat leading-normal text-xl text-black hover:text-white">
                  {item.label}
                </a>
              </li>   
            ))}
          </ul>
        </div>)
  }
  return (
    <section id="home" className="w-full flex lg:flex-row flex-col max-lg:justify-center items-center min-h-screen">
      <div className='flex lg:min-h-screen lg:flex-col flex-row w-full h-12 lg:w-20 bg-[#fdb82c] p-1 justify-between items-center'>
       <div className="max-lg:align-top">
       <div className="w-10 h-10 max-lg:mx-1">
       <button
         onClick={toggleNavbar}
         className="flex items-center px-2 py-2 rounded-full text-black-500 hover:text-black-400" >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
           style={{ width: "24", height: "24" }}>
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg" style={{ width: "24", height: "24" }}
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
       </div>
       
      </div>
        <div className="social-icons flex max-lg:flex-row flex-col lg:align-bottom">
        <div className="w-10 h-10 bg-dribble bg-cover lg:my-3 max-lg:mx-2 max-sm:mx-1"></div>
        <div className="w-10 h-10 bg-linkedin bg-cover lg:my-3 max-lg:mx-2 max-sm:mx-1"></div>
        <div className="w-10 h-10 bg-twitter bg-cover max-lg:mx-2 max-sm:mx-1"></div>
       </div>
      </div>
      <div className=" relative flex min-h-screen w-full items-center bg-[#2d2d2d] flex-col">
        {isOpen && <Menu />}
        <div className="w-full py-4 px-20 max-sm:p-3 align-top max-lg:hidden">
        <ul className="flex flex-1 lg:justify-end justify-center items-end gap-16 lg:gap-[85px]">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}
                className="font-montsterrat leading-normal text-xl text-white hover:text-dark-yellow">
                  {item.label}
                </a>
              </li>   
            ))}
          </ul>
        </div>

        <div className="flex">
        <div className="flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h1 className="mt-10 font-palanquin text-8xl font-bold text-white">
          I'm <span className="text-dark-yellow inline-block lg:mt-3">Anwar</span> Aftab
        </h1>
        <p className="text-2xl font-montsterrat text-dark-yellow p-1 my-3">Learning Web Design</p>
        <p className="font-montsterrat text-lg text-wrap leading-8 mt-6 mb-14 sm:max-w-sm text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
      </div>
    </section>
  )
}

export default Hero