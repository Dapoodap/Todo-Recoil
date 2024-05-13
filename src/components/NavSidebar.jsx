import { CgMenuGridR } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";




function NavSidebar() {
  return (
    <div className="grid gap-3 pl-4 pr-2 sm:mt-10">
        <div className="flex items-center justify-between p-1 cursor-pointer">
            <div className="flex items-center gap-3 text-black">
            <CgMenuGridR className="text-2xl "/>
            <h3 style={{ fontSize:'16px',fontWeight:'500',letterSpacing:'1px'}}>Task</h3>
            </div>
            <div className="w-6 h-6 flex justify-center items-center bg-[#1D2939] text-white text-xs border rounded-lg">4</div>
        </div>
        <div className="flex items-center justify-between p-1 text-[#667085] hover:text-black cursor-pointer">
            <div className="flex items-center gap-3">
            <IoMdNotifications className="text-2xl"/>
            <h3 style={{ fontSize:'16px',fontWeight:'500',letterSpacing:'1px' }}>Notification</h3>
            </div>
            <div className="w-6 h-6 flex justify-center items-center bg-[#FFFFFF] text-black text-xs border rounded-lg">4</div>
        </div>
        <div className="flex items-center justify-between p-1 text-[#667085] hover:text-black cursor-pointer">
            <div className="flex items-center gap-3">
            <IoBarChart className="text-2xl"/>
            <h3 style={{ fontSize:'16px',fontWeight:'500',letterSpacing:'1px' }}>Analytics</h3>
            </div>
        </div>
        
    </div>
  )
}

export default NavSidebar