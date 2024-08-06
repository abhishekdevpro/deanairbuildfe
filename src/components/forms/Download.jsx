import React, { useRef, useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { useDownload } from '../forms/DownloadContext'; // Adjust the import path as necessary

const Download = () => {
  const targetRef = useDownload();
  const [isVisible, setIsVisible] = useState(false);
  const linkRef = useRef(null);

  const handleDownload = () => {
    const element = targetRef.current;

    const opt = {
      margin: 0.5,
      filename: 'cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).toPdf().output('datauristring').then((dataUri) => {
      const link = document.createElement('a');
      link.href = dataUri;
      link.download = 'cv.pdf';
      link.click();
    });
  };

  useEffect(() => {
    // Get the current URL
    const url = new URL(window.location.href);
    
    // Check if the URL contains the token parameter
    const searchParams = new URLSearchParams(url.search);
    
    if (searchParams.has('token')) {
      setIsVisible(true);
      handleDownload(); // Automatically trigger download when visible
    } else {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) {
    return null; // Render nothing if the button should be hidden
  }

  return (
    <button onClick={handleDownload} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-blue-500 rounded-lg group bg-blue-800 group-hover:bg-blue-950 border hover:text-white dark:text-blue focus:ring-2 focus:outline-none focus:ring-blue-100 dark:focus:ring-blue-100">
      <span className="relative p-5 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-100 rounded-md group-hover:bg-opacity-0 font-bold">
        Download
      </span>
    </button>
  );
};

export default Download;
