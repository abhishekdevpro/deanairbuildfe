import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../components/images/logo3.png';
import upload from '../components/images/upload.png';
import edit from '../components/images/edit.png';
import UploadScreen from "../components/loadingscreens/uploadscreen";
import Footer from "./Footer";

function Selectionresume() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createResume = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.perfectresume.ca/api/user/resume-create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          // Your data here
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      // Extract the resume ID from the response data
      const resumeId = data.data.id;

      // Navigate to the dashboard with the resume ID in the URL
      navigate(`/dashboard/form/${resumeId}`);
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  const handleClick2 = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard/uploadresume');
    }, 5000);
  };

  const handleClick = () => {
    setLoading(true);
    createResume();
  };

  return (
    <>
      {loading ? (
        <UploadScreen />
      ) : (
        <>
          <div className="h-screen flex flex-col items-center">
            <div className="text-center my-10">
              <h1 className="font-bold text-3xl mb-3">Are you uploading an existing resume?</h1>
              <h6 className="text-sm font-medium text-slate-500">
                Just review, edit, and update it with new information
              </h6>
            </div>

            <div className="flex flex-col md:flex-row text-center justify-center gap-10">
              <button onClick={handleClick2} className="my-10 p-4 md:my-0 border rounded-md border-gray-400">
                <div className="p-4">
                  <img src={upload} alt="Upload" className="h-12 mx-auto mb-4" />
                  <h1 className="font-bold text-lg mb-2 text-slate-700">Yes, upload from my resume</h1>
                  <h6 className="text-xs">
                    We'll give you expert guidance to fill out your info
                    <br />
                    and enhance your resume, from start to finish
                  </h6>
                </div>
              </button>
              <button onClick={handleClick} className="my-10 p-4 md:my-0 border rounded-md border-gray-400">
                <div className="p-4">
                  <img src={edit} alt="Edit" className="h-12 mx-auto mb-4" />
                  <h1 className="font-bold text-lg mb-2 text-slate-700">No, start from scratch</h1>
                  <h6 className="text-xs">
                    We'll guide you through the whole process so your
                    <br />
                    skills can shine
                  </h6>
                </div>
              </button>
            </div>
          </div>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}

export default Selectionresume;
