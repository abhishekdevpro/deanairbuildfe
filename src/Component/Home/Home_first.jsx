// import React from 'react'
// import './Home.css'
// import Home_Second from './Home_Second'
// import ImageSlider from './Image_slider'
// import Home_Image from './Home_Image'
// // import Slider from './Slider'
// import Slider_details from './Slider_details'

// function Home_first() {
//   return (
//     <>
//       <div className=' bg-gray-200 ' >
//         <div className=' py-9 px-5 flex gap-3 md:gap-10 md:justify-evenly items-center flex-col md:flex-row'>
//         <div className='  px-6 py-3' id='bghome'>
//               <Home_Image/>
//                             </div>
//             <div className='  px-3 py-3 md:w-[500px]'>
//                 <div className=' flex flex-col gap-4 '>
//                     <div className=' font-extrabold text-5xl font-sans'>AI Enabled, Perfect Resume Builder</div>
//                     <div className=' text-lg font-medium text-slate-700'>Resume Score, Enhanced Resume & much more. Now Apply Job with confidence with our all in one solution under one roof.</div>
//                     <div className=' flex flex-wrap gap-4'>
//                         <button className='  px-6 py-2 text-lg rounded-full font-bold hover:shadow-2xl hover:shadow-slate-500' id='home_third'> Sign Up!-It's 100% Free!</button>
//                         <button className=' text-black text-lg px-6 py-2 rounded-full  font-bold hover:shadow-2xl hover:shadow-slate-500 ' id='home_third'> Build your Resume</button>
//                     </div>
                    
                   
//                 </div>
//             </div>
            
//         </div>
//       </div>

//       {/* <Slider_details/> */}
     
//       <Home_Second/>
//     </>
//   )
// }

// export default Home_first


import React from 'react';
import './Home.css';
import Home_Second from './Home_Second';
import Home_Image from './Home_Image';

function Home_first() {
  return (
    <>
      <div className='bg-gray-200'>
        <div className='py-9 px-5 w-screen flex gap-3 md:gap-10 md:justify-evenly items-center flex-col md:flex-row'>
          <div className='px-6 py-3' id='bghome'>
            <Home_Image />
          </div>
          <div className='px-3 py-3 w-full md:w-[500px]'>
            <div className='flex flex-col gap-4'>
              <div className='font-extrabold text-3xl md:text-5xl font-sans text-center md:text-left'>
                AI Enabled, Perfect Resume Builder
              </div>
              <div className='text-lg font-medium text-slate-700 text-center md:text-left'>
                Resume Score, Enhanced Resume & much more. Now Apply for a Job with confidence with our all in one solution under one roof.
              </div>
              <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
                <button className='px-6 py-2 text-lg rounded-full font-bold bg-indigo-600 text-white hover:shadow-2xl hover:shadow-slate-500' id='home_third'>
                 Free to join or Sign Up! 
                </button>
                <button className='text-black text-lg px-6 py-2 rounded-full font-bold bg-white hover:shadow-2xl hover:shadow-slate-500' id='home_third'>
                  Build your Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home_Second />
    </>
  );
}

export default Home_first;
