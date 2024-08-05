import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Payment() {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [courseID, setCourseID] = useState('');
  
    const handleChoosePlan = (plan, planPrice, planCourseID) => {
      setPrice(planPrice);
      setCourseID(planCourseID);
      setShowForm(true);
    };

    const [showForm2, setShowForm2] = useState(false);
    const [name2, setName2] = useState('');
    const [price2, setPrice2] = useState(0);
    const [courseID2, setCourseID2] = useState('');
  
    const handleChoosePlan2 = (plan, planPrice2, planCourseID2) => {
      setPrice2(planPrice2);
      setCourseID2(planCourseID2);
      setShowForm2(true);
    };
  
    
  

  return (
    <div className="min-h-screen bg-gray-300 flex p-6">
         
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <div className="text-center">
                  <p className="text-lg font-bold text-violet-900">Free</p>
                  <button className='bg-red-200 text-blue-900 p-2 px-6 rounded-lg m-4 disabled:'>Your Plan</button>
                </div>
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                <div className="text-center">
                  <p className="text-lg font-bold">Paid</p>
                  <span className=" text-violet-900 font-bold text-lg"> $49</span> <span className=" text-violet-900 ">/One Time Purchase</span><br/>
                <Link to="/dashboard/ai-resume-builder">
                <button
                    className='bg-blue-900 text-white p-2 rounded-lg m-2'
                    
                  >
                    Choose This Plan
                  </button>
                </Link>
                 
                </div>
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                <div className="text-center">
                  <p className="text-lg font-bold">Personal</p>
                  <span className=" text-violet-900 font-bold text-lg"> $69</span> <span className=" text-violet-900 ">/Month [Cancel any time]</span><br/>
                  <button
                   className='bg-red-200 text-blue-900 p-2 px-6 rounded-lg m-4 disabled:'
                    onClick={() =>('personal', 69, '123')}
                  >
                    Coming Soon
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
                        <tr className='text-center'>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600"> ✔️ Create optimized resumes</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600"> ✔️ Create optimized resumes</p>
                            </td>
                            
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600"> ✔️ Create optimized resumes</p>
                            </td>
                            
                        </tr>
                        
                        <tr className='text-center'>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✔️ Copy and paste content from site</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✔️ Copy and paste content from site</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✔️ Copy and paste content from site</p>
                            </td>
                        </tr>
                        <tr className='text-center'>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✔️ Unlimited resumes edits</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✔️ Unlimited resumes edits</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✔️ Unlimited resumes edits</p>
                            </td>
                        </tr>


                        <tr className='text-center'>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✖️ </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✔️ Save resume as pdf and docs</p>
                            </td>
                            
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✔️ Save resume as pdf and docs</p>
                            </td>
                            
                        </tr>
                        <tr className='text-center'>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✖️ </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✔️ Download fully formatted Resume</p>
                            </td>
                            
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✔️ Download fully formatted Resume</p>
                            </td>
                            
                        </tr>
                        <tr className='text-center'>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✖️ </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✖️ </p>
                            </td>
                            
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✔️ Unlimited resumes downloads</p>
                            </td>
                            
                        </tr>
                        <tr className='text-center'>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✖️ </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600">✖️ </p>
                            </td>
                            
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-600"> ✔️ Save multiple Variants of resumes</p>
                            </td>
                            
                        </tr>
                    </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white py-10 rounded-lg shadow-md w-96 text-center">
            <h2 className="text-xl font-bold mb-10">🛒 Checkout </h2>
            <form id="checkoutForm" action="https://api.perfectresume.ca/api/user/paypal/create-payment" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required className='border-2 rounded-lg m-2 p-3'/><br /><br />
        
        <span className=" text-violet-900 font-bold text-2xl "> $49</span> <span className=" text-violet-900 ">/One Time Purchase</span><br/>
        <input type="hidden" name="amount" defaultValue="49" />
        <input type="hidden" name="courseID" defaultValue="" />
        <button type="submit"  className='bg-yellow-500 text-white px-20 rounded-lg mt-10 p-3 font-bold'>🚚 Checkout </button>
      </form>
          </div>
        </div>
      )}
      {showForm2 && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white py-10 rounded-lg shadow-md w-96 text-center">
            <h2 className="text-xl font-bold mb-10">🛒 Checkout </h2>
            <form id="checkoutForm" action="https://api.perfectresume.ca/api/user/paypal/create-payment" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required className='border-2 rounded-lg m-2 p-3'/><br /><br />
        
        <span className=" text-violet-900 font-bold text-2xl "> $69</span> <span className=" text-violet-900 ">/Month [Cancel any time]</span><br/>
        <input type="hidden" name="amount" defaultValue="69" />
        <input type="hidden" name="courseID" defaultValue="" />
        <button type="submit"  className='bg-yellow-500 text-white px-20 rounded-lg mt-10 p-3 font-bold'>🚚 Checkout </button>
      </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
