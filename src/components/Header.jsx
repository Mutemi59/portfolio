import { GiSpikedDragonHead } from "react-icons/gi";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import {Link} from 'react-scroll'
import {useState} from 'react'
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = ()=>{
    setNav((prev)=>!prev);
  }

  return (
    <div className="flex py-6 w-full px-20 justify-between items-center bg-[#0a192f] text-gray-300">
        <div className="flex items-center gap-2 z-10  text-lg">
            <span><GiSpikedDragonHead /></span>
            <span>Mutemi</span>
        </div>

        {/* menu */}
        <ul className='hidden sm:flex gap-5 text-lg'>
          <li className="cursor-pointer">
            <Link to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to='technologies' smooth={true} duration={500}>
              Technologies
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <ul className="hidden  md:flex gap-10 cursor-pointer text-lg">
            <li><FaGithub/></li>
            <li><FaLinkedin/></li>
            <li><FaXTwitter/></li>
        </ul>

         {/* Hambuger menu */}
        <button className='sm:hidden z-10 text-lg' onClick={handleClick}>
          {nav ? <FaTimes/> : <FaBars/>}
        </button>

        {/* Mobile Menu */}
        <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}>
          <li className='py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='intro' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className='py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='technologies' smooth={true} duration={500}>
              Technologies
            </Link>
          </li>
          <li className='py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl cursor-pointer'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>    
    </div>
  )
}

export default Header
