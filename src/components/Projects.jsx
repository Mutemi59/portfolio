import Project from "./Project"
import image1 from '../assets/images/1.png'
import image2 from '../assets/images/2.png'
import image3 from '../assets/images/3.jpg'
import image4 from '../assets/images/4.jpg'


const Projects = () => {
  return (
    <div name='projects' className='w-full py-20 bg-[#0a192f] text-gray-300'>

      {/* Projects Container */}
      <div className="w-full max-w-[1300px] mx-auto pl-4">
        <h2 className='font-[600] text-5xl mb-10 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent py-2 inline-block'>Projects</h2>
        <div className="w-[90%] md:w-[80%] grid md:grid-cols-2 gap-10 mx-auto">
            <Project image={image1} stack={['React', 'Django', 'Ajax', 'Mysql']} title={'MERN Memories'} 
              description={'Lorem ipsum dolor sit amet sectetur, adipisicing elit. Ea laboriosam quo repellat minima quaerat! Alias, quod et iure at minima asperiores sint laudantium iste exercitationem officia mollitia esse dolor vel praesentium illum doloremque quos.'}/>

            <Project image ={image2} stack={['React', 'Django', 'Ajax', 'Mysql']} title={'MERN Memories'} 
              description={'Lorem ipsum dolor sit amet sectetur, adipisicing elit. Ea laboriosam quo repellat minima quaerat! Alias, quod et iure at minima asperiores sint laudantium iste exercitationem officia mollitia esse dolor vel praesentium illum doloremque quos.'}/>

            <Project image ={image3} stack={['React', 'Django', 'Ajax', 'Mysql']} title={'MERN Memories'} 
              description={'Lorem ipsum dolor sit amet sectetur, adipisicing elit. Ea laboriosam quo repellat minima quaerat! Alias, quod et iure at minima asperiores sint laudantium iste exercitationem officia mollitia esse dolor vel praesentium illum doloremque quos.'}/>

            <Project image ={image4} stack={['React', 'Django', 'Ajax', 'Mysql']} title={'MERN Memories'} 
              description={'Lorem ipsum dolor sit amet sectetur, adipisicing elit. Ea laboriosam quo repellat minima quaerat! Alias, quod et iure at minima asperiores sint laudantium iste exercitationem officia mollitia esse dolor vel praesentium illum doloremque quos.'}/>
              
        </div>
        <p className='w-14 h-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-20'></p>
      </div>

    </div>
    
  )
}

export default Projects
