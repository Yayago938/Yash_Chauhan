import React from 'react'
import Searchbar from '../components/Searchbar'
import Sidebar from '../components/Sidebar'
import profiledata from '../assets/data/users.json'
import Profilecard from '../components/Profilecard'
import { Link } from 'react-router-dom';


const Discoverpeople = () => {
  return (
    <div className="flex flex-1 min-h-screen bg-purple-100 max-sm:bg-[linear-gradient(to_bottom_right,#FFD2A8_0%,#B0D0E0_100%)]">
      <div className=" md:block sm:w-1/4 border-gray-300 z-100">
        <Sidebar />
      </div>
      <div className="w-full sm:w-3/4 p-6 pt-[12vh] sm:pt-0 flex flex-2 flex-col items-center">
        {/* <Searchbar /> */}
        <div className='text-4xl p-2 w-full sticky top-[12vh]  sm:sticky sm:top-0 z-10 flex flex-col  sm:flex-row sm:justify-between  text-purple-900'>
          <div className='hidden lg:block'>Suggested for you</div>
          <div ><Searchbar /></div>
        </div>
        <div className='flex flex-wrap gap-4  justify-center items-center'>
          {profiledata.map((profile) => (
            <Link key={profile.id} to={`/post/${profile.id}`} className="w-full sm:w-1/4 md:w-[300px]">
              <Profilecard profile={profile} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Discoverpeople
