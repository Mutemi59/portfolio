import PropTypes from 'prop-types'


const Project = ({image, stack, title, description}) => {
  return (
    <div name='projects' className="w-full shadow-lg shadow-[#040c16]">
        <img src={image} className='w-full object-cover md:h-[268px]' alt=''/>
        <div className='w-3/4 mx-auto flex flex-col items-center'>
            <h3 className='font-[600] text-xl pb-4 pt-1 mb-5 text-center relative'>{title} <span className='absolute w-14 bg-white h-1 bottom-0 left-1/2 -translate-x-1/2'></span></h3>
            <p className='text-gray-400'>{description}</p>
            <h4 className='text-xl font-medium pt-4'>Stack</h4>
            <ul className='flex justify-between w-full py-2 text-gray-400'>
                {
                    stack.map((item, index)=>(<li key={index+1}>{item}</li>))
                }
            </ul>
            <div className='flex justify-around w-full my-4 gap-4'>
                <button className='bg-[#301666] py-2 px-9 rounded-2xl hover:bg-[#412677]'>Code</button>
                <button className='bg-[#431152] py-2 px-9 rounded-2xl hover:bg-[#8e41a5]'>Source</button>
            </div>

        </div>
    </div>
  )
}

Project.propTypes = {
    image :PropTypes.string,
    stack :PropTypes.object,
    title :PropTypes.string,
    description :PropTypes.string
}

export default Project
