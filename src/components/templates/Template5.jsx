import React from 'react';

const Template5 = ({
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isTemplate1Previewing,
  isPreviewScreen,
  predefinedText = {},
  skillsfromapi
}) => {
  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Provide default values for data properties
  const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

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

  return (
    <div className={`border px-5 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
     
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-2/3 md:px-10 pt-4'>
          {details.map((del, index) => (
            <div key={index}>
              <h3 className="text-lg md:text-xl lg:text-3xl text-blue-800 font-bold ">{del.name || predefinedText.details.name}</h3>
              <p className='text-lg md:text-xl lg:text-lg mt-2'> {del.Profession || predefinedText.details.profession}</p>

              {summary.map((sum, index) => (
                <div key={index}>
                <p
                  className={`${paragraphSpacingClass} text-xs sm:text-xs md:text-xs lg:text-xs m-2 w-2/2 break-all`}
                  dangerouslySetInnerHTML={{ __html: sum.summarydescription || predefinedText.summary.summarydescription }}
                />
               
              </div>
              ))}
              
              <h5 className='text-blue-800 '>WORK EXPERIENCE </h5><br />
              <div className="flex-grow border-t border-gray-300 align-super"></div>
              {experiences.map((exp, index) => (
                  <div key={index}>
                  <div className="flex justify-between mt-2">
                    <h6 className="font-bold break-all text-xs sm:text-sm md:text-sm lg:text-sm my-2">{exp.Company || predefinedText.experiences.company}</h6>
                    <p className="text-xs sm:text-xs md:text-xs lg:text-xs my-2">{exp.month1} - {exp.month2}</p>
                  </div>
                  <div className="flex justify-between">
                    <h6 className="text-xs sm:text-sm md:text-sm lg:text-sm">{exp.role ||  predefinedText.experiences.role }</h6>
                    <p className="text-xs sm:text-xs md:text-xs lg:text-xs">{exp.companyplace ||  predefinedText.experiences.companyplace}</p>
                  </div>
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
        <div className="md:w-1/3 md:p-4 bg-slate-100" style={{ backgroundColor: boxBgColor }}>
          <div>
          <h5 className='text-blue-800  '>CONTACT </h5>
            <div className="flex-grow border-t border-black align-super mt-5"></div>
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
          <h5 className='text-blue-800 '>EDUCATION </h5><br />
          <div className="flex-grow border-t border-black align-super"></div>
          {educations.map((edu, index) => (
            <div key={index}>
              <ul className=" text-xs md:text-xs lg:text-xs mt-2">
                <li className='font-bold'>{edu.coursename || predefinedText.educations.coursename}</li>
                <li className='text-xs md:text-xs lg:text-sm mt-2'>{edu.schoolname || predefinedText.educations.schoolname}</li>
                <li className='text-xs md:text-xs lg:text-xs mt-2'>{edu.schoolplace || predefinedText.educations.schoolplace}</li>
              </ul>
            </div>
          ))} <br />
          <h5 className='text-blue-800 '>SKILLS  </h5>
          <div className="flex-grow border-t border-black align-super mt-2"></div>
          {skills.map((skill, index) => (
            <div key={index}>
              <ul className=" text-xs md:text-xs lg:text-xs mt-2">
                <li>
                  <span className="m-2">&#8226;</span>{skill.skillname || predefinedText.skills.skillname}
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
                <h5 className="text-blue-800  break-all">{section.sectiontitle || predefinedText.additionalSections}</h5>
                <div className="flex-grow border-t border-black align-super my-2 "></div>
                <span className="font-bold text-xs w-32">{section.sectionname || predefinedText.additionalSections}</span>
                <h6 className={`${paragraphSpacingClass} text-xs  break-all`}>{section.sectiondescription || predefinedText.additionalSections}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template5;

