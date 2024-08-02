import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PdfDownloadButton = () => {
  const [resumeId, setResumeId] = useState(null);

  useEffect(() => {
    // Extract resumeId from URL
    const path = window.location.pathname;
    const id = path.split('/').pop(); // Get the last part of the URL
    setResumeId(id);
  }, []);

  const handleChoosePlan = () => {
    const amount = 49; // Fixed price
    const token = localStorage.getItem('token'); // Retrieve token from localStorage

    const payload = {
      amount,
      ResumeId: resumeId, // Ensure the field name matches the API expectation
      Token: token || '' // Ensure the field name matches the API expectation
    };

    axios.post('https://api.perfectresume.ca/api/user/paypal/create-payment', payload, {
      headers: { 'Content-Type': 'application/json' }, // Use JSON content type
    })
    .then(response => {
      const data = response.data;
      if (data && data.data) {
        // Redirect to the PayPal URL provided in the response
        window.location.href = data.data;
      }
    })
    .catch(error => console.error('Payment Error:', error));
  };

  return (
    <button 
      onClick={handleChoosePlan} 
      className="bg-blue-900 text-white p-2 rounded-lg m-2"
    >
      Choose This Plan
    </button>
  );
};

export default PdfDownloadButton;
