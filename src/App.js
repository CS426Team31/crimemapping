import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/Pages/About'
import Charts from "./components/Pages/charts.component"
import DataList from "./components/Pages/data-list.component";
import firebase from "./firebase"

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"               //imported the map

const libraries =  ["places"];

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
const options={
   disableDefaultUI: true,
   zoomControl: true,
};


//Firebase gets called here and passes the whole dataset
const db = firebase.ref().limitToFirst(200);


// This is the main application function
const App = () =>{

   //This loads the google API key
   const {isLoaded, loadError} = useLoadScript({                   //This is a hook...imma need to do more research on this
     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
     libraries,
   })

 const mapRef = React.useRef();
 const onMapload = React.useCallback((map) => {
  mapRef.current = map;
 }, []);

 const panTo = React.useCallback(({lat, lng}) => {
  mapRef.current.panTo({lat, lng});
  mapRef.current.setZoom(13);
 }, []);

 const [markers, setMarkers] =useState([]); 

useEffect(() => {

  db.on("value", (snapshot) => {
    const data = snapshot.val();
    setMarkers(data);  
    
    
  }); 
},[])

    console.log(markers)

 const [selected, setSelected] = useState({});
 const onSelect = item => {
   setSelected(item);
 }

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return( 
   <Router>  
     <div>
      <Navbar />   
        <Switch>
      
            <Route exact path="/" >
              <Search panTo={panTo}/>             
              <GoogleMap 
                  mapContainerStyle={mapContainerStyle}  
                  zoom={13}
                  center={center}  
                  options={options}
                  onLoad={onMapload}
                  
                >
                  {markers.map(marker => {
                    return(
                      <Marker key={marker.ObjectId} 
                      position={{lat:parseFloat(marker.LAT), lng:parseFloat(marker.LONG)}}
                      onClick={() => onSelect(marker)}
                      />
                    )
                  })}
                  {selected.markers && (
                    <InfoWindow
                    position={selected.markers}
                    clickable={true}
                    onCloseClick={() => setSelected({})}
                    >
                      <p>{markers.Type_Description }{markers.General_Location}</p>
                      
                    </InfoWindow>
                  )}     
                </GoogleMap>   
            </Route>
            
            <Route exact path="/About" component={About}/>
            <Route exact path="/Charts" component={Charts}/>
            <Route exact path="/Data" component={DataList}/>
                
            </Switch>
          </div> 
   </Router>
  
  );
}

export default App


                    
