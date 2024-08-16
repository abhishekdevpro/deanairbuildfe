import React, { useState } from 'react';
import axios from 'axios';

function Payment1() {

    
  

  return (
    <div className="container mx-auto p-4 text-center" >
    <div className="overflow-x-auto">
      <table className="min-w-full bg-dark text-black rounded-md text-center">
        <thead>
          <tr className='bg-violet-300'>
          <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Number</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Service Name</th>
            <th className="py-2 px-4">Received Amount</th>
        
            <th className="py-2 px-4">Remark</th>
       
          </tr>
        </thead>
        <tbody>
        
            <tr className="border-t border-gray-700 text-center">
            <td className="py-2 px-4">20/07/2024</td>
              <td className="py-2 px-4"> Jhon Doe</td>
              <td className="py-2 px-4">
               +1 123 456789
              </td>
              <td className="py-2 px-4">
                myResume Intellect@support.in
              </td>
              <td className="py-2 px-4">-</td>
              <td className="py-2 px-4">- </td>
              <td className="py-2 px-4">- </td>
              
     

            
            </tr>
          
        </tbody>
      </table>
    </div>
  </div>
);
};

export default Payment1;
