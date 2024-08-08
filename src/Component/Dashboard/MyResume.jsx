import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("https://api.perfectresume.ca/api/user/resume-list", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          const resumes = response.data.resumelist;
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
          "https://api.perfectresume.ca/api/user/file-based-ai",
          {
            keyword:
              "Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations",
            file_location: resume.file_path,
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
          "https://api.perfectresume.ca/api/user/file-based-ai",
          {
            keyword:
              "Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations",
            file_location: resume.file_path,
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

  const handleEditResume = (resume) => {
    navigate(`/dashboard/form/${resume.id}`); // Redirect to the form page with the resume ID
  };

  const handleUpdateResume = () => {
    const token = localStorage.getItem("token");
    const updatedData = {
      templateData: {
        templatename: selectedResume.templateData?.templatename || "",
        details: {
          firstname: selectedResume.templateData?.details?.firstname || "",
          lastname: selectedResume.templateData?.details?.lastname || "",
          address: selectedResume.templateData?.details?.address || "",
          phone: selectedResume.templateData?.details?.phone || "",
          email: selectedResume.templateData?.details?.email || "",
          postalcode: selectedResume.templateData?.details?.postalcode || "",
          drivinglicense:
            selectedResume.templateData?.details?.drivinglicense || "",
          nationality: selectedResume.templateData?.details?.nationality || "",
          placeofbirth:
            selectedResume.templateData?.details?.placeofbirth || "",
          dateofbirth: selectedResume.templateData?.details?.dateofbirth || "",
          securityclearance:
            selectedResume.templateData?.details?.securityclearance || "",
          city: selectedResume.templateData?.details?.city || "",
          country: selectedResume.templateData?.details?.country || "",
          github: selectedResume.templateData?.details?.github || "",
          languages: selectedResume.templateData?.details?.languages || [],
          projects: selectedResume.templateData?.details?.projects || [],
          achievement: selectedResume.templateData?.details?.achievement || [],
          photo: selectedResume.templateData?.details?.photo || "",
          profession: selectedResume.templateData?.details?.profession || "",
          linkdin: selectedResume.templateData?.details?.linkdin || "",
          wantedjobtitle:
            selectedResume.templateData?.details?.wantedjobtitle || "",
        },
        professionalsummary:
          selectedResume.templateData?.professionalsummary || "",
        skills: selectedResume.templateData?.skills || [],
        education: selectedResume.templateData?.education || [],
        employmenthistory: selectedResume.templateData?.employmenthistory || [],
        other_sections: selectedResume.templateData?.other_sections || [],
      },
    };

    if (token && selectedResume.id) {
      setIsLoading(true);
      axios
        .put(
          `https://api.perfectresume.ca/api/user/resume-update/${selectedResume.id}`,
          updatedData,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          // Refresh the resume list after update
          axios
            .get("https://api.perfectresume.ca/api/user/resume-list", {
              headers: {
                Authorization: token,
              },
            })
            .then((response) => {
              setResumes(response.data.resumelist);
              setIsEditModalOpen(false);
              setIsLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching updated resume list:", error);
              setIsLoading(false);
            });
        })
        .catch((error) => {
          console.error("Error updating resume:", error);
          setIsLoading(false);
        });
    } else {
      console.error("Token not found in localStorage or no resume selected");
    }
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
            {resumes.length > 0 &&
              resumes.map((resume, index) => (
                <tr key={index} className="border-t border-gray-700">

                  <td className=" ">{index + 1}.</td>

                  <td className="py-2 float-start ">
                    {getFileName(resume.file_path) || "Resume joe"}
                  </td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-yellow-500 text-black py-1 px-3 rounded"
                      onClick={() => handleGetScore(resume)}
                    >
                      {scores[resume.id] !== undefined
                        ? scores[resume.id]
                        : "Resume Score"}
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
                      <button className="text-black">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    Comming Soon
                  </td>
                </tr>
              ))}
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
    </div>
  );
};

export default MyResume;
