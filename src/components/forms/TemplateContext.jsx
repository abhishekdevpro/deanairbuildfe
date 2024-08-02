import React, { createContext, useContext, useState } from 'react';

// Create the context
const TemplateContext = createContext();

// Create a provider component
export const TemplateProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("Template1");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [textSize, setTextSize] = useState(2);
  const [sectionSpacing, setSectionSpacing] = useState(2);
  const [paragraphSpacing, setParagraphSpacing] = useState(2);
  const [lineSpacing, setLineSpacing] = useState(1.5);
  const [boxBgColor, setBoxBgColor] = useState("#ffffff");

  return (
    <TemplateContext.Provider value={{
      selectedTemplate,
      setSelectedTemplate,
      selectedFont,
      setSelectedFont,
      textSize,
      setTextSize,
      sectionSpacing,
      setSectionSpacing,
      paragraphSpacing,
      setParagraphSpacing,
      lineSpacing,
      setLineSpacing,
      boxBgColor,
      setBoxBgColor
    }}>
      {children}
    </TemplateContext.Provider>
  );
};

// Create a custom hook to use the context
export const useTemplate = () => {
  return useContext(TemplateContext);
};
