// File: Modal.js

import  { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../recoil/TodoAtom';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [todos,setTodos] = useRecoilState(todoState)
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [zoomLink, setZoomLink] = useState('');

  const formatDate = (date) => {
    // Array untuk menyimpan nama bulan
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    // Mendapatkan tanggal dari objek Date
    const day = date.getDate();
  
    // Menambahkan sufiks "st", "nd", "rd", atau "th" berdasarkan nilai tanggal
    let daySuffix;
    if (day >= 11 && day <= 13) {
      daySuffix = "th";
    } else {
      switch (day % 10) {
        case 1: daySuffix = "st"; break;
        case 2: daySuffix = "nd"; break;
        case 3: daySuffix = "rd"; break;
        default: daySuffix = "th";
      }
    }
  
    // Mendapatkan nama bulan dari objek Date
    const monthName = months[date.getMonth()];
  
    // Menggabungkan tanggal, sufiks, dan nama bulan
    return `${day}${daySuffix} ${monthName}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello")
    const currentDate = new Date();
    const date = formatDate(currentDate);
    const data = {task:taskName,desc:taskDescription,date:date,link1:projectLink,link2:zoomLink,status:'todo'}
    const newTodos = [...todos,data]
    setTodos(newTodos);
    setTaskName('');
    setTaskDescription('');
    setProjectLink('');
    setZoomLink('');
  };

  return (
    <>
      {isOpen && (
        <div className=" modal-overlay">
          <div className="w-full modal-content bg-[#6b7b9c] text-black">
            <h2 className='mb-5 text-4xl font-bold text-center text-white'>Add New Task</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className='text-xl font-medium text-white' htmlFor="taskName">Task Name:</label>
                <input
                className='px-2 py-1 font-bold text-white bg-transparent border text-md '
                  type="text"
                  id="taskName"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className='text-xl font-medium text-white' htmlFor="taskDescription">Task Description:</label>
                <textarea
                  id="taskDescription"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  required
                  className='px-2 py-1 font-bold text-white bg-transparent border text-md '
                />
              </div>
              <div className="form-group">
                <label className='text-xl font-medium text-white' htmlFor="projectLink">Project Link:</label>
                <input
                  type="url"
                  id="projectLink"
                  value={projectLink}
                  onChange={(e) => setProjectLink(e.target.value)}
                  className='px-2 py-1 font-bold text-white bg-transparent border text-md '
                />
              </div>
              <div className="form-group">
                <label className='text-xl font-medium text-white' htmlFor="zoomLink">Zoom Link:</label>
                <input
                  type="url"
                  id="zoomLink"
                  value={zoomLink}
                  onChange={(e) => setZoomLink(e.target.value)}
                  className='px-2 py-1 font-bold text-white bg-transparent border text-md '
                />
              </div>
              <div className="mt-5 button-group">
                <button type="submit" className="px-5 py-2 mr-2 bg-blue-300 rounded-lg submit-button hover:bg-blue-600 ">Submit</button>
                <button type="button" onClick={onClose} className="px-5 py-2 mr-2 bg-red-600 rounded-lg close-button">Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
