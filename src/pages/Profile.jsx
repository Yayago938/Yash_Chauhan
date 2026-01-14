import React, { useEffect,useState } from 'react'
import Sidebar from '../components/Sidebar'
import Cookies from "js-cookie";
const baseurl="https://task4-authdb.onrender.com/auth";


const token = Cookies.get("token");
const Profile = () => {
const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = Cookies.get("token");
      console.log("Fetch profile:",token)
      const res = await fetch(`${baseurl}/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Status",res.status);
      const data = await res.json();
      console.log("Response",data);
      setProfile(data);
    };

    fetchProfile();
  }, []);
  console.log(profile);
  return (
    <div className='flex w-full bg-purple-100 border-b-2 border-b-purple-500'>
      <div className='flex-1'>
        <Sidebar />
      </div>
      <div className='sm:flex-2 h-screen w-full ml-0  bg-purple-100 max-sm:bg-[linear-gradient(to_bottom_right,#FFD2A8_0%,#B0D0E0_100%)]'>
        <div className='pt-[12vh] sm:pt-0 flex flex-col justify-center mx-2 w-[80%]'>


          <div className='mx-2 w-full flex flex-col sm:flex-row justify-center sm:m-0 pt-2 items-center gap-4 sm:gap-6'>
            <div className='rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-amber-400 flex-shrink-0'></div>
            <div className='flex flex-col gap-3 sm:gap-4 w-full sm:w-auto'>

              <div className='flex flex-col text-center sm:text-left'>
                <div className='font-semibold text-lg'>Name</div>
                <div className='text-gray-600'>Username</div>
              </div>

              <div className='flex gap-8 sm:gap-12 justify-center sm:justify-start items-center'>
                <div className='flex flex-col items-center'>
                  <div className='font-semibold'>70</div>
                  <div className='text-sm text-gray-600'>Posts</div>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='font-semibold'>200</div>
                  <div className='text-sm text-gray-600'>Followers</div>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='font-semibold'>300</div>
                  <div className='text-sm text-gray-600'>Following</div>
                </div>
              </div>
            </div>
          </div>
          <div className=' mx-2  w-full justify-center sm:m-2 flex  items-center gap-3 '>
            <button className='bg-blue-200  transform transition duration-300 active:scale-95 hover:bg-blue-300 border-blue-500 p-2 w-1/3 rounded-xl'>Edit Profile</button>
            <button className='bg-blue-200 transform transition duration-300 active:scale-95 hover:bg-blue-300 p-2 w-1/3 rounded-xl overflow-hidden'>View Archive</button>
          </div>
          <div className=' mx-2  w-full justify-center sm:m-2 flex pt-2 pb-2 items-center gap-3 border-b-2 border-b-purple-500'>
            <button className='w-1/3 flex justify-center items-center'><img src="/images/Posts.png" alt="" srcset="" /></button>
            <button className='w-1/3 flex justify-center items-center'><img src="/images/Savedpost.png" alt="" srcset="" /></button>
            <button className='w-1/3 flex justify-center items-center'><img src="/images/artists.png" alt="" srcset="" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
