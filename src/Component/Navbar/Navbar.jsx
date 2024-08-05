


import React, { useState } from 'react';
import logo from './logo.jpg';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accuracyPercentage, setAccuracyPercentage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setLoading1] = useState(false);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
const  navigate = useNavigate()
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const resumeScore = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const location = localStorage.getItem('location');
      const requestBody = {
        keyword: "Rate this resume content in percentage? and checklist of scope improvements in manner of content and informations",
        file_location: location,
      };

      const response = await axios.post(
        'https://api.perfectresume.ca/api/user/file-based-ai',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        }
      );

      const { content_acuracy_percentage } = response.data.data;
      setAccuracyPercentage(content_acuracy_percentage);
    } catch (error) {
      console.error('Error fetching data from API', error);
      setError('Failed to fetch resume score. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setLoading1(true);
      setError(''); // Reset error state
      try {
        const token = localStorage.getItem('token');
        const requestBody = {
          keyword: "Rate this resume content in percentage? And checklist of scope improvements in manner of content and informations",
          file_location: "/etc/ai_job_portal/jobseeker/resume_uploads/black-and-white-standard-professional-resume-1719321080.pdf",
        };

        const response = await axios.post(
          'https://api.perfectresume.ca/api/user/file-based-ai',
          requestBody,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token,
            },
          }
        );

        const { improvement_suggestions } = response.data.data;
        console.log(improvement_suggestions); // Check the value of improvement_suggestions
        setSuggestions(improvement_suggestions);
      } catch (error) {
        console.error('Error fetching data from API', error);
        setError('Failed to fetch suggestions. Please try again.');
      } finally {
        setLoading1(false);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    setIsLoggedIn(false);
    navigate("/");// Update login state
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="">
              <img src={logo} alt="logo" className="w-20 h-14" />
            </Link>
          </div>
          <div className="hidden md:flex justify-center items-center space-x-4" id="nav">
            {/*{loading ? (
              <div className='text-white font-semibold px-3 py-3'>Loading...</div>
            ) : accuracyPercentage !== null ? (
              <div className="api-data-container">
                <p className='text-white font-semibold px-3 py-3'>AI Score: {accuracyPercentage}</p>
              </div>
            ) : (
              <button
                type="button"
                onClick={resumeScore}
                className="text-white px-3 py-2 rounded-md text-lg font-semibold"
              >
                Resume Score
              </button>
            )}
            <div>
              <button
                className="text-white px-3 py-2 rounded-md text-lg font-semibold"
                onClick={handleClick}
              >
                Suggest
              </button>

              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-gray-600 rounded-md shadow-lg w-96 p-5 text-3xl">
                    <button onClick={handleClose} className="text-white float-right">
                      &times;
                    </button>
                    <p className="text-white text-sm">
                      {isLoading ? (
                        'Loading...'
                      ) : error ? (
                        <span className="text-red-500">{error}</span>
                      ) : (
                        suggestions.map((suggestion, index) => (
                          <div key={index} className="mb-4 text-lg p-2">
                            {suggestion}
                            <button
                              className="text-white float-end text-xs px-2 py-1 m-3 bg-violet-700 hover:bg-blue-600 rounded-md flex items-center gap-1 mt-2"
                              onClick={() => {
                                navigator.clipboard.writeText(suggestion);
                                alert('Suggestion copied to clipboard!');
                              }}
                            >
                              <i className="fas fa-copy"></i> Copy
                            </button>
                            <hr className="my-1 border-gray-400" />
                          </div>
                        ))
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>
            */}
            
       
            <Link to="#" className="text-white px-3 py-2 rounded-md text-lg font-semibold">AI Resume Builder</Link>
            <Link to="/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">AI Resume Fetch</Link>
            <Link to="https://www.perfectresume.ca/blog/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">Resources</Link>
            <Link to="https://www.perfectresume.ca/" className="text-white px-3 py-2 rounded-md text-lg font-semibold">About Us</Link>
      
            <Link
            to="/adminlogin"  className="text-white px-3 py-2 rounded-md text-lg font-semibold">
            <span className="mr-2">🛡️</span>
            <span>Admin</span>
          </Link>

          </div>
          <div className="hidden md:flex justify-center items-center gap-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-white px-4 py-2 text-md font-semibold border-2 rounded-xl"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-white px-4 py-2 text-md font-semibold border-2 rounded-xl">Log in</Link>
                <Link to="/signup" className="text-white px-4 py-2 text-md font-semibold border-2 rounded-xl">Sign up</Link>
              </>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuClick}
              className="text-white hover:text-gray-700 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Resume Score</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>AI Resume Builder</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>AI Resume Fetch</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Resources</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>About Us</Link>
              <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Blog</Link>
              
              {isLoggedIn ? (
                <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={() => { handleLogout(); handleLinkClick(); }}>Logout</Link>
              ) : (
                <>
                  <Link to="/login" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Log in</Link>
                  <Link to="/signup" className="text-white block px-3 py-2 rounded-md text-base font-semibold" onClick={handleLinkClick}>Sign up</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
