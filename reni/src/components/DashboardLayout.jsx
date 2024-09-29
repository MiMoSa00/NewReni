import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

const DashboardLayout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className='flex h-[100vh]'>
          <Sidebar show = {showSidebar} set = {setShowSidebar} />
          <div className='w-full h-[100vh] overflow-hidden relative'>
         <TopBar set = {setShowSidebar} show = {showSidebar} />
         <div className='h-[100vh] overflow-y-scroll'>
         {children}
         </div>
       
        
        
          </div>
    </div>
  )
}

export default DashboardLayout