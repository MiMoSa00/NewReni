import React, {useState} from 'react'

import { BsThreeDots } from 'react-icons/bs';
import { IoMdEye } from 'react-icons/io';
import { IoWarningOutline } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import DashboardLayout from './DashboardLayout';
import WebModal from './WebModal';



const Webhook = () => {

  const apiData = [
    {
      apiName: "Reni Finance",
      Token: "XXXX XXXX XXXX",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    },
    {
      apiName: "Reni Finance",
      Token: "XXXX XXXX XXXX",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    },
    {
      apiName: "Reni Finance",
      Token: "XXXX XXXX XXXX",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    },
    {
      apiName: "Reni Finance",
      Token: "XXXX XXXX XXXX",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    },
    {
      apiName: "Reni Finance",
      Token: "XXXX XXXX XXXX",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    },
    {
      apiName: "Reni Finance",
      Token: "XXXX XXXX XXXX",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
      Date: "18 May, 2024 - 5:00PM",
      description: [
        {
          ip: '127.00127.45',
          Duration: '2ms',
          statusCode: 200
        }
      ]
    }
  ];

  const [dropdownVisible1, setDropdownVisible1] = useState(
    new Array(apiData.length).fill(false)
  );
  const [openModal, setOpenModal] = useState(false);

  const toggleDropdown1 = (index) => {
    setDropdownVisible1((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
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
        
            {openModal && <WebModal closeModal={setOpenModal} />}
            
  <div className='bg-customLightBlue min-h-screen w-full overflow-x-hidden relative'>
  <div className='px-2 py-4 lg:pl-4 relative lg:left-20'>
        <div className='bg-white lg:w-[86%]  rounded-md px-3 py-2'>
          <div>
            <div className='flex justify-between items-center'>
              <h4 className='font-bold text-base'>Webhooks</h4>
              <BsThreeDots onClick={toggleDropdown3} className='relative cursor-pointer' />
            {dropdownVisible3 && (
              <ul className='absolute top-[16%] xl:top-[29%] lg:top-[26%] border border-custom z-30 right-2 lg:right-28 xl:right-28 rounded-md p-4 bg-white'>
                
                <li className='cursor-pointer'  onClick={() => {
                    setOpenModal(true)
                  }}>Edit webhook</li>
                 
              
                <li className='cursor-pointer'>Block webhook</li>
              </ul>
            )}
            </div>
            
          </div>
          <div className='py-2 lg:flex lg:justify-between items-center'>
            <div className='flex items-center gap-8  w-[50%] py-3  lg:grid lg:gap-3'>
            <p className='text-lightGray font-normal text-lg'>Name</p>
            <h3 className='font-medium text-base  whitespace-nowrap'>Fireswitch Technologies LTD</h3>
            </div>
          
           <div className='flex items-center  gap-[3.7rem] py-1 lg:grid lg:gap-3'>
           <p className='text-lightGray font-normal text-lg'>Url</p>
           <p className='font-medium text-base '>Fireswitchtechnologies.com</p>
           </div>
           <div className='flex items-center gap-8 lg:grid py-3 lg:gap-3'>
             <p className='text-lightGray font-normal text-lg'>Created</p>
            <h3 className='font-medium text-base '>18 May, 2024</h3>
           </div>
           <div className='flex lg:hidden   items-center gap-12 lg:mr-1 text-lightGray py-3'>
            <p className='font-normal text-lg lg:hidden'>View</p>
            <IoMdEye className='font-bold text-3xl lg:-mt-16'/>
           </div>
          </div>
          
        </div>
        </div>
       
     <div className="p-2 pl-4 lg:w-[86%] relative lg:left-20 w-full overflow-x-scroll lg:overflow-x-hidden pb-4 ">
  <div className="bg-white p-4 rounded-md overflow-x-scroll lg:overflow-x-hidden w-[100%] flex justify-between">
    <table className="w-full">
      <thead>
        <tr className="text-lightGray ">
          <th className="text-left left-4 relative py-1 font-medium text-sm">Name</th>
          <th className="text-left left-4 py-1 xl:left-44 lg:left-11  relative font-medium text-sm">Status</th>
          <th className="text-left left-4 relative py-1 lg:left-10  xl:left-44 font-medium text-sm">Created Date</th>
          <th className="text-left left-4 py-1 lg:left-[0%]  xl:left-24 relative font-medium text-sm">Last Called</th>
          <th className="lg:right-24 xl:right-0 right-10 relative pl-10 py-1 whitespace-nowrap font-medium text-sm">Show more</th>
        </tr>
      </thead>
      <tbody>
        {apiData.map((item, index) => (
          <React.Fragment key={index}>
            <tr className="">
              <td className="pr-4  py-1 whitespace-nowrap lg:left-4 relative">{item.apiName}</td>
              <td className="px-4 py-1 whitespace-nowrap">
                <div className='bg-customGreen rounded-2xl lg:left-6 xl:left-36 px-2  relative text-center text-sm text-white'>{item.status}</div>
              </td>
              <div className='lg:w-[10%]   lg:pl-12'>
              <td className="px-4 py-1  whitespace-nowrap lg:right-7 xl:left-28 relative ">{item.Date}</td>
              </div>
              <td className="px-4 py-1 lg:right-9  xl:left-8 relative text-right whitespace-nowrap">{item.Time}</td>
              <td
                className="text-right  lg:pl-0 text-lightGray xl:pl-28 pl-12 py-2 cursor-pointer"
                onClick={() => toggleDropdown1(index)}
              >
                {dropdownVisible1[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </td>
            </tr>
            {dropdownVisible1[index] && (
              <tr className="bg-OffWhite">
                <td colSpan="5" className="px-4 py-2">
                  <div className="flex ">
                    <p className="text-lightGray pl-1 pr-8" >
                      IP Address: <span className="text-black font-medium text-base" >{item.description[0].ip}</span>
                    </p>
                    <p className="text-lightGray pl-1 pr-8">
                      Duration: <span className="text-black font-medium text-base">{item.description[0].Duration}</span>
                    </p>
                    <p className="text-lightGray pl-1 pr-8">
                      Status Code: <span className="text-black font-medium text-base">{item.description[0].statusCode}</span>
                    </p>
                    {/* <p className="ipi" style={{ color: "#757E9F" }}>
                      Token: <span className="ipsi" style={{ color: "black", fontWeight: "500", fontSize: "16px" }}>{item.Token}</span>
                    </p>
                    <p className="ipi" style={{ color: "#757E9F" }}>
                      Date: <span className="ipsi" style={{ color: "black", fontWeight: "500", fontSize: "16px" }}>{item.Time}</span>
                    </p> */}
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
</div>

<div className='p-2  pl-4 lg:w-[86%] pb-[100px] relative lg:left-20'>
     <div className='bg-white p-4 rounded-md '>
          <div className='flex justify-between'>
            <h4 className='font-bold text-base'>Analytics</h4>
            <BsThreeDots onClick={toggleDropdown2} className='relative cursor-pointer' />
              {dropdownVisible2 && (
                 <ul className='absolute xl:top-[12%] lg:top-[14%] border border-custom rounded-md w-1/6 top-[6%] z-30 right-4 p-4 bg-white'>
                 <li className=''>Hide</li>
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
  )
}

export default Webhook