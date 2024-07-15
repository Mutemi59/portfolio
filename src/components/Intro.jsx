import {Link} from 'react-scroll'
import { FaArrowRightLong } from "react-icons/fa6";

const Intro = () => {
  return (
    <div name='intro' className='w-full flex flex-col justify-center bg-[#0a192f] h-screen'>

        {/* Container */}
        <div className=" pl-4 max-w-[1300px] mx-auto">
            <div className="md:w-[70%]">
                <p className="font-[600] text-4xl md:text-6xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-6 py-1">
                    Welcome To <br/>
                    My Personal Portfolio
                </p>
                <p className="text-gray-400 mb-6">
                    Hello! I&#39;m James, a passionate Django backend developer with a knack for building robust, scalable web applications. With a solid foundation in Python and Django, I thrive on transforming complex problems into elegant solutions.
                </p>

                <Link to='projects' smooth={true} duration={500}>
                    <button className='group px-14 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl text-white font-bold hover:opacity-80'>
                        View Work <span> <FaArrowRightLong className='inline ml-2 group-hover:rotate-90 duration-300'/></span> 
                    </button>
                </Link>

                

                <p className='w-14 h-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-20'></p>
            </div>
            
        </div>
        
    </div>
    
  )
}

export default Intro
