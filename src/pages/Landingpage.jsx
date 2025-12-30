import React from 'react'
import Navbar from '../components/Navbar'
import Landing from "../assets/Landing.png"
import "../index.css"
import { useNavigate } from 'react-router-dom'
const Landingpage = () => {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundImage: `url("/images/image.png")` }} className="bg-cover bg-center h-screen w-screen">
            {/* <Navbar/> */}
            {/* <div className=' object-cover   h-[90vh] w-full overflow-hidden' > */}
            {/* <img src={Landing} alt="" className='w-[100%] object-cover h-[100%]  overflow-hidden'/> */}
            {/* </div> */}
            <div className='flex flex-col justify-center items-center h-screen  m-auto'>
                <div>
                    <div className='flex justify-center items-center  transform transition duration-250 ease-out hover:scale-105 font-extrabold text-purple-900  text-shadow-lg text-shadow-pink-300 text-6xl sm:text-9xl'>BlueBerry</div>
                    <div className='flex justify-center items-center transform transition duration-250 ease-out hover:scale-105 text-3xl font-bold text-blue-600 text-shadow-pink-200 text-shadow-lg/30 '>
                        Connect.Share.Discover
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex gap-4 h-20 w-96 justify-center items-center'>
                            <button onClick={() => { navigate('/login') }} className='rounded-2xl cursor-pointer bg-pink-400 transform transition duration-300 hover:scale-105 active:scale-95 active:shadow-sm w-28 text-white  h-[40%] shadow-lg/30'>Login</button>
                            <button onClick={() => { navigate('/register') }} className='rounded-2xl cursor-pointer bg-pink-400 w-28 h-[40%] transform transition duration-300  hover:scale-105 active:scale-95 active:shadow-sm text-white shadow-lg/30'>Signup</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landingpage
