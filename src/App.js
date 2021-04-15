import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/Pages/About";
import Charts from "./components/Pages/charts.component";
import DataList from "./components/Pages/data-list.component";
import firebase from "./firebase";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
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

//Firebase gets called here and passes the whole dataset
const db = firebase.ref();

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

  const [markers, setMarkers] = useState([]);

  const [records, setRecords] = useState([]);

  // console.log(records)

  useEffect(() => {
    db.on("value", (snapshot) => {
      const data = snapshot.val();
      setRecords(data);
    });
  }, []);

  useEffect(() => {
    if (records && records.length) {
      for (var i = 0; i < 10; i++) {
        var lat = [];
        var long = [];
        var type = [];

        lat.push([records[i].LAT]);
        long.push(records[i].LONG);
        type.push(records[i].Type_Description);

        // console.log(lat[0]);
        // console.log(long[0]);
        // console.log(lat);
        // console.log(long);
      }
    }
  });

  {
    /**   this goes on within  the first googlemaps tag but took it out for now
             onClick={(event) => {
                setMarkers(current => [...current, {
                  lat:39.529633,
                  lng: -119.813805,
                  id: 1,
                }])
              }}   
            */
  }
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Search panTo={panTo} />
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={13}
              center={center}
              options={options}
              onLoad={onMapload}
            >
              {/*}         {markers.map((marker) => (
              <Marker 
                key={marker.value}
                position={{ lat: marker.lat, lng: marker.lng }} 
              />
     ))}   */}
            </GoogleMap>
          </Route>

          <Route exact path="/About" component={About} />
          <Route exact path="/Charts" component={Charts} />
          <Route exact path="/Data" component={DataList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
