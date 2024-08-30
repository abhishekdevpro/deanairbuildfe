import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const token = localStorage.getItem('token');

  const [resumes, setResumes] = useState([]);
  const [scores, setScores] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalResumeName, setModalResumeName] = useState('');

  const [formData, setFormData] = useState({
    photo:'',
    first_name: '',
    last_name: '',
    professional_title: '',
    languages: '',
    age: '',
    current_salary: '',
    expected_salary: '',
    description: '',
    country_id: '',
    state_id: '',
    city_id: '',
    uploadPhoto: null
  });

  
  useEffect(() => {
    const fetchData = async () => {
      try { 
        
        const token = localStorage.getItem("token");
        
        // Fetch user profile
        const userProfileResponse = await axios.get('https://api.resumeintellect.com/api/user/user-profile', {
          headers: {
            Authorization: token,
          },
        });
        
        if (userProfileResponse.data.status === 'success') {
          const userData = userProfileResponse.data.data;
          setFormData(prevData => ({
            ...prevData,
            photo: userData.photo|| "",
            first_name: userData.first_name || '',
            last_name: userData.last_name || '',
            professional_title: userData.professional_title || '',
            languages: userData.languages || '',
            age: userData.age || '',
            current_salary: userData.current_salary || '',
            expected_salary: userData.expected_salary || '',
            phone: userData.phone || '',
            email: userData.email || '',
            description: userData.description || '',
            country_id: userData.country_id || '',
            state_id: userData.state_id || '',
            city_id: userData.city_id || ''
          }));

          // Fetch countries
          
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      } 
    };

    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('https://api.resumeintellect.com/api/user/resume-list', {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        const resumes = response.data.resumelist;
        if (resumes.length === 0) {
          // If no resumes are returned, show a toast or set a message
          toast.info("No resumes available.");
        }
        setResumes(resumes);
        resumes.forEach(resume => {
          console.log(resume.file_path, 'test');
        });
      })
      .catch(error => console.error('Error fetching resume list:', error));
    } else {
      console.error('Token not found in localStorage');
    }
  }, []);

  const handleGetScore = (resume) => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.post('https://api.resumeintellect.com/api/user/file-based-ai', {
        keyword: 'Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations',
        file_location: resume.file_path
      }, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        const { content_acuracy_percentage } = response.data.data;
        setScores(prevScores => ({
          ...prevScores,
          [resume.id]: content_acuracy_percentage
        }));
        setModalContent(content_acuracy_percentage);
        setModalResumeName(resume.name);
        setIsModalOpen(true);
      })
      .catch(error => console.error('Error fetching AI score:', error));
    } else {
      console.error('Token not found in localStorage');
    }
  };

  // Function to get the filename from the file path
  const getFileName = (filePath) => {
    return filePath.split('/').pop();
  };

  const handleResume = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("files", selectedFile);

        const response = await axios.post(
          "https://api.resumeintellect.com/api/user/resume-upload",
          formData,
          {
            headers: {
              "Authorization": `${token}`
            }
          }
        );

        if (response.status === 200) {
          setUploadStatus("Resume Uploaded Successfully");
          toast.success("Resume Uploaded Successfully")
        } else {
          setUploadStatus("Failed to upload resume.");
        }
      } catch (error) {
        console.error("Error uploading resume:", error);
        toast.error("Failed to upload resume")
        setUploadStatus("An error occurred while uploading the resume.");
      }
    } else {
      setUploadStatus("No file selected");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB in bytes

    if (file.size > maxSizeInBytes) {
      setUploadStatus("File size exceeds 2MB. Please choose a smaller file.");
      setSelectedFile(null);
    } else {
      setSelectedFile(file);
      setUploadStatus("");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(modalContent)
      .then(() => {
        toast.success('Content copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        toast.error('Failed to copy content');
      });
  };

  return (
    <div className="bg-indigo-900 p-4">
  <div className="max-w-4xl mx-auto">
    <div className="rounded-lg shadow-lg p-6 bg-indigo-800 flex flex-col md:flex-row justify-between items-center md:h-44">
      <div className="space-y-4 mb-6 md:mb-0 md:mr-6 md:pr-6 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <img
            src={`https://api.resumeintellect.com/${formData.photo}`}
            alt="Please Upload Profile Photo"
            className="w-20 h-20 rounded-full mb-4 md:mb-0"
          />
          <div className="text-white">
            <h2 className="text-xl font-semibold">{formData.first_name || "Benjamin"} {formData.last_name || "Tenison"}</h2>
            <p>{formData.professional_title || "Web Developer"}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:ms-20">
          <div>
            <p className="text-white">📧 {formData.email || "ben@gmail.com"}</p>
            <p className="text-white">📱 {formData.phone || "12345678"}</p>
            <p className="text-white">📍 United States, Florida</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block border-[0.5px] border-gray-500 h-40"></div>
      <div className="flex flex-col justify-start items-start gap-3 mx-1 w-full md:w-auto">
        {resumes.length > 0 && (
          <div key={resumes[0].id} className="border-t border-gray-700 w-full">
            <button
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 w-full md:w-auto"
              onClick={() => handleGetScore(resumes[0])}
            >
              {scores[resumes[0].id] !== undefined ? scores[resumes[0].id] : 'Resume Score'}
            </button>
          </div>
        )}
        <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
            accept=".pdf"
            disabled
          />
          <span className="text-white ml-2">{selectedFile ? selectedFile.name : `Upload .Pdf `}</span>
        </div>
        <Link to="/dashboard/ai-resume-builder">
          <button
            className="bg-blue-500 text-white px-1  py-2 rounded-lg hover:bg-blue-600 w-full md:w-auto"
          >
            Upload Resume
          </button>
        </Link>
      </div>
    </div>
    {isModalOpen && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
        <div className="bg-gray-700 p-10 rounded shadow-lg text-white">
          <h2 className="text-xl font-semibold text-white">Resume Score</h2>
          <p><strong>Content Accuracy Percentage: </strong> {modalContent}</p>
          <div className="flex mt-4">
            <button
              onClick={copyToClipboard}
              className="bg-blue-500 text-white py-1 px-4 rounded mr-2"
            >
              Copy
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-yellow-500 text-white py-1 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
    {uploadStatus && (
      <div className="mt-4 text-center">
        <p className="text-sm text-white font-semibold">{uploadStatus}</p>
      </div>
    )}
  </div>
</div>

  );
};

export default ProfilePage;
