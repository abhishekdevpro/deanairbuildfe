import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Notification1 = () => {
  const boxes = [
    <Link to="/admin/templatelist" key="box1">
      <div className="bg-violet-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-96 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
      <div className='text-5xl'>📝</div><br/>Template List
      </div>
    </Link>,
    <Link to="/box2" key="box2">
      <div className="bg-violet-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-96 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
      <div className='text-5xl'>📑</div><br/>Cover Letters
      </div>
    </Link>,
    <Link to="/box2" key="box2">
    <div className="bg-violet-900 hover:bg-gray-300 hover:text-black rounded-lg shadow-md pt-16 w-96 h-60 text-center text-white cursor-pointer text-3xl font-semibold">
    <div className='text-5xl'>📑</div><br/>Resumes
    </div>
  </Link>,
    
  ];

  return (
    <div className="p-2 md:p-6 flex flex-wrap justify-center gap-20 mt-20">
      {boxes.map((box, index) => box)}
    </div>
  );
};

export default Notification1;