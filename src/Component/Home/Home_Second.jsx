import React from 'react'
import Home_Third from './Home_Third'
import './Home.css'
import image1 from '../Home/images/1.png'
import image2 from '../Home/images/2.png'
import image3 from '../Home/images/3.png'
import image4 from '../Home/images/4.png'
import image5 from '../Home/images/5.png'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Home_Second() {

    const handleChoosePlan3 = () => {
        const amount = 269; // Fixed price
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
    
        if(!token){
            window.location.href="/login";
            return;
        }

        const payload = {
          amount,
          ResumeId: "9CN06189KH259320999", // Ensure the field name matches the API expectation
          Token: token || '' // Ensure the field name matches the API expectation
        };
    
        axios.post('https://api.resumeintellect.com/api/user/paypal/create-payment', payload, {
          headers: { 'Content-Type': 'application/json' }, // Use JSON content type
        })
        .then(response => {
          const data = response.data;
          if (data && data.data) {
            // Redirect to the PayPal URL provided in the response
            window.location.href = data.data;
          }
        })
        .catch(error => 
            console.error('Payment Error:', error));
      };
      

  return (
    <>
    
      <div className='  '>
      <section className="bg-white dark:bg-blue-200">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold bg-gray-800 rounded-2xl dark:text-white border p-3">Level Which is right for you?</h2>
          </div>
          <div className="space-y-4 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card */}
            
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">AI resume writer</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended &amp; premium support.</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$49</span>
                <span className="text-gray-500 dark:text-gray-400">/One Time Purchase</span>
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Create optimized resumes</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Copy and paste content from site</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Unlimited resume edits</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Save resume as pdf and docs</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Download fully formatted Resume</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                 
                </li>
              </ul>
              <a href="/dashboard/ai-resume-builder" className="text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Expert human writer</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">$269</span>
                <span className="text-gray-500 dark:text-gray-400">/Resume</span>
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Create optimized resumes</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Copy and paste content from site</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Unlimited resume edits</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Save resume as pdf and docs</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Download fully formatted Resume</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Unlimited resume downloads</span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Save multiple Variants of resumes</span>
                </li>
              </ul>
              <button
             
                className="text-white bg-primary-600 border hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                onClick={handleChoosePlan3} 
               >
                Get started</button>
            </div>
          </div>
        </div>
      </section>
      </div>

      <Home_Third/>
      
    </>
  )
}

export default Home_Second
