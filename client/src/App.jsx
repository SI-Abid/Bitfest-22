import React from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";

export const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBhIqib-vFJwvMMPWlNTdKAAzc_CDorxOg",
  });
  // console.log(process.env);
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
}
