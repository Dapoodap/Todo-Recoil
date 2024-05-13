import { IoMdSettings } from "react-icons/io";

function Setting() {
  return (
    <div className="absolute flex items-center gap-3 p-1 pl-4 cursor-pointer bottom-5">
            <IoMdSettings className="text-2xl "/>
            <h3 style={{ fontSize:'16px',fontWeight:'500',letterSpacing:'1px' }}>Setting</h3>
        </div>
  )
}

export default Setting