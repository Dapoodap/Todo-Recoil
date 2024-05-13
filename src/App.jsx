import { IoIosLink } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";


import './App.css';
import NavSidebar from './components/NavSidebar';
import ProfileSidebar from './components/ProfileSidebar';
import Setting from './components/Setting';
import { CgAdd } from "react-icons/cg";
import Modal from './components/Modal'
import { useRecoilState } from "recoil";
import { todoState } from "./recoil/TodoAtom";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [todos,setTodos] = useRecoilState(todoState)

  const UpdateStatus = (index,status) =>{
    let newTodos = [...todos];
    newTodos[index] = {...todos[index],status:status};
    setTodos(newTodos);
  }
  const ConcatLink = (str) =>{
    if (str.length > 11) {
      return str.substring(0, 11 - 3) + '...';
    } else {
      return str;
    }
  }
  

  return (
    <div className='grid sm:grid-cols-12'>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div style={{ minHeight:'100%' }} className='border bg-[#FFFFFF] sm:col-span-2 sidebar relative'>
        <div>
          <ProfileSidebar/>
          <NavSidebar/>
          <div onClick={openModal} className="pl-4 mt-4 flex items-center justify-between p-1 text-[#667085] hover:text-black cursor-pointer">
            <div className="flex items-center gap-3">
            <CgAdd className="text-2xl"/>
            <h3 style={{ fontSize:'16px',fontWeight:'500',letterSpacing:'1px' }}>Add Task</h3>
            </div>
        </div>
          <Setting/>
        </div>
      </div>
      <div className='gap-5 grid sm:grid-cols-3 bg-[#E4E7EC]  sm:col-span-10 main pt-[80px] pl-[60px] pr-[60px] pb-[40px]'>
        <div className='px-5 py-3 '>
          <h2 className="mb-10 text-md font-medium text-[#667085]">Todo</h2>
          {todos.map((item,index)=>{
            if (item.status === "todo") {
              return(
                <>
            <div key={index} className='card mb-2 bg-[#FFFFFF] rounded-md px-5 py-6 cursor-pointer'>
            <div>
              <h2 className="text-2xl font-bold text-black">{item.task}</h2>
              <p className="font-normal text-md text-[#98A2B3]">Created At {item.date}n</p>
              <p className="mt-4 font-medium text-black text-md">{item.desc}</p>
              <div className='flex items-center gap-2 mt-2'>
                <div className="flex items-center gap-1 ">
                  <IoIosLink className="font-normal text-md text-[#98A2B3]"/>
                  <a className="font-normal text-md text-[#98A2B3]" href="#">{ConcatLink(item.link1)}</a>
                </div>
                <div className="flex items-center gap-1">
                  <CiVideoOn className="font-normal text-md text-[#98A2B3]"/>
                  <a href="#" className="font-normal text-md text-[#98A2B3]">{item.link2 ? ConcatLink(item.link1) : "-"}</a>
                </div>
              </div>
              <div className="flex items-center justify-between">
              <div className="flex gap-2 mt-4">
                <button className={`text-sm py-1 px-3 rounded-lg ${item.status === "todo" ? "disabled:" : "bg-gray-300 text-gray-800"} `}>To Do</button>
                <button onClick={() => UpdateStatus(index,"doing")} className={`text-sm py-1 px-3 rounded-lg ${item.status === "doing" ? "disabled:" : "bg-gray-300 text-gray-800"} hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600`}>Doing</button>
                <button onClick={() => UpdateStatus(index,"done")} className={`text-sm py-1 px-3 rounded-lg ${item.status === "done" ? "disabled:" : "bg-gray-300 text-gray-800"} hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600`}>Done</button>
              </div>
              <BiTrash className="mt-3 text-3xl text-[#98A2B3]"/>
              </div>
            </div>
          </div>
            </>
              )
            }
          })}
        </div>
        <div className='px-5 py-3 '>
        <h2 className="mb-10 text-md font-medium text-[#667085]">Doing</h2>
        {todos.map((item,index)=>{
            if (item.status === "doing") {
              return(
                <>
            <div key={index} className='card mb-10 bg-[#FFFFFF] rounded-md px-5 py-6 cursor-pointer'>
            <div>
              <h2 className="text-2xl font-bold text-black">{item.task}</h2>
              <p className="font-normal text-md text-[#98A2B3]">Created At {item.date}n</p>
              <p className="mt-4 font-medium text-black text-md">{item.desc}</p>
              <div className='flex items-center gap-2 mt-2'>
                <div className="flex items-center gap-1 ">
                  <IoIosLink className="font-normal text-md text-[#98A2B3]"/>
                  <a className="font-normal text-md text-[#98A2B3]" href="#">{ConcatLink(item.link1)}</a>
                </div>
                <div className="flex items-center gap-1">
                  <CiVideoOn className="font-normal text-md text-[#98A2B3]"/>
                  <a href="#" className="font-normal text-md text-[#98A2B3]">{item.link2 ? ConcatLink(item.link1) : "-"}</a>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 mt-4">
                  <button onClick={() => UpdateStatus(index,"todo")} className={`text-sm py-1 px-3 rounded-lg ${item.status === "todo" ? "disabled:" : "bg-gray-300 text-gray-800"} hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600 `}>To Do</button>
                  <button className={`text-sm py-1 px-3 rounded-lg ${item.status === "doing" ? "disabled:" : "bg-gray-300 text-gray-800"} `}>Doing</button>
                  <button onClick={() => UpdateStatus(index,"done")} className={`text-sm py-1 px-3 rounded-lg ${item.status === "done" ? "disabled:" : "bg-gray-300 text-gray-800"} hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600`}>Done</button>
                </div>
                <BiTrash className="mt-3 text-3xl text-[#98A2B3]"/>
              </div>
              
            </div>
          </div>
            </>
              )
            }
          })}
        </div>
        <div className='px-5 py-3'>
        <h2 className="mb-10 text-md font-medium text-[#667085]">Done</h2>
        {todos.map((item,index)=>{
            if (item.status === "done") {
              return(
                <>
            <div key={index} className='card bg-[#FFFFFF] rounded-md px-5 py-6 cursor-pointer'>
            <div>
              <h2 className="text-2xl font-bold text-black">{item.task}</h2>
              <p className="font-normal text-md text-[#98A2B3]">Created At {item.date}n</p>
              <p className="mt-4 font-medium text-black text-md">{item.desc}</p>
              <div className='flex items-center gap-2 mt-2'>
                <div className="flex items-center gap-1 ">
                  <IoIosLink className="font-normal text-md text-[#98A2B3]"/>
                  <a className="font-normal text-md text-[#98A2B3]" href="#">{ConcatLink(item.link1)}</a>
                </div>
                <div className="flex items-center gap-1">
                  <CiVideoOn className="font-normal text-md text-[#98A2B3]"/>
                  <a href="#" className="font-normal text-md text-[#98A2B3]">{item.link2 ? ConcatLink(item.link1) : "-"}</a>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 mt-4">
                <button onClick={() => UpdateStatus(index,"todo")} className={`text-sm py-1 px-3 rounded-lg ${item.status === "todo" ? "disabled:" : "bg-gray-300 text-gray-800"} hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600`}>To Do</button>
                <button onClick={() => UpdateStatus(index,"doing")} className={`text-sm py-1 px-3 rounded-lg ${item.status === "doing" ? "disabled:" : "bg-gray-300 text-gray-800"} hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-600`}>Doing</button>
                <button  className={`text-sm py-1 px-3 rounded-lg ${item.status === "done" ? "disabled:" : "bg-gray-300 text-gray-800"} `}>Done</button>
              </div>
              <BiTrash className="mt-3 text-3xl text-[#98A2B3]"/>
              </div>
              
            </div>
          </div>
            </>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
