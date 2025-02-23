"use client";

import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const officeLocation = {
  lat: 23.602924638210325,// Replace with your office latitude
  lng: 58.35792120793616 , // Replace with your office longitude
};

const GoogleMapComponent = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const [showInfoWindow, setShowInfoWindow] = useState(true);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={officeLocation} zoom={15}>
        {/* Marker for the Office */}
        <Marker
          position={officeLocation}
          onClick={() => setShowInfoWindow(true)}
        />

        {/* Info Window with Company Name */}
        {showInfoWindow && (
          <InfoWindow
            position={officeLocation}
            onCloseClick={() => setShowInfoWindow(false)}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" ,color:'#000' }}>THURAYAbiz</h3>
              <p style={{ margin: 0,color:'#000' }}>18th November street azaiba posite of al Fair</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;


