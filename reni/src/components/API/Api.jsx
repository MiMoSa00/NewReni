import React, {useState} from 'react'
import DashboardLayout from '../DashboardLayout'
import { BsThreeDots } from 'react-icons/bs';
import { IoMdEye } from 'react-icons/io';
import { IoWarningOutline } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const Api = () => {

  const apiData = [
    {
      apiName: "Reni Finance",
      Token: "XXXX XXXX XXXX",
      status: 'Success',
      Time: "18 May, 2024 - 5:00PM",
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
  <div className='bg-customLightBlue min-h-screen w-full overflow-x-hidden relative'>
  <div className='px-1 py-4 lg:pl-4 relative lg:left-[6%]'>
        <div className='bg-white lg:w-[86%]   rounded-md p-4'>
          <div>
            <div className='flex justify-between items-center'>
              <h4 className='font-semibold text-lg'>API</h4>
              <BsThreeDots onClick={toggleDropdown3} className='relative cursor-pointer' />
            {dropdownVisible3 && (
              <ul className='absolute top-[10%] lg:top-[18%] border border-custom z-30 right-2 lg:right-24 rounded-md p-4 bg-white'>
                <li className='api-item'>Generate new API </li>
                <li className='api-item'>Block API</li>
              </ul>
            )}
            </div>
            <div className="text-orange-500 border  border-orange-500 rounded-md gap-3 lg:p-2 flex items-center">
            <IoWarningOutline className="flex-shrink-0 text-xl" />
            <p className="text-sm">
              Api tokens can be used to control your whole account and use features added in the future. Be careful when using them!
            </p>
          </div>
          </div>
          <div className='py-2 lg:flex lg:justify-between '>
            <div className='flex items-center gap-8  py-3 lg:py-0 lg:grid'>
            <p className='text-lightGray font-normal text-lg'>Name</p>
            <h3 className='font-semibold text-lg lg:-mt-16'>Fireswitch Technologies LTD</h3>
            </div>
           <div className='flex items-center lg:pl-5 xl:left-16 relative gap-11 lg:grid'>
           <p className='text-lightGray font-normal text-lg'>Type</p>
           <button className='lg:-mt-16 border border-customGreen text-customGreen text-base font-medium px-2 rounded-lg'>Live Key</button>
           </div>
           <div className='flex items-center lg:pr-12 gap-[3.2rem] py-3 lg:grid'>
           <p className='text-lightGray font-normal text-lg'>Key</p>
           <p className='font-medium text-lg lg:-mt-16'>XXXX XXXX XXXX</p>
           </div>
           <div className='flex items-center gap-5 lg:grid'>
             <p className='text-lightGray font-normal text-lg'>Created</p>
            <h3 className='font-medium text-lg lg:-mt-16'>18 May, 2024</h3>
           </div>
           <div className='flex lg:hidden border-b-2 border-lightGray items-center gap-12 text-lightGray py-3'>
            <p className='font-normal text-lg'>View</p>
            <IoMdEye className='font-bold text-3xl lg:-mt-16'/>
           </div>
          </div>
          <div className='py-2 lg:flex lg:justify-between '>
            <div className='flex items-center gap-8  py-3 lg:py-0 lg:grid'>
            <p className='text-lightGray font-normal text-lg lg:hidden'>Name</p>
            <h3 className='font-semibold text-lg lg:-mt-16'>Fireswitch Technologies LTD</h3>
            </div>
           <div className='flex items-center lg:pl-5 relative xl:left-16 gap-11 lg:grid'>
           <p className='text-lightGray font-normal text-lg lg:hidden'>Type</p>
           <button className='lg:-mt-16 border border-customGray text-customGray text-base font-medium px-2 rounded-lg'>Test Key</button>
           </div>
           <div className='flex items-center lg:pr-12 gap-[3.2rem] py-3 lg:grid'>
           <p className='text-lightGray font-normal text-lg lg:hidden'>Key</p>
           <p className='font-medium text-lg lg:-mt-16'>XXXX XXXX XXXX</p>
           </div>
           <div className='flex items-center gap-5 lg:grid'>
             <p className='text-lightGray font-normal text-lg lg:hidden'>Created</p>
            <h3 className='font-medium text-lg lg:-mt-16'>18 May, 2024</h3>
           </div>
           <div className='flex    items-center gap-12 lg:hidden text-lightGray py-3'>
            <p className='font-normal text-lg lg:hidden'>View</p>
            <IoMdEye className='font-bold text-3xl lg:-mt-16'/>
           </div>
          </div>
        </div>
        </div>
        <div className='p-1 relative lg:left-[5.5%]  pl-1 lg:w-[87%] pb-4'>
     <div className='bg-white p-4 rounded-md '>
          <div className='flex justify-between'>
            <h4>API Stats</h4>
            <BsThreeDots onClick={toggleDropdown2} className='relative cursor-pointer' />
              {dropdownVisible2 && (
                 <ul className='absolute lg:top-[15%] border border-custom rounded-md w-1/6 top-[8%] z-30 right-6 p-4 bg-white'>
                 <li className='api-item'>Hide</li>
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
     <div className="p-1 pl-1 lg:w-[86%] w-full relative lg:left-[7%] lg:pl-0 overflow-x-scroll lg:overflow-x-hidden pb-[100px]">
  <div className="bg-white p-4 rounded-md overflow-x-scroll lg:overflow-x-hidden w-[100%] flex justify-between">
    <table className="w-full">
      <thead>
        <tr className="text-lightGray ">
          <th className="text-left px-1 py-1 font-medium text-sm">Name</th>
          <th className="text-left px-4 py-1 lg:pl-16 font-medium text-sm">Token</th>
          <th className="text-left px-4 py-1 lg:left-[4%] xl:left-[9%] relative font-medium text-sm">Status</th>
          <th className="text-left px-4 py-1 lg:left-[5%] xl:left-[11%] relative font-medium text-sm">Time</th>
          <th className="lg:right-[4%] right-10 xl:left-[1%] relative pl-10 py-1 whitespace-nowrap font-medium text-sm">Show more</th>
        </tr>
      </thead>
      <tbody>
        {apiData.map((item, index) => (
          <React.Fragment key={index}>
            <tr className="">
              <td className="pr-4  py-1 whitespace-nowrap lg:left-4 relative">{item.apiName}</td>
              <div className='lg:w-[10%]   lg:pl-12'>
              <td className="px-4 py-1  whitespace-nowrap lg:text-right font-medium">{item.Token}</td>

              </div>
              <td className="px-1 py-1 whitespace-nowrap">
                <div className='bg-customGreen rounded-2xl  lg:left-[60%] xl:left-[100%]  relative text-center text-sm text-white'>{item.status}</div>
              </td>
              <td className="px-4 py-1  lg:left-8 relative text-right whitespace-nowrap">{item.Time}</td>
              <td
                className="text-right lg:left-[2%] text-customGray xl:left-[7%] font-bold relative pl-12 py-2 cursor-pointer"
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

        </div>
        </DashboardLayout>   
  )
}

export default Api