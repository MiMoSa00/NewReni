import React, { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import small from '../assets/smallz.png';
import { FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';
import { createPortal } from 'react-dom';

const TopBar = ({ show, set }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleModal = () => {
    set(!show);
    console.log(show);
  };

  return (
    <div className="bg-white w-full top-0 sticky flex items-center gap-10 p-2"> {/* Ensure full width and padding */}
      {/* Hamburger Icon */}
      {!show && (
        <div className="lg:hidden">
          <FaBars className="text-black text-2xl cursor-pointer" onClick={toggleModal} />
        </div>
      )}
      <div className="flex items-center lg:w-full w-4/5 justify-end gap-8">
        <div className="flex items-center gap-3"> {/* flex-grow to ensure full width */}
          <AiOutlineBell className="font-bold text-lightGray" />
          <img src={small} className="lg:w-7 lg:h-7 w-5 h-5 max-w-full" alt="small logo" /> {/* Added max-w-full */}
          <div className="text-black -ml-3">
            <h2 className="lg:font-medium font-normal text-xs">Fireswitch Technologies</h2>
            <p className="text-xs">Developer</p>
          </div>
        </div>

        {/* Dropdown Section */}
        <div onClick={toggleDropdown} className="relative">
          {dropdownVisible ? <FaChevronUp className="text-lightGray" /> : <FaChevronDown className="text-lightGray" />}
          {dropdownVisible && createPortal (
            <ul className="bg-white absolute right-7 lg:right-20 top-10 z-[99] w-48 shadow-md p-2 rounded-md"> {/* Changed right-2/4 to right-0 */}
              <li className="flex items-center gap-2 p-1 hover:bg-gray-200">
                <img src={small} className="w-5 h-5 lg:w-7 lg:h-7 max-w-full" alt="small logo" /> {/* Added max-w-full */}
                Sheda House
              </li>
              <p className="text-xs pl-6 text-gray-500">shedahouse.com</p>
              <li className="flex items-center gap-2 p-1 hover:bg-gray-200">
                <img src={small} className="w-5 h-5 lg:w-7 lg:h-7 max-w-full" alt="small logo" /> {/* Added max-w-full */}
                Renitechnologies
              </li>
              <p className="text-xs pl-6 text-gray-500">renitechnologies.com</p>
            </ul>, 
            document.body
          )}
        </div>

        {/* Grid Icon (Visible on large screens) */}
        <TfiLayoutGrid3Alt className="text-gray-500 hidden lg:flex" />
      </div>
    </div>
  );
};

export default TopBar;
