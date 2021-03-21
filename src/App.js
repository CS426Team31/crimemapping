import React from "react";
//import Header from './components/Header'
import Search from "./components/Search";
//import Sidebar from './components/Sidemenu/Sidebar'
//import Filter from './components/Filter'
//import { Button } from "./components/layout/Button";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
  //  Marker,
  // InfoWindow,
} from "@react-google-maps/api"; //imported the map

const libraries = ["places"];

//This is how big we want the map to be
const mapContainerStyle = {
  width: "100vw",
  height: "91vh",
};

//where to center at the start of the program (these coordinates set it on Reno)
const center = {
  lat: 39.529633,
  lng: -119.813805,
};

//Deafault stuff
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

// This is the main application function
const App = () => {
  //This loads the google API key
  const { isLoaded, loadError } = useLoadScript({
    //This is a hook...imma need to do more research on this
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = React.useRef();
  const onMapload = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(13);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <Router>
        <Navbar />
        <Search panTo={panTo} />
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={center}
          options={options}
          onLoad={onMapload}
        />
      </Router>
    </div>
  );
};

export default App;
