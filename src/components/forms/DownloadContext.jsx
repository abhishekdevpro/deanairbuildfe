// DownloadContext.js
import React, { createContext, useContext, useRef } from 'react';

const DownloadContext = createContext();

export const useDownload = () => useContext(DownloadContext);

export const DownloadProvider = ({ children }) => {
  const targetRef = useRef(null);

  return (
    <DownloadContext.Provider value={targetRef}>
      {children}
    </DownloadContext.Provider>
  );
};
