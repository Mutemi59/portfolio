import { FaArrowRightLong } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form action="https://getform.io/f/adrynyra" method="POST" className="w-full max-w-[680px] flex flex-col mx-auto ">
            <div className="pb-8">
                <h2 className='font-[600] text-5xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent inline-block'>Contact</h2>
                <p className="py-2 text-gray-300 md:w-[80%]">Looking to partner or work together? Submit the form below or shoot me an email <span> <FaArrowRightLong className="inline"/> </span> mutemijames59@gmail.com</p>
                <p className=" text-gray-300"><span className=""><LuPhone className="inline mr-4"/></span> +245 11 555 3345</p>
            </div>

            <input type="text" className="bg-[#ccd6f6] pl-2" placeholder="Name" name="name" />
            <input type="email" name="email" className="my-4 p-2 bg-[#ccd6f6]" placeholder="Email" />
            <textarea name="message" rows={10} placeholder="Message" className="p-2 bg-[#ccd6f6]"></textarea>
            <button className="px-14 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500  text-white font-bold hover:opacity-80 mx-auto mt-4">Let&#39;s Colaborate</button>
        </form>
      
    </div>
  )
}

export default Contact
