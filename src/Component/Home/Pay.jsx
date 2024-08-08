// import React from 'react'
// import './Home.css'

// function subscription() {
//   return (
//     <>

//      <div>
//       <div className=' bg-slate-50 '>
//         <h1 className=' text-center font-bold text-3xl py-5'>Want To Supercharge Your Career Growth With Our AI Tool?</h1>
//         {/* <div className='  mx-auto md:w-[600px] py-3'>Get started at no cost to tap into Abroadium's premium features and power up your job search. Experience our amazing AI enabled easy to use dashboard.</div> */}
//         <div className=' px-2 flex justify-center'>
          
//             <div className=' border-t-4 border-t-gray-900 shadow-xl shadow-gray-700 rounded-lg px-3 py-3'>
//               <h1 className=' font-bold text-xl'>Perfect Resume Builder</h1>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500 "></i>AI Score</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>AI Parsing</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>Resume Building</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>AI Enhancer</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>Match & Apply</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>AI Skill Test</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>Skill Badges</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>& More</div>
//             </div>
            
//         </div>
//         <div className=' flex justify-center mt-6 mb-3'>
//         <button className=' px-3 py-3 rounded-2xl font-semibold text-white shadow-xl shadow-slate-800' id="home_third">Get Started For Free</button>
//         </div>
        
//         </div>
//         </div> 
//     </>
//   )
// }

// export default subscription


import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Subscription = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-bold text-3xl py-5">Want To Supercharge Your Career Growth With Our AI Tool?</h1>
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
            <h1 className="font-bold text-xl mb-4">Perfect Resume Builder</h1>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>AI Score</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>AI Parsing</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>Resume Building</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>AI Enhancer</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>Match & Apply</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>AI Skill Test</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>Skill Badges</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>& More</span>
            </div>
            <div className="flex justify-center mt-6">
            <Link to="/dashboard">
              <button className="px-6 py-3 rounded-2xl font-semibold text-white bg-blue-500 hover:bg-blue-600 shadow-md">
                Get Started For Free
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

