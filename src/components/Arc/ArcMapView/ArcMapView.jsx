import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { useArcGIS } from "../../../hooks/useArcGIS";


export default function ArcMapView() {

    const {mapRef, viewRef} = useArcGIS(null);

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
