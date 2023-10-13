import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBhIqib-vFJwvMMPWlNTdKAAzc_CDorxOg",
  });
  const libraries = ["places"];

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 0,  // Default latitude
    lng: 0,  // Default longitude
  };

  const options = {
    zoomControl: true,
  };
  // console.log(process.env);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setUserLocation({ lat: userLat, lng: userLng });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={userLocation || center}
          zoom={10}
          options={options}
        >
          {userLocation && (
            <Marker
              position={userLocation}
              icon={{
                url: "https://static.vecteezy.com/system/resources/previews/013/760/669/original/map-location-pin-icon-in-red-colors-png.png",
                scaledSize: new window.google.maps.Size(40, 40), // Adjust size as needed
              }}
            />
          )}
        </GoogleMap>
      )}
    </div>
  );
}

export default App;