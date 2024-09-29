import React from 'react'
import DashboardLayout from './DashboardLayout'

const ChangePassword = () => {
  return (
    <DashboardLayout>
  <div className='bg-customLightBlue min-h-screen w-full overflow-x-hidden relative'>
    <div className="bg-white lg:w-[80%] w-[95%] left-2 top-12 relative lg:left-12 p-4 rounded-md">
        <h3 className='font-bold text-base'>Change Password</h3>

        <div className="grid gap-4 grid-cols-1">
            <div className='flex gap-5 lg:gap-16 lg:py-4'>
            <label className='text-customGray whitespace-nowrap'>Old Password</label>
            <input type="oldpassword"  className='border border-lightGray outline-none lg:w-[30%] pl-4 p-1.5 rounded-md'/>
            </div>
            <div className='flex gap-4 lg:gap-14'>
            <label className='text-customGray whitespace-nowrap'>New Password</label>
            <input type="newpassword" className='border border-lightGray outline-none  lg:w-[30%] pl-4 p-1.5 rounded-md'/>
            </div>
           
        </div> 
        <div className='pt-5'>
        <button className='border p-2 text-customDeepBlue font-normal text-base relative left-32 lg:left-[19%]  border-customDeepBlue rounded-md '>Change Password</button>

        </div>
    </div>
        
        </div>
        </DashboardLayout>
  
  )
}

export default ChangePassword