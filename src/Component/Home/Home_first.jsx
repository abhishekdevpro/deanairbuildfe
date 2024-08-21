import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Home_Second from './Home_Second';
import Home_Image from './Home_Image';
import { Link } from 'react-router-dom';
import landing from "./landing.png"
function Home_first() {
  const navigate = useNavigate();

 

  return (
    <>
      <div className='bg-blue-100'>
        <div className='py-9 px-5 w-screen flex gap-3 md:gap-10 md:justify-evenly items-center flex-col md:flex-row'>
          <div className='px-6 py-3' id='bghome'>
            <Home_Image />
          </div>
          <Link to="https://resumeintellect.ca/">
          <img 
                            src={landing} 
                           style={{width:"350px"}}
                        />
          </Link>
         
          <div className='px-3 py-3 w-full md:w-[500px]'>
            <div className='flex flex-col gap-4'>
              <div className='font-extrabold text-3xl md:text-5xl font-sans text-center md:text-left'>
                AI Enabled, Resume Intellect Builder
              </div>
              <div className='text-lg font-medium text-slate-700 text-center md:text-left'>
                Resume Score, Enhanced Resume & much more. Now Apply for a Job with confidence with our all in one solution under one roof.
              </div>
              <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
                <Link to="/dashboard">
                  <button className='px-6 py-2 text-lg rounded-full font-bold bg-blue-700 text-white hover:shadow-2xl hover:shadow-slate-500' >
                    Free to join or Sign Up! 
                  </button>
                </Link>
                <Link to="/dashboard">
                  <button className='text-black text-lg px-6 py-2 rounded-full font-bold bg-white hover:shadow-2xl hover:shadow-slate-500' >
                    Build your Resume
                  </button>
                </Link>
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
