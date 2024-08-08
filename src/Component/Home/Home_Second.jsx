import React from 'react'
import Home_Third from './Home_Third'
import './Home.css'
import image1 from '../Home/images/1.png'
import image2 from '../Home/images/2.png'
import image3 from '../Home/images/3.png'
import image4 from '../Home/images/4.png'
import image5 from '../Home/images/5.png'
import { Link } from 'react-router-dom'

function Home_Second() {
  return (
    <>
    
      <div className=' py-8 '>
        <div className=' font-bold text-4xl flex py-6 px-6  justify-center'>
        Let Your Resume Stand Ahead Of Competition With Our Robust AI
        </div>
        <div className=' flex flex-col md:flex-row gap-2 md:gap-7 py-5 px-5 justify-center'>
            <div className=' flex flex-col items-center'>
                <div>
                    <img src={image1} alt="" className=' h-48 hover:h-52 hover:shadow-xl hover:shadow-gray-200' />
                </div>
                <div className=' font-bold text-lg text-center'>Upload Resume</div>
            </div>
            <div className=' flex flex-col items-center'>
                <div>
                    <img src={image2} alt="" className=' h-48 hover:h-52 hover:shadow-xl hover:shadow-gray-200'  />
                </div>
                <div className=' font-bold text-lg text-center'>
                AI Analysis
                </div>
            </div>
            <div className=' flex flex-col items-center'>
                <div><img src={image3} alt="" className=' h-48 hover:h-52 hover:shadow-xl hover:shadow-gray-200'  /></div>
                <div className=' font-bold text-lg text-center'>Select Design</div>
            </div>
            <div className=' flex flex-col items-center'>
                <div><img src={image4} alt="" className=' h-48 hover:h-52 hover:shadow-xl hover:shadow-gray-200'  /></div>
                <div className=' font-bold text-lg text-center'>Improve with AI</div>
            </div>
            <div className=' flex flex-col items-center'>
                <div><img src={image5} alt="" className=' h-48 hover:h-52 hover:shadow-xl hover:shadow-gray-200'  /></div>
                <div className=' font-bold text-lg text-center'>Download</div>
            </div>
        </div>
        <div className=' flex justify-center mt-4'>
        <Link to="/dashboard">
            <button className=' px-5 py-3 rounded-full text-lg text-white font-bold hover:px-8 hover:shadow-2xl hover:shadow-slate-500' id='home_third'>
                Create my Resume
            </button></Link>
        </div>
      </div>

      <Home_Third/>
      
    </>
  )
}

export default Home_Second
