import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { useArcGIS } from "../../../hooks/useArcGIS";
import BasemapGalleryWidget from "../../ui/widgets/BasemapGalleryWidget/BasemapGalleryWidget";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";


export default function ArcMapView() {

    const {mapRef, viewRef} = useArcGIS();

    useEffect(() => {
        if (!mapRef.current) return; // Ensure ref exists before using it

        console.log("Initializing ArcGIS Map...");

        const map = new Map({
            basemap: "osm",
        });

        const mapView = new MapView({
            container: mapRef.current,
            map: map,
            center: [77.4126, 23.2599], // Longitude, Latitude (Madhya Pradesh)
            zoom: 5, // Adjust zoom level as needed
        });

        viewRef.current = mapView;

        const basemapGallery = new BasemapGallery({
            view: viewRef.current,
          });
      
          const basemapGalleryExpand = new Expand({
            view: viewRef.current,
            content: basemapGallery,
            expanded: false,
          });
      
          viewRef.current.ui.add(basemapGalleryExpand, "top-right");
        
        return () => {
            if (mapView) {
                mapView.container = null; // Properly remove reference
                mapView.destroy(); // Cleanup ArcGIS resources
            }
        };
    }, []);
    return (
        <>
            <div ref={mapRef} className="w-full h-[100vh]"></div>
        </>
    )
}
