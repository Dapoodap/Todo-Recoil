import profile from '../assets/profile.jpg'
import { IoIosArrowDown } from "react-icons/io";


function ProfileSidebar() {
  return (
    <div className="flex items-center justify-between gap-3 p-3 sm:mt-5">
        <div className='flex items-center justify-center gap-1 sm:pl-2'>
        <img src={profile} alt="profile-user" className='object-cover rounded-full w-7 h-7' />
        <h3 style={{ fontSize:'18px',fontWeight:'600',color:'black' }}>Daffa Radhitya</h3>
        </div>
        <IoIosArrowDown className='mx-1 mt-1 text-black cursor-pointer'/>
    </div>
  )
}

export default ProfileSidebar