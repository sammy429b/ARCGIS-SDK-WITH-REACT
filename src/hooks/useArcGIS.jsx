import { useContext } from "react";
import { ArcGISContext } from "../context/ArcGISContext";

// Custom Hook to use ArcGIS Context
export const useArcGIS = () => {
    const context = useContext(ArcGISContext);
    if (!context) {
      throw new Error("useArcGIS must be used within an ArcGISProvider");
    }
    return context;
  };