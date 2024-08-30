import React from 'react';
import Job_Search_Detail from './Job_Search_Detail';
import blog1 from "../Home/images/blog1.jpg"
import blog2 from "../Home/images/blog2.jpg"
import blog3 from "../Home/images/blog3.jpg"
import blog4 from "../Home/images/blog4.jpg"

function Course(props) {
  const course =[
    
    {
        img:"https://blog.resumeintellect.com/wp-content/uploads/2024/08/What-are-the-alarming-signs-your-boss-wants-you-to-leave-the-job-2.jpg", title:"10 alarming signs why your wants you to leave the job",link:"https://blog.resumeintellect.com/2024/08/29/what-are-the-alarming-signs-your-boss-wants-you-to-leave-the-job/"
    },
    {   img:"https://blog.resumeintellect.com/wp-content/uploads/2024/08/What-are-the-alarming-signs-your-boss-wants-you-to-leave-the-job-1.jpg",title:"10 must have HR professional skills required for your resume",link:"https://blog.resumeintellect.com/"},

    {   img:blog3,title:"Science behind AI-powered resume-scoring systems",link:"https://blog.resumeintellect.com/2024/08/29/7/"},

    {   img:"https://blog.resumeintellect.com/wp-content/uploads/2024/08/What-are-the-alarming-signs-your-boss-wants-you-to-leave-the-job-3.jpg",title:"Why is it important to have resumes built by experts?",link:"https://blog.resumeintellect.com/2024/08/29/why-is-it-important-to-have-resumes-built-by-experts-in-2024/"},

    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Blue-Modern-Digital-Art-Marketplace-Promotion-Facebook-Ad-3.jpg",title:"My AI-Written Resume Got Me an Interview!",link:"https://blog.abroadium.com/my-ai-written-resume-got-me-an-interview/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Blue-Modern-Digital-Art-Marketplace-Promotion-Facebook-Ad-2.jpg",title:"Using AI to Find the Right Skills for Your Resume",link:"https://blog.abroadium.com/using-ai-to-find-the-right-skills-for-your-resume/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Blue-Modern-Digital-Art-Marketplace-Promotion-Facebook-Ad-1.jpg",title:"5 Ways AI Can Make Your Resume Stand Out",link:"https://blog.abroadium.com/5-ways-ai-can-make-your-resume-stand-out/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Blue-Modern-Digital-Art-Marketplace-Promotion-Facebook-Ad.jpg",title:"AI Resume Builders",link:"https://blog.abroadium.com/ai-resume-builders/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/The-Impact-of-AI-on-Personal-Branding-Abroadium.jpg",title:"Personal Branding in the Age of AI",link:"https://blog.abroadium.com/personal-branding-in-the-age-of-ai/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Understanding-AI-Powered-job-search-Abroadium.jpg",title:"Navigating AI-Powered Job Platforms",link:"https://blog.abroadium.com/navigating-ai-powered-job-platforms/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Understanding-AI-Powered-Resume-Tools-Abroadium.jpg",title:"Rise of AI in Resume Writing",link:"https://blog.abroadium.com/rise-of-ai-in-resume-writing/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Brown-Blue-Simple-Photo-Save-Time-with-AI-Youtube-Thumbnail.jpg",title:"A Human-AI Collaboration",link:"https://blog.abroadium.com/a-human-ai-collaboration/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Future-Proof-Your-Job-Search.jpg",title:"AI-Proof Your Resume",link:"https://blog.abroadium.com/3915/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Learn-strategies-to-get-your-resume-noticed-and-land-interviews.jpg",title:"Beating the Applicant Tracking System",link:"https://blog.abroadium.com/beating-the-applicant-tracking-system-ats-gatekeepers/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Leverage-AI-Skills-to-Achieve-Your-Dream-Job.jpg",title:"Mastering AI to Land Your Dream Job",link:"https://blog.abroadium.com/mastering-ai-to-land-your-dream-job/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Supercharge-Your-Career-with-AI.jpg",title:"AI Can Supercharge Your Resume",link:"https://blog.abroadium.com/ai-can-supercharge-your-resume/"},
    
    
  ];
  return (
    <>
      <Job_Search_Detail course={course} id='course' />
    </>
  )
}

export default Course
