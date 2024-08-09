// import React from "react";
// import './Job.css'
// import '../Home/Home.css'

// const CourseDetail = ({ course }) => {
//   return (
//     <>
//     <div id="course">
//     <h1 className=" text-5xl font-bold px-5  py-5 text-center">Newest Strategies From Our Career Search Advisors</h1>
//     <p className=" md:mx-auto px-2 text-lg text-slate-700 md:w-[800px]">You’re never alone in your job search. Whether you’re writing a cover letter, preparing for the interview or negotiating your salary, our resource center has articles that will help you take the next step in your career.</p>
    
//       <div className="px-5 md:px-52 py-9 bg-white text-black md:grid md:grid-cols-4 gap-2 ">
        
//         {course.map((card, index) => (
//           <div key={index}>
            
//             <a href={card.link} target='_blank'>        
// <div className="flex flex-col justify-evenly h-[250px] w-[260px] px-2 py-2 rounded-xl border-white shadow-md shadow-gray-400 card-container" >
  
//   <img src={card.img} className="w-[300px] border-2 h-auto card-image rounded-md" alt="Course" />
  
  
  
//   <h1 className="text-xl font-bold " id='jobcard'>{card.title}</h1>
//   {/* <div className="flex gap-1 items-center">
    
//     <p id='jobcard'>{card.name}</p>
//   </div> */}
  
  
// </div>

// </a>
//           </div>
//         ))}
        
        
//       </div>
      
//       <div className=" flex justify-center py-5">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold px-4 lg:px-0 py-5 text-center">Newest Strategies From Our Career Search Advisors</h1>
        <p className="mx-auto px-4 lg:px-0 text-lg lg:text-base text-gray-700 max-w-4xl text-center mb-8">You’re never alone in your job search. Whether you’re writing a cover letter, preparing for the interview, or negotiating your salary, our resource center has articles that will help you take the next step in your career.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {course.map((card, index) => (
            <a key={index} href={card.link} target='_blank' rel="noopener noreferrer" className="flex flex-col items-center justify-between h-full bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
              <img src={card.img} alt="Course" className="w-full h-auto border-2 rounded-t-md" />
              <div className="p-4">
                <h2 className="text-lg lg:text-lg font-bold mb-2">{card.title}</h2>
                {/* <p className="text-sm text-gray-600">{card.name}</p> */}
              </div>
            </a>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600">
            Get More Career Advice
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
