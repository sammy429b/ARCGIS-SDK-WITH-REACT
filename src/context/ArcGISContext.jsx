import React, { createContext, useRef } from "react";


// Create Context
export const ArcGISContext = createContext(null);

// Provider Component
export const ArcGISProvider = ({ children }) => {
  const mapRef = useRef(null); // Reference to the div
  const viewRef = useRef(null); // Reference to MapView instance
  return (
    <ArcGISContext.Provider value={{ mapRef, viewRef }}>
      {children}
    </ArcGISContext.Provider>
  );
};



