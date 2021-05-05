import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/Pages/About";
import Charts from "./components/Pages/charts.component";
import DataList from "./components/Pages/data-list.component";
import firebase from "./firebase";

//Dependancies for the google maps
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];

//This is how big we want the map to be on the website
const mapContainerStyle = {
  width: "100vw",
  height: "91vh",
};

//Where to center at the start of the program (these coordinates are on Reno)
const center = {
  lat: 39.529633,
  lng: -119.813805,
};

//Default stuff
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

//Firebase gets called here and the "limitToFirst" function pulls the first 'n' number of elements
const db = firebase.ref().limitToFirst(100);

// THIS IS THE MAIN APPLICAITON FUNCTION
const App = () => {
  //This loads the google API key which is stored in the .env.local file
  //The key is made by making a google maps api and choosing the necessary functions
  //for it.
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  //These variables will be used for the google maps
  const mapRef = React.useRef();
  const onMapload = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  //This part of the code helps transition to the coordinates given on the map
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(13);
  }, []);

  //This useState array is used to store the data from the firebase realtime database
  const [markers, setMarkers] = useState([]);

  //This useEffect function helps cut out two functions that are usually used
  //to check if a certain variable or component has been updated.
  //In this case, the useEffect get triggered whenever it detects that the
  //markers array had a change
  useEffect(() => {
    db.on("value", (snapshot) => {
      const data = snapshot.val();
      setMarkers(data);
    });
  }, []);

  //The following line has been commented out, but it was used to check if the data was succesfully passed
  //and can be seen on the console
  //  console.log(markers)

  //This variable is used for the infoWindow
  const [selected, setSelected] = useState({});
  const onSelect = (marker) => {
    setSelected(marker);
  };

  //These next two lines just throw a message if the maps either didn't load or is in the
  //process of loading
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  //This following section of the code calls in the components that were made to render them out to
  //the website.
  return (
    //Router,Switch and Route are components from the react-router-dom library that help
    // switch between pages
    <Router>
      <div>
        {/*The Navbar component is excluded from the Switch block since it is a component that
         will be shown in every page and used to guide through it. */}
        <Navbar />
        <Switch>
          {/** The first Route wraps the Search,GoogleMap, Marker and the InfoWindow components
           * so they only pop up in the home page of the website.
           */}
          <Route exact path="/">
            <Search panTo={panTo} />
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={13}
              center={center}
              options={options}
              onLoad={onMapload}
            >
              {/**Below, the marker useState array that was made earlier to hold the data from the
               * firebase request gets looped with the map() function and the coordinates
               * from each element of the array gets extracted and converted to a float data type
               * since they are in a string datatype variable. The InfoWindow component
               * gives off a small block that displays the crime type and general location.
               */}
              {markers.map((marker) => {
                return (
                  <Marker
                    key={marker.ObjectId}
                    position={{
                      lat: parseFloat(marker.LAT),
                      lng: parseFloat(marker.LONG),
                    }}
                    onClick={() => onSelect(marker)}
                    icon={{
                      url:
                        "https://image.flaticon.com/icons/png/128/1304/1304037.png",
                      scaledSize: new window.google.maps.Size(30, 30),
                    }}
                  />
                );
              })}
              {selected.ObjectId && (
                <InfoWindow
                  position={{
                    lat: parseFloat(selected.LAT),
                    lng: parseFloat(selected.LONG),
                  }}
                  clickable={true}
                  onCloseClick={() => onSelect({})}
                >
                  <p>
                    {selected.Event_Date}
                    {selected.Type_Description}
                    {selected.General_Location}
                  </p>
                </InfoWindow>
              )}
            </GoogleMap>
          </Route>

          {/**These next three Routes will help switch to the About, Charts and DataList components */}
          <Route exact path="/About" component={About} />
          <Route exact path="/Charts" component={Charts} />
          <Route exact path="/Data" component={DataList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
