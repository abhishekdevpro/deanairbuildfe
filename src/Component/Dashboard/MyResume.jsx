import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { toast, ToastContainer } from 'react-toastify';


const MyResume = () => {
  const [resumes, setResumes] = useState([]);
  const [scores, setScores] = useState({});
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalSuggestions, setModalSuggestions] = useState([]);
  const [modalResumeName, setModalResumeName] = useState("");
  const [selectedResume, setSelectedResume] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [idFromResponse, setIdFromResponse] = useState(null); // Define the state
  const [locationFromResponse, setLocationFromResponse] = useState(""); 
  const [deleteresumeid,setDeleteresumeid]=useState(null)
  const [isDeleteModalOpen, setisDeleteModalOpen]=useState(false);


  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (token) {
      axios
        .get("https://api.resumeintellect.com/api/user/resume-list", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          const resumes = response.data.resumelist || []; // Ensure resumes is not null or undefined
          if (resumes.length === 0) {
            // If no resumes are returned, show a toast or set a message
            toast.info("No resumes available.");
          }
          setResumes(resumes);
        })
        .catch((error) => console.error("Error fetching resume list:", error));
    } else {
      console.error("Token not found in localStorage");
    }
  }, []);
  

  const handleGetScore = (resume) => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoading(true);
      axios
        .post(
          "https://api.resumeintellect.com/api/user/file-based-ai",
          {
            keyword:
              "Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations",
            file_location: resume.file_path || "/etc/dean_ai_resume/users/resume_uploads/majid[15_0]-1723818329.pdf",
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          const { content_acuracy_percentage } = response.data.data;
          setScores((prevScores) => ({
            ...prevScores,
            [resume.id]: content_acuracy_percentage,
          }));
          setModalContent(content_acuracy_percentage);
          setModalResumeName(resume.name);
          setIsScoreModalOpen(true);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching AI score:", error);
          setIsLoading(false);
        });
    } else {
      console.error("Token not found in localStorage");
    }
  };

  const handleGetSuggestions = (resume) => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoading(true);
      axios
        .post(
          "https://api.resumeintellect.com/api/user/file-based-ai",
          {
            keyword:
              "Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations",
              file_location: resume.file_path || "/etc/dean_ai_resume/users/resume_uploads/majid[15_0]-1723818329.pdf",
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          const { improvement_suggestions } = response.data.data;
          setModalSuggestions(improvement_suggestions || []);
          setModalResumeName(resume.name);
          setIsAIModalOpen(true);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching AI suggestions:", error);
          setIsLoading(false);
        });
    } else {
      console.error("Token not found in localStorage");
    }
  };

  const handleEditResume = async (resume) => {
    const token = localStorage.getItem("token");
  
    try {
      const response = await axios.get(`https://api.resumeintellect.com/api/user/resume-list/${resume.id}`, {
        headers: {
          Authorization: token,
        },
      });
  
      if (!response.data.data || !response.data.data.ai_resume_parse_data) {
        console.error("Resume data not found in API response");
        return;
      }
  
      const parsedData = JSON.parse(response.data.data.ai_resume_parse_data);
      console.log("Parsed Resume Data:", parsedData);
  
      // Store resume data and related details in localStorage
      localStorage.setItem('resumeData', JSON.stringify(parsedData.templateData));
      localStorage.setItem('resumeId', response.data.data.id);
      localStorage.setItem('location', response.data.data.file_path);
  
      // Set states with the received data if needed
      setIdFromResponse(response.data.data.id);
      setLocationFromResponse(response.data.data.file_path);
  
      toast.success("Resume data loaded successfully");
  
      // Navigate to the resume display page with the resume ID
      navigate(`/dashboard/form/${response.data.data.id}`);
    } catch (error) {
      console.error("Error fetching resume details:", error);
      toast.error("Failed to load resume data");
    }
  };
  
const handleDeleteResume = async () => {
  const token = localStorage.getItem("token")

  try{
    await axios.delete(`https://api.resumeintellect.com/api/user/resume-list/${deleteresumeid}`,{
      headers:{
        Authorization:token
      }
    });
    toast.success("Your Resume Deleted Succesfully")
    setisDeleteModalOpen(false);
    setResumes(resumes.filter((resume)=>resume.id !== deleteresumeid));
  } catch(error){
    console.log("error",error);
    toast.error("Failed to Delete your Resume")
  }
};

