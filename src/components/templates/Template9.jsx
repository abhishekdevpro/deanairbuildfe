import React from 'react';
import { useState } from 'react';
import profilephoto from '../images/profilephoto.png';
const Template9 = ({
  image,
  data = {},
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen,
  isTemplate1Previewing,
  predefinedText = {},
  skillsfromapi
}) => {
  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Provide default values for data properties
  const { details = [{}], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

  // Generic function to check if all required fields are filled
  const areAllFieldsFilled = (item, fields) => {
    return fields.every(field => item[field] && item[field].trim() !== '');
  };

  // Check if all details are filled
  const allDetailsFilled = details.every(detail =>
    areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
  );

  const allDetailsFilled2 = experiences.every(experience =>
    areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
  );

  const allDetailsFilled3 = educations.every(education =>
    areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
  );

  const allDetailsFilled4 = skills.every(skill =>
    areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
  );

  const allDetailsFilled5 = sectionadd.every(section =>
    areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription'])
  );

  const allDetailsFilled6 = summary.every(summar =>
    areAllFieldsFilled(summar, ['summarydescription'])
  );

  const [images, setImages] = useState(() => {
    if (details && details.length > 0) {
      return details.map(() => null);
    }
    return [];
  });

  return (
    <div className={`border break-all  ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
      
      <div className='flex '>

        <div className="md:w-1/ md:p-4 bg-slate-100 text-white overflow-auto justify-center " style={{ backgroundColor: boxBgColor }}>
          <div>
            <div className="w-32 h-32 border-blue-950 bg-white rounded-full border-8 text-center break-all">
            <img src={image || profilephoto} alt="" style={{height:'112px',width:'112px'}} className='rounded-full'/>
            </div>
            <h5 className=' text-sm pt-5'>CONTACT </h5>
            <div className="flex-grow  border-t border-white align-super mt-3"></div>
            <ul className=" text-xs md:text-xs lg:text-xs mt-2">
              {details.map((del, index) => (
                <React.Fragment key={index}>
                  <li><span className="m-2">&#8226;</span>{del.address || predefinedText.details.address}</li>
                  <li className='text-xs md:text-xs lg:text-xs'>
                    <span className="m-2">&#8226;</span>{del.phoneNumber || predefinedText.details.phoneNumber}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs break-all'>
                    <span className="m-2">&#8226;</span>{del.email || predefinedText.details.email}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs'>
                    <span className="m-2">&#8226;</span><a href={del.link || '#'}>{del.link || predefinedText.details.link}</a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div><br />
          <h5 className='text-sm'>EDUCATION </h5><br />
          <div className="flex-grow border-t border-white align-super"></div>
          {educations.map((edu, index) => (
            <div key={index}>
              <ul className=" text-xs md:text-xs lg:text-xs mt-2">
                <li className='font-bold'>{edu.coursename  || predefinedText.educations.coursename}</li>
                <li className='text-xs md:text-xs lg:text-sm mt-2'>{edu.schoolname || predefinedText.educations.schoolname}</li>
                <li className='text-xs md:text-xs lg:text-xs mt-2'>{edu.schoolplace || predefinedText.educations.schoolplace}</li>
              </ul>
            </div>
          ))} <br />
          <h5 className='text-sm '>SKILLS  </h5>
          <div className="flex-grow border-t border-white align-super mt-2"></div>
          {skills.map((skill, index) => (
            <div key={index}>
              <ul className=" text-xs md:text-xs lg:text-xs mt-2">
                <li>
                  <span className="m-2">&#8226;</span>{skill.skillname  || predefinedText.skills.skillname}
                </li>
                <li className='text-xs md:text-xs lg:text-xs'>
                  <span className="m-2">&#8226;</span>{skill.skilldetails || predefinedText.skills.skilldetails}
                </li>
                {skillsfromapi && skillsfromapi.length > 0 && (
    <p className="text-start ">ds
      {skillsfromapi.map((skill, index) => (
        <span key={index}>
          {skill}
          {index !== skillsfromapi.length - 1 && ' ● '}
        </span>
      ))}
    </p>
  )}
              </ul>
            </div>
          ))}
          <div>
            {sectionadd.map((section, index) => (
  <div key={index} className="mt-5">
    <h5 className="text-blue-800  break-all">{section.sectiontitle}</h5>
    <div className="flex-grow border-t border-white align-super my-2 "></div>
    <span className="font-bold text-xs w-32">{section.sectionname}</span>
    <h6 className={`${paragraphSpacingClass} text-xs  break-all`}>{section.sectiondescription}</h6>
  </div>
))}
</div>
</div>


<div className='md:w-2/3 md:px-4 white'>

{details.map((del, index) => (
<div key={index}><br />
  <h3 className="text-lg md:text-xl lg:text-3xl text-gray-700 font-bold ">{del.name || predefinedText.details.name}</h3>
  <p className='text-sm md:text-sm lg:text-sm mt-2'> {del.Profession || predefinedText.details.profession}</p> <br /> <br />
  <h5 className='font-bold mb-2 '>About Me </h5>
  <div className="flex-grow border-t border-gray-900 align-super"></div>
  {summary.map((sum, index) => (
    <div key={index}>
    <p
      className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}
      dangerouslySetInnerHTML={{ __html: sum.summarydescription || predefinedText.summary.summarydescription }}
    />
    <br />
  </div>
  ))}
  <h5 className='font-bold mb-2'>Work Experience </h5>
  <div className="flex-grow border-t border-gray-900 align-super"></div>
  {experiences.map((exp, index) => (
    <div key={index}>
      <div className='flex justify-between mt-4'>
        <h6 className='font-bold'>{exp.Company || "ABC Inc."} </h6>
        <p>{exp.month1}- {exp.month2}</p>
      </div>
      <h6>{exp.role || "Software Developer"}</h6>
      <ul className={`${exp.companydescription ? 'text-xs sm:text-xs md:text-xs lg:text-xs' : ''} w-full break-all`}>
  {exp.companydescription ? (
    // If company description is provided, split by new lines and render each line as a list item
    exp.companydescription.split(/\r?\n/).map((line, i) => (
      <li
        key={i}
        className="text-xs sm:text-xs md:text-xs lg:text-xs m-2 w-full break-all"
        style={{ marginBottom: '4px', listStyleType: 'none', position: 'relative', paddingLeft: '1em' }} // Adjust margin and padding as needed
      >
        <span style={{ position: 'absolute', left: 0 }}>•</span>
        <span dangerouslySetInnerHTML={{ __html: line ? `${line}` : '' }} />
      </li>
    ))
  ) : (
    // Render a placeholder or message if company description is not provided
    <li className="text-gray-400 italic">No description provided</li>
  )}
</ul>
      <br />
    </div>
  ))}
</div>
))}
</div>
</div>
</div>
);
};

export default Template9;
