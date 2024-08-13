// import React from "react";
// import './Job.css'
// import '../Home/Home.css'

// const CourseDetail = ({ course }) => {
//   return (
//     <>
//     <div id="course">
//     <h1 className=" text-5xl font-bold px-5 md:px-16 py-5 text-center">Browse our up-to-date resume guides</h1>
//     <p className=" mx-auto text-lg text-slate-700 md:w-[800px]">Explore our recently updated guides to help you refine and modernize your resume. Discover valuable tips and strategies for today’s job market.</p>
//       <div className=" flex flex-col md:flex-row px-5 md:px-56  py-9 bg-white text-black md:mx-auto gap-3 ">
        
//         {course.map((card, index) => (
//           <div key={index}>
            
            
// <div className="flex flex-col justify-center h-[340px] border-2 px-2 py-2 rounded-xl border-white shadow-md shadow-slate-400 card-container" >
//   <img src={card.img} className="h-auto card-image rounded-md" alt="Course" />
//   <h1 className="text-xl font-bold " id='jobcard'>{card.title}</h1>
//   <div className="flex gap-1 items-center">
//     <img src={card.icon} alt="Icon" className=" rounded-full h-9 w-9" />
//     <p id='jobcard' >{card.name}</p>
//   </div>
  
  
// </div>


//           </div>
//         ))}
        
        
//       </div>
//       <div className=" flex py-5 justify-center">
//         <button className=" px-3 py-3  hover:bg-black font-semibold text-white border-2 rounded-xl text-center" id='home_third' >
//             Get More Career Advice
//         </button>
//         </div>

//         </div>
//     </>
//   );
// };

// export default CourseDetail;

import React from "react";
import './Job.css';
import '../Home/Home.css';

const CourseDetail = ({ course }) => {
  return (
    <div id="course" className="bg-gray-100 py-10">
     {/* <h1 className="text-5xl font-bold text-center mb-8 px-5 md:px-16">Browse our up-to-date resume guides</h1>
      <p className="text-lg text-center text-gray-700 mx-auto max-w-xl px-5 md:px-16 mb-8">
        Explore our recently updated guides to help you refine and modernize your resume. Discover valuable tips and strategies for today’s job market.
      </p>
      <div className="flex flex-wrap justify-center gap-4 px-5 md:px-16">
        {course.map((card, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4 w-full sm:w-72">
            <img src={card.img} className="h-auto rounded-md mb-4" alt="Course" />
            <h1 className="text-xl font-bold text-center mb-2">{card.title}</h1>
            <div className="flex items-center gap-2">
              <img src={card.icon} alt="Icon" className="rounded-full h-9 w-9" />
              <p className="text-gray-700">{card.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 bg-black hover:bg-gray-900 text-white font-semibold rounded-xl">
          Get More Career Advice
        </button>
      </div> */}
    </div>
  );
};

export default CourseDetail;