const handleopenDeleteModal = (resumeId) => {
  setDeleteresumeid(resumeId); // Set the ID of the resume to be deleted
  setisDeleteModalOpen(true);  // Open the delete confirmation modal
};


const handleCloseModal = () => {
  setisDeleteModalOpen(false); // Close the delete confirmation modal
};

  


  const handleCopySuggestions = () => {
    const suggestionsText = modalSuggestions.join("\n");
    navigator.clipboard
      .writeText(suggestionsText)
      .then(() => {
        alert("Suggestions copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy suggestions:", error);
      });
  };

  // Function to get the filename from the file path
  const getFileName = (filePath) => {
    return filePath.split("/").pop();
  };

  return (
    
    <div className="container mx-auto p-4 text-center">
      <ToastContainer/>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-dark text-black rounded-md">
          <thead>
            <tr>
              <th className="py-2 px-4">Sr. no.</th>
              <th className="py-2 px-4">Resume Name</th>
              <th className="py-2 px-4">AI-Score</th>
              <th className="py-2 px-4">Improve with AI</th>
              <th className="py-2 px-4">Created</th>
              <th className="py-2 px-4">Actions</th>
              <th className="py-2 px-4">JD Match %</th>
            </tr>
          </thead>
          <tbody>

            {resumes.length > 0 ?(
              resumes.map((resume, index) => (
                <tr
                key={index}
               className="border-2"
              >
                  <td className=" ">{index + 1}.</td>

                  <td className="py-2 float-start ">
                 { `${resume.resue_name}` || "Resume score"}
                  </td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-yellow-500 text-black py-1 px-3 rounded"
                      onClick={() => handleGetScore(resume)}
                    >
                      {scores[resume.id] !== undefined
                        ? scores[resume.id]
                        :  `${resume.ai_resume_score_percentage}` || "Resume score"}
                    </button>
                  </td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-yellow-500 text-white py-1 px-3 rounded"
                      onClick={() => handleGetSuggestions(resume)}
                    >
                      AI
                    </button>
                  </td>
                  <td className="py-2 px-4">
                    {new Date(resume.created_at).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex  space-x-2">
                      <button className="text-black">
                        <i className="fas fa-upload"></i>
                      </button>
                      <button
                        className="text-black"
                        onClick={() => handleEditResume(resume)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="text-black" onClick={() => handleopenDeleteModal(resume.id)}>
  <i className="fas fa-trash"></i>
</button>

                    </div>
                  </td>
                  <td className="py-2 px-4">
                    Coming Soon
                  </td>
                </tr>
              )) ) : (
                <div>Please Uplaod Resume.</div>
              )}
          </tbody>
        </table>
      </div>

      {/* Loading Animation */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 align-middle text-white font-semibold text-2xl pt-24">
            {" "}
            AI is Working...
          </div>
        </div>
      )}

      {/* Resume Score Modal */}
      {isScoreModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-500 p-20 rounded shadow-lg text-white">
            <h2 className="text-4xl font-semibold text-white">Resume Score</h2>
            <br />
            <p className="text-3xl">
              <strong>AI Score: </strong> {modalContent}
            </p>
            <br />
            <button
              onClick={() => setIsScoreModalOpen(false)}
              className="mt-4 text-1xl bg-yellow-500 text-white py-2 px-16 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* AI Suggestions Modal */}
      {isAIModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-500 p-10 rounded shadow-lg text-white">
            <h1 className="text-4xl font-semibold text-white">
              AI Suggestions{" "}
            </h1>
            <br />
            <ul className="list-disc list-inside text-start p-3">
              {modalSuggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => setIsAIModalOpen(false)}
                className="bg-yellow-500 text-white py-3 px-20 text-1xl rounded font-semibold"
              >
                Close
              </button>
              <button
                onClick={handleCopySuggestions}
                className="bg-yellow-500 text-white py-3 px-20 text-1xl rounded font-semibold"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}

{isDeleteModalOpen && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-45 flex items-center justify-center"> 
    <div className="bg-gray-400 p-10 rounded shadow-lg text-white">
      <h2 className="text-2xl font semi-bold">Delete Confirmation</h2>
      <p className="mt-5">Are you sure you want to delete this resume?</p>
      <div className="mt-6 flex justify-center space-x-4">
        <button onClick={handleDeleteResume} className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button> 
        <button onClick={handleCloseModal} className="bg-gray-300 text-black px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default MyResume;
