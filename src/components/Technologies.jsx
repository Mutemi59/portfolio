import { FaReact, FaServer } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
const Technologies = () => {
  return (
    <div name='technologies' className="bg-[#0a192f] text-gray-300 w-full py-10 md:py-0 md:h-screen flex items-center">

      {/* Technologies Container */}
      <div className="w-full mx-auto max-w-[1300px] pl-4">
         <h2 className='font-[600] text-5xl mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent py-2 inline-block'>Technologies</h2>
        <p className="text-gray-400">I have worked with a lot of technologies in the web development <br/> world. From Back-end to Front-End and design</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-8 items-center md:justify-items-center gap-4">
            <div>
                <span><FaReact/></span>
                <h4 className="text-xl font-[600] py-2">Front-End</h4>
                <p className="w-[160px]">Experience with HTML, CSS, Javascript</p>
            </div>

            <div>
                <span><FaServer/></span>
                <h4 className="text-xl font-[600] py-2">Back-End</h4>
                <p className="w-[160px]">Experience with Python, Django, Ajax and RestAPI</p>
            </div>

            <div>
                <span><BsDatabase/></span>
                <h4 className="text-xl font-[600] py-2">Database</h4>
                <p className="w-[160px]">Experience with MySQL, Postgress</p>
            </div>
        </div>
        <p className='w-14 h-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-20'></p>
      </div>
    </div>
  )
}

export default Technologies

