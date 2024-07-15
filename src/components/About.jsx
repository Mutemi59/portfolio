
const About = () => {
  return (
    <div name='about' className="bg-[#0a192f] text-gray-400 w-full py-10 md:py-0  md:h-screen flex items-center">

      {/* Technologies Container */}
      <div className="w-full mx-auto max-w-[1300px] pl-4">
         <h2 className='font-[600] text-5xl mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent py-2 inline-block'>About</h2>
        <p className="text-gray-400 md:w-[70%]">I&#39;m a passionate and dedicated Django backend developer with a strong commitment to creating efficient, scalable, and secure web applications. With 0 years of experience in the industry, I&#39;ve honed my skills in designing and implementing robust backend solutions that drive the success of various digital products.</p>
        <div>
            <h3 className="text-xl font-[600] py-2 text-gray-300">What I Do</h3>
            <div className="pl-4">
                <ul className="list-disc flex flex-col gap-4">
                <li>
                  <p><span className="text-lg font-medium text-gray-300">Backend Development: </span>Specializing in Django, I design and implement efficient and maintainable backend systems. </p>
                </li>
                <li>
                    <p><span className="text-lg font-medium text-gray-300">API Development:</span> Creating RESTful APIs that ensure smooth and secure data exchange.</p>
                </li>
                <li>
                    <p><span className="text-lg font-medium text-gray-300">Database Management:</span> Expert in SQL and NoSQL databases, ensuring data integrity and optimal performance.</p>
                </li>
                <li>
                    <p><span className="text-lg font-medium text-gray-300">Scalability and Performance:</span>  Focused on building scalable systems that perform well under pressure.</p>
                </li>
            </ul>
            </div>

        </div>
        <div className="grid sm:grid-cols-3 gap-3  md:grid-cols-5 mt-8 grid-cols-2">
            <div className="relative max-w-[200px] ">
                <h4 className="text-xl font-bold py-2 text-gray-300">2019</h4>
                <p className="w-[160px] text-sm">Started my journey</p>
                <p className="w-[60px] bg-gradient-to-r from-gray-400 to-transparent h-[2px] absolute top-2 right-[40%]"></p>
            </div>
            <div className="relative max-w-[200px] ">
                <h4 className="text-xl font-bold py-2 text-gray-300">2020</h4>
                <p className="w-[160px] text-sm">Worked as a frelancer developer</p>
                <p className="w-[60px] bg-gradient-to-r from-gray-400 to-transparent h-[2px] absolute top-2 right-[40%]"></p>
            </div>
            <div className="relative max-w-[200px]">
                <h4 className="text-xl font-bold py-2 text-gray-300">2021</h4>
                <p className="w-[160px] text-sm">Founded Django mastery</p>
                <p className="w-[60px] bg-gradient-to-r from-gray-400 to-transparent h-[2px] absolute top-2 right-[40%]"></p>
            </div>
            <div className="relative max-w-[200px]">
                <h4 className="text-xl font-bold py-2 text-gray-300">2022</h4>
                <p className="w-[160px] text-sm">Shared my projects with the world</p>
                <p className="w-[60px] bg-gradient-to-r from-gray-400 to-transparent h-[2px] absolute top-2 right-[40%]"></p>
            </div>
            <div className="relative max-w-[200px]">
                <h4 className="text-xl font-bold py-2 text-gray-300">2023</h4>
                <p className="w-[160px] text-sm">Started my own platform</p>
                <p className="w-[60px] bg-gradient-to-r from-gray-400 to-transparent h-[2px] absolute top-2 right-[40%]"></p>
            </div>

        </div>
        <p className='w-14 h-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-20'></p>
      </div>
    </div>
  )
}

export default About
