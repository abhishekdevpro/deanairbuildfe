import React from 'react';
import { Link } from 'react-router-dom';
import template1 from "../../components/cvFunctionality/templateimages/template1.png"
import template2 from "../../components/cvFunctionality/templateimages/template2.png"
import template3 from "../../components/cvFunctionality/templateimages/template3.png"
import template4 from "../../components/cvFunctionality/templateimages/template4.png"
import template5 from "../../components/cvFunctionality/templateimages/template5.png"
import template6 from "../../components/cvFunctionality/templateimages/template6.png"
import template7 from "../../components/cvFunctionality/templateimages/template7.png"
import template8 from "../../components/cvFunctionality/templateimages/template8.png"
import template9 from "../../components/cvFunctionality/templateimages/template9.png"
import template10 from "../../components/cvFunctionality/templateimages/template10.png"
import "../../Component/Admin/Template.css"


const Templatelist = () => {
  const boxes = [
    <Link to="/dashboard/ai-resume-builder" key="box1">
      <div className="bg-violet-900 shadow-indigo-900 shadow-xl rounded-lg text-center text-white cursor-pointer text-3xl font-semibold box-hover-effect">
        <img src={template1} style={{height:"300px", width:"240px"}} alt=''/>
      </div>
    </Link>,
    <Link to="/dashboard/ai-resume-builder" key="box2">
      <div className="bg-violet-900 rounded-lg shadow-xl shadow-indigo-900 text-center text-white cursor-pointer text-3xl font-semibold box-hover-effect">
        <img src={template2} style={{height:"300px", width:"240px"}} alt=''/>
      </div>
    </Link>,
    <Link to="/dashboard/ai-resume-builder" key="box3">
      <div className="bg-violet-900 rounded-lg shadow-xl shadow-indigo-900 text-center text-white cursor-pointer text-3xl font-semibold box-hover-effect">
        <img src={template3} style={{height:"300px", width:"240px"}} alt=''/>
      </div>
    </Link>,
    <Link to="/dashboard/ai-resume-builder" key="box4">
      <div className="bg-violet-900 rounded-lg shadow-xl shadow-indigo-900 text-center text-white cursor-pointer text-3xl font-semibold box-hover-effect">
        <img src={template4} style={{height:"300px", width:"240px"}} alt=''/>
      </div>
    </Link>,
    <Link to="/dashboard/ai-resume-builder" key="box5">
      <div className="bg-violet-900 rounded-lg shadow-xl shadow-indigo-900 text-center text-white cursor-pointer text-3xl font-semibold box-hover-effect">
        <img src={template5} style={{height:"300px", width:"240px"}} alt=''/>
      </div>
    </Link>,
    <Link to="/dashboard/ai-resume-builder" key="box6">
      <div className="bg-violet-900 rounded-lg shadow-xl shadow-indigo-900 text-center text-white cursor-pointer text-3xl font-semibold box-hover-effect">
        <img src={template6} style={{height:"300px", width:"240px"}} alt=''/>
      </div>
    </Link>,
    <Link to="/dashboard/ai-resume-builder" key="box7">
      <div className="bg-violet-900 rounded-lg shadow-xl shadow-indigo-900 text-center text-white cursor-pointer text-3xl font-semibold box-hover-effect">
        <img src={template7} style={{height:"300px", width:"240px"}} alt=''/>
      </div>
    </Link>,
    <Link to="/dashboard/ai-resume-builder" key="box8">
      <div className="bg-violet-900 rounded-lg shadow-xl shadow-indigo-900 text-center text-white cursor-pointer text-3xl font-semibold box-hover-effect">
        <img src={template8} style={{height:"300px", width:"240px"}} alt=''/>
      </div>
    </Link>,
    <Link to="/dashboard/ai-resume-builder" key="box9">
      <div className="bg-violet-900 rounded-lg shadow-xl shadow-indigo-900 text-center text-white cursor-pointer text-3xl font-semibold box-hover-effect">
        <img src={template9} style={{height:"300px", width:"240px"}} alt=''/>
      </div>
    </Link>,
    <Link to="/dashboard/ai-resume-builder" key="box10">
      <div className="bg-violet-900 rounded-lg shadow-xl shadow-indigo-900 text-center text-white cursor-pointer text-3xl font-semibold box-hover-effect">
        <img src={template10} style={{height:"300px", width:"240px"}} alt=''/>
      </div>
    </Link>,
  ];

  return (
    <div className="p-2 md:p-6 flex flex-wrap justify-center gap-16 mt-10">
      {boxes.map((box, index) => box)}
    </div>
  );
};

export default Templatelist;
