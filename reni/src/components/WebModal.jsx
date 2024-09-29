import React from 'react'
// import  './WebModal.css';

const WebModal = ({ closeModal }) => {
  return (
    <div className='w-full bg-customBlack  absolute h-full z-40 top-0 left-0'>
        <div className="bg-white lg:w-[29%] w-[90%] left-5 p-4 top-[35%] lg:top-[40%] relative lg:left-[20%] rounded-md">
            <div className='flex justify-between items-center'>
            <h2 className='font-medium text-base'>Edit webhook</h2>
            <button className="text-black"  onClick={() =>  closeModal(false)}>X</button>
            </div>
   
        <div className="py-3">
           
            <label className='text-DeepGray'>Enter url for webhook</label>
            <input className='border border-lightGray w-full rounded-md pl-3 py-2 outline-none' type="text"  />

      
        </div>
        <button className='bg-customDeepBlue text-white p-2 rounded-md'>Connect webhook</button>
              </div>

    </div>
  )
}

export default WebModal