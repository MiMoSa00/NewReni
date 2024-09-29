import React, {useState} from 'react';
import DashboardLayout from './DashboardLayout';
import dash from '../assets/logo.png';
import { GoPlus } from 'react-icons/go';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdEye } from 'react-icons/io';
import Modal from './Modal';



const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dropdownVisible4, setDropdownVisible4] = useState(false);
  const toggleDropdown4 = () => {
    setDropdownVisible4(!dropdownVisible4);
  };
  const [dropdownVisible3, setDropdownVisible3] = useState(false);
  const toggleDropdown3 = () => {
    setDropdownVisible3(!dropdownVisible3);
  };
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const toggleDropdown2 = () => {
    setDropdownVisible2(!dropdownVisible2);
  };
  return (
    <DashboardLayout>
      <div className="bg-customLightBlue min-h-screen w-full  overflow-x-hidden relative"> 
        <div className="lg:flex grid grid-cols-1 gap-8 py-4 px-2 sm:px-4"> {/* Reduced padding on small screens */}
    
          <div className="bg-white lg:w-1/3 w-full rounded-md p-4"> {/* Use w-full on small screens */}
            <p className="font-medium">Wallet Balance</p>
            <h2 className='font-semibold text-7xl'>0.00</h2>
            <p>Kuda Bank (1234 2345 7890)</p>
          </div>

          <div className="bg-white lg:w-1/2 w-full rounded-md p-4"> {/* Use w-full on small screens */}
            <p className='mb-6 font-medium'>Tools</p>
            <div className="flex gap-4 lg:gap-2 lg:justify-center flex-wrap"> {/* Added flex-wrap to prevent overflow */}
              <img src={dash} alt="Tool" className="w-12 h-12 lg:w-20 lg:h-20"/>
              <img src={dash} alt="Tool" className="w-12 h-12 lg:w-20 lg:h-20" />
              <img src={dash} alt="Tool" className="w-12 h-12 lg:w-20 lg:h-20" />
              <img src={dash} alt="Tool" className="w-12 h-12 lg:w-20 lg:h-20" />
              <img src={dash} alt="Tool" className="w-12 h-12 lg:w-20 lg:h-20" />
            </div>
          </div>

        </div>
        <div className='px-2 lg:px-4 lg:w-[87%]'>
        <div className="bg-white  w-full rounded-md p-2">
         <div className='flex justify-between p-2'>
          <h2 className='font-medium text-lg'>Business</h2>
          <button onClick={() => {
              setOpenModal(true)
            }} className='flex items-center bg-customDeepBlue text-white p-2 rounded-md'>Create New Business <GoPlus className=''  /> </button>
               {openModal && <Modal closeModal={setOpenModal}/>}
          </div> 
          <div className='lg:grid gap-2 px-2 lg:grid-cols-2 grid grid-cols-1'>
          <h5 className='font-semibold text-lg'>Fireswitch Technologies LTD</h5>
          <div className='flex justify-between'>
          <a href="https://www.fireswitch.tech">https://www.fireswitch.tech</a>
            <BsThreeDots onClick={toggleDropdown4} className='relative' />
            {dropdownVisible4 && (
              <ul className='absolute top-[28%] lg:top-[32%] z-30 lg:right-12 rounded-md right-2 p-4 bg-white'>
                <li className='cursor-pointer'>Unlink Business</li>
                <li className='cursor-pointer'>Edit Business</li>
              </ul>
            )}
            </div>   
          </div>
        </div>
        </div>
        <div className='px-2 py-4 lg:pl-4 '>
        <div className='bg-white lg:w-[86%]  rounded-md p-3'>
          <div>
            <div className='flex justify-between items-center'>
              <h4 className='font-semibold text-lg'>API</h4>
              <BsThreeDots onClick={toggleDropdown3} className='relative' />
            {dropdownVisible3 && (
              <ul className='absolute top-[31%] lg:top-[39%] z-30 right-2 lg:right-12 rounded-md p-4 bg-white'>
                <li className='cursor-pointer'>Generate new API </li>
                <li className='cursor-pointer'>Block API</li>
              </ul>
            )}
            </div>
          </div>
          <div className='py-2 lg:flex lg:justify-between '>
            <div className='flex items-center gap-8  py-3 lg:py-0 lg:grid'>
            <p className='text-lightGray font-normal text-lg'>Name</p>
            <h3 className='font-semibold text-lg lg:-mt-16'>Fireswitch Technologies LTD</h3>
            </div>
           <div className='flex items-center gap-11 lg:grid'>
           <p className='text-lightGray font-normal text-lg'>Type</p>
           <button className='lg:-mt-16 border border-customGreen text-customGreen text-base font-medium px-2 rounded-lg'>Live Key</button>
           </div>
           <div className='flex items-center gap-[3.2rem] py-3 lg:grid'>
           <p className='text-lightGray font-normal text-lg'>Key</p>
           <p className='font-medium text-lg lg:-mt-16'>XXXX XXXX XXXX</p>
           </div>
           <div className='flex items-center gap-5 lg:grid'>
             <p className='text-lightGray font-normal text-lg'>Created</p>
            <h3 className='font-medium text-lg lg:-mt-16'>18 May, 2024</h3>
           </div>
           <div className='flex lg:grid lg:border-none border-b-2 border-lightGray items-center gap-12 text-lightGray py-3'>
            <p className='font-normal text-lg'>View</p>
            <IoMdEye className='font-bold text-3xl lg:-mt-16'/>
           </div>
          </div>
          <div className='py-2 lg:flex lg:justify-between '>
            <div className='flex items-center gap-8  py-3 lg:py-0 lg:grid'>
            <p className='text-lightGray font-normal text-lg lg:hidden'>Name</p>
            <h3 className='font-semibold text-lg lg:-mt-16'>Fireswitch Technologies LTD</h3>
            </div>
           <div className='flex items-center gap-11 lg:grid'>
           <p className='text-lightGray font-normal text-lg lg:hidden'>Type</p>
           <button className='lg:-mt-16 border border-customGray text-customGray text-base font-medium px-2 rounded-lg'>Test Key</button>
           </div>
           <div className='flex items-center gap-[3.2rem] py-3 lg:grid'>
           <p className='text-lightGray font-normal text-lg lg:hidden'>Key</p>
           <p className='font-medium text-lg lg:-mt-16'>XXXX XXXX XXXX</p>
           </div>
           <div className='flex items-center gap-5 lg:grid'>
             <p className='text-lightGray font-normal text-lg lg:hidden'>Created</p>
            <h3 className='font-medium text-lg lg:-mt-16'>18 May, 2024</h3>
           </div>
           <div className='flex lg:grid   items-center gap-12 lg:mr-1 text-lightGray py-3'>
            <p className='font-normal text-lg lg:hidden'>View</p>
            <IoMdEye className='font-bold text-3xl lg:-mt-16'/>
           </div>
          </div>
        </div>
        </div>
     <div className='p-2  pl-4 lg:w-[86%] pb-[100px]'>
     <div className='bg-white p-4 rounded-md '>
          <div className='flex justify-between'>
            <h4 className='font-medium'>API Stats</h4>
            <BsThreeDots onClick={toggleDropdown2} className='relative' />
              {dropdownVisible2 && (
                 <ul className='absolute lg:top-[68%] rounded-md w-1/6 top-[64%] z-30 right-6 p-4 bg-white'>
                 <li className='cursor-pointer'>Hide</li>
               </ul>
                
              )}
          </div>
          <div className='grid grid-cols-1 gap-3 lg:flex lg:justify-between  justify-center p-4'>
            <div className='bg-customLightBlue text-center py-10 w-full  rounded-md'>
              <h3 className='font-semibold text-4xl'>80</h3>
              <p>API Calls</p>
            </div>
            <div className='bg-customLightBlue text-center py-10 w-full rounded-md '>
            <h3 className='font-semibold text-4xl'>60</h3>
            <p className='text-customGreen'>Success</p>
            </div>
            <div className='bg-customLightBlue text-center py-10 w-full rounded-md'>
            <h3 className='font-semibold text-4xl'>10</h3>
            <p className='text-red-600'>Fails</p>
            </div>
          </div>
        </div>
     </div>
       
       
       
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
