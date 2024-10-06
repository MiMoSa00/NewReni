import React from 'react'

const Modal = ({ closeModal}) => {
  return (
    <div className='w-full bg-customBlack overflow-y-scroll absolute h-full z-40 top-0 left-0'>
      <div className='pb-[100px]'> 
         <div className='bg-white lg:w-[39%] top-36 w-[90%] left-5 p-4  lg:top-10 relative lg:left-56 xl:left-80 rounded-md'>
           <div className='text-right'>
           <button className="bg-transparent text-black  font-medium text-xl"onClick={() =>  closeModal(false)}>X</button>
            </div>
            <div>
               <h2 className='text-sm  font-bold'> Business Information</h2> 
               <form className='grid grid-cols-1 gap-3 lg:gap-2 py-4'>
                <label className='text-DeepGray'>Business Name </label>
                <input type="text" className='border border-lightGray rounded-md p-1 px-3 outline-none' placeholder='Enter your business name' />
                <label className='text-DeepGray'>Business Phone Number</label>
                        <input type="text" className='border border-lightGray rounded-md p-1 px-3 outline-none' placeholder='Enter your business phone number' />

                        <label className='text-DeepGray'>Number of Employees </label>
                        <input type="text" className='border border-lightGray rounded-md p-1 px-3 outline-none' placeholder='Enter your number of employees' />

                        <label className='text-DeepGray'>Business Description</label>
                     <textarea  id="text" className='border border-lightGray rounded-md p-1 px-3 outline-none'
                     placeholder='Enter your business description'rows="10" cols="50" />
                      <label className='text-DeepGray'>Address of the Business</label>
                      <input type="text" className='border border-lightGray rounded-md p-1 px-3 outline-none' placeholder='Enter your business’s address' />  
               </form>
               <button className='bg-customDeepBlue text-white w-full py-3 rounded-md text-lg font-normal'>Create Business</button>
                </div> 

        </div>
        </div>
       
    </div>
  )
}

export default Modal