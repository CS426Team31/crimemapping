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
const db = firebase.ref();


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

 const [records,setRecords]=useState([]);

 // console.log(records)

useEffect(() => {

  db.on("value", (snapshot) => {
    const data = snapshot.val();
    setRecords(data);  
    
  });
  console.log(records)
 // records.map(item => {LAT = parseInt(records.LAT, 10)})

 // setMarkers = () => {
   //  markers = records.slice(1,100)
  //}
  setMarkers(records.slice(1,100)) 
  console.log(markers)
 
},[])



useEffect(() => {
   let tempArr = records.slice(1,100)
   let tempMarkers = []
   
   console.log(tempArr)
/*   for(let i = 0; i < 100; i++)
   {
      tempMarkers.push({
         id: 1*[i],
         Crime: tempArr[i].Type_Description,
         Date: tempArr[i].Event_Date,
         General_Location: tempArr[i].General_Location,
         lat: parseFloat(tempArr[i].LAT),
         lng: parseFloat(tempArr[i].LONG)
      })
   }
  */ 
      
   setMarkers(tempArr)
 ////  console.log(markers)  
 //markers.map()

}, [])
  //  console.log(markers[3])


           {/**   this goes on within  the first googlemaps tag but took it out for now
             onClick={(event) => {
                setMarkers(current => [...current, {
                  lat:39.529633,
                  lng: -119.813805,
                  id: 1,
                }])
              }}   
            */}

 const [selected, setSelected] = useState({});
 const onSelect = item => {
   setSelected(item);
 }

 const locations = [
 {
  id: 1, 
    Crime:"ASSAULT/BATTERY",
    Date: "01/14/2021 21:59:40", 
    General_Location: "BLOCK OF PIUTE VALLEY DR",
    Location: {
       lat: 35.3012657166,
       lng:-115.880180359 
    },
   },
   {
     id: 2,
    Crime:" AUTO BURGLARY",
    Date: "01/14/2021 21:47:36 ", 
    General_Location: "8500 HUNDRED BLOCK OF TWINKLING TOPAZ AVE",
    Location: {
       lat:36.3096656799 ,
       lng:-115.281738281 
    },
   },
   {
     id: 3,
    Crime:" OTHER DISTURBANCE",
    Date: "01/14/2021 21:46:18 ", 
    General_Location: "4300 HUNDRED BLOCK OF S DECATUR BLVD",
    Location: {
       lat:36.1106987,
       lng:-115.207901001 
    },
   },
   {
     id: 4,
    Crime:" OTHER DISTURBANCE",
    Date: "01/14/2021 21:37:02 ", 
    General_Location: "700 HUNDRED BLOCK OF E NAPLES DR",
    Location: {
       lat: 36.1058006287,
       lng:-115.149337769 
    },
   },
   {
     id: 5,
    Crime:" OTHER DISTURBANCE",
    Date: "01/14/2021 21:36:51 ", 
    General_Location: "E WYOMING AVE / S LAMB BLVD",
    Location: {
       lat:36.1518669128,
       lng:-115.083213806 
    },
   },
   {
    id: 6,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 21:25:59 ", 
   General_Location: "2800 HUNDRED BLOCK OF E CHARLESTON BLVD",
   Location: {
      lat:36.158706665,
      lng:-115.110145569
   },
  },
  {
    id: 7,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 21:19:18 ", 
   General_Location: "1500 HUNDRED BLOCK OF E ROCHELLE AVE",
   Location: {
      lat:36.1110420227,
      lng:-115.132232666
   },
  },
  {
    id: 8,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 21:01:10 ", 
   General_Location: "5200 HUNDRED BLOCK OF S PEARL ST",
   Location: {
      lat:36.0940666199,
      lng:-115.096351624
   },
  },
  {
    id: 9,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 21:01:06 ", 
   General_Location: "10100 HUNDRED BLOCK OF HUNTER SPRINGS DR",
   Location: {
      lat:36.2085037231,
      lng:-115.317405701
   },
  },
  {
    id: 10,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 21:00:58 ", 
   General_Location: "8500 HUNDRED BLOCK OF W SAHARA AVE",
   Location: {
      lat:36.1440391541,
      lng:-115.277801514
   },
  },
  {
    id: 11,
   Crime:" ASSAULT/BATTERY",
   Date: "01/14/2021 20:54:02 ", 
   General_Location: "E BONANZA RD / N MOJAVE RD",
   Location: {
      lat:36.1736526489,
      lng:-115.105796814
   },
  },
  {
    id: 12,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 20:47:02 ", 
   General_Location: "1700 HUNDRED BLOCK OF FREMONT ST",
   Location: {
      lat:36.1633758545,
      lng:-115.126907349
   },
  },
  {
    id: 13,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 20:43:41 ", 
   General_Location: "3800 HUNDRED BLOCK OF CAMBRIDGE ST",
   Location: {
      lat:36.1198196411,
      lng:-115.141944885
   },
  },
  {
    id: 14,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 20:15:56 ", 
   General_Location: "4800 HUNDRED BLOCK OF S LAS VEGAS BLVD",
   Location: {
      lat:36.0845413208,
      lng:-115.173622131
   },
  },
  {
    id: 15,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 20:16:56 ", 
   General_Location: "4800 HUNDRED BLOCK OF S LAS VEGAS BLVD",
   Location: {
      lat:36.0945413208,
      lng:-115.183622131
   },
  },
  {
    id: 16,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 20:05:52 ", 
   General_Location: "5200 HUNDRED BLOCK OF MANDALAY SPRINGS DR",
   Location: {
      lat:36.0251576233,
      lng:-115.119298706
   },
  },
  {
    id: 17,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 20:06:52 ", 
   General_Location: "5200 HUNDRED BLOCK OF MANDALAY SPRINGS DR",
   Location: {
      lat:36.0951576333,
      lng:-115.109258706
   },
  },
  {
    id: 18,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 19:58:22 ", 
   General_Location: "500 HUNDRED BLOCK OF N 1ST ST",
   Location: {
      lat:36.176410675,
      lng:-115.142097473
   },
  },
  {
    id: 19,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 19:58:22 ", 
   General_Location: "500 HUNDRED BLOCK OF N 1ST ST",
   Location: {
      lat:36.176410675,
      lng:-115.142097473
   },
  },
  {
    id: 20,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 19:47:56 ", 
   General_Location: "900 HUNDRED BLOCK OF COTTAGE GROVE AVE",
   Location: {
      lat:36.111869812,
      lng:-115.142791748
   },
  },
  {
    id: 21,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 19:47:56 ", 
   General_Location: "900 HUNDRED BLOCK OF COTTAGE GROVE AVE",
   Location: {
      lat:36.111869812,
      lng:-115.142791748
   },
  },
  {
    id: 22,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 19:20:00 ", 
   General_Location: "7400 HUNDRED BLOCK OF MOUNTAIN THICKET ST",
   Location: {
      lat:36.295211792,
      lng:-115.277603149
   },
  },
  {
    id: 23,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 19:20:00", 
   General_Location: "7400 HUNDRED BLOCK OF MOUNTAIN THICKET ST",
   Location: {
      lat:36.295211792,
      lng:-115.277603149
   },
  },
  {
    id: 24,
   Crime:" ASSAULT/BATTERY",
   Date: "01/14/2021 19:05:02 ", 
   General_Location: "3600 HUNDRED BLOCK OF S LAS VEGAS BLVD", 
   Location: {
      lat:36.112033844,
      lng:-115.172264099
   },
  },
  {
    id: 25,
   Crime:" ASSAULT/BATTERY",
   Date: "01/14/2021 19:05:02 ", 
   General_Location: "3600 HUNDRED BLOCK OF S LAS VEGAS BLVD",
   Location: {
      lat:36.112033844,
      lng:-115.172264099
   },
  },
  {
    id: 26,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 19:03:30 ", 
   General_Location: "1100 HUNDRED BLOCK OF LAUREL AVE",
   Location: {
      lat:36.1570091248,
      lng:-115.10030365
   },
  },
  {
    id: 27,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 19:03:30 ", 
   General_Location: "1100 HUNDRED BLOCK OF LAUREL AVE",
   Location: {
      lat:36.1570091248,
      lng:-115.10030365
   },
  },
  {
    id: 28,
   Crime:" LARCENY FROM PERSON (NON ROBBERY)",
   Date: "01/14/2021 19:02:31 ", 
   General_Location: "3600 HUNDRED BLOCK OF S LAS VEGAS BLVD",
   Location: {
      lat:36.1124763489,
      lng:-115.171989441
   },
  },
  {
    id: 29,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 18:58:53 ", 
   General_Location: "3600 HUNDRED BLOCK OF S LAS VEGAS BLVD",
   Location: {
      lat:36.2008857727,
      lng:-115.221481323
   },
  },
  {
    id: 30,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 18:58:53 ", 
   General_Location: "5900 HUNDRED BLOCK OF W BARTLETT AVE",
   Location: {
      lat:36.2008857727,
      lng:-115.221481323
   },
  },
  {
    id: 31,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 18:26:36 ", 
   General_Location: "5900 HUNDRED BLOCK OF W BARTLETT AVE",
   Location: {
      lat:36.1300506592,
      lng:-115.206459045
   },
  },
  {
    id: 32,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 18:26:36 ", 
   General_Location: "4800 HUNDRED BLOCK OF W DESERT INN RD",
   Location: {
      lat:36.1300506592,
      lng:-115.206459045
   },
  },
  {
    id: 100,
   Crime:" ASSAULT/BATTERY",
   Date: "01/14/2021 18:26:36 ", 
   General_Location: "4800 HUNDRED BLOCK OF W DESERT INN RD",
   Location: {
      lat:36.0053787231,
      lng:-115.232955933
   },
  },
  {
    id: 33,
   Crime:" ASSAULT/BATTERY",
   Date: "01/14/2021 18:06:11 ", 
   General_Location: "6400 HUNDRED BLOCK OF BOMBAX CT",
   Location: {
      lat:36.0053787231,
      lng:-115.232955933
   },
  },
  {
    id: 34,
   Crime:" ASSAULT/BATTERY",
   Date: "01/14/2021 18:06:11 ", 
   General_Location: "6400 HUNDRED BLOCK OF BOMBAX CT",
   Location: {
      lat:36.0053787231,
      lng:-115.232955933
   },
  },
  {
    id: 35,
   Crime:" STOLEN MOTOR VEHICLE",
   Date: "01/14/2021 18:05:45 ", 
   General_Location: "8500 HUNDRED BLOCK OF DANZA DEL SOL DR",
   Location: {
      lat:36.1889266968,
      lng:-115.281013489
   },
  },
  {
    id: 36,
   Crime:" STOLEN MOTOR VEHICLE",
   Date: "01/14/2021 18:03:45 ", 
   General_Location: "8500 HUNDRED BLOCK OF DANZA DEL SOL DR",
   Location: {
      lat:36.1889366968,
      lng:-115.281003489
   },
  },
  {
    id: 37,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 18:00:57 ", 
   General_Location: "1100 HUNDRED BLOCK OF LAUREL AVE",
   Location: {
      lat:36.1570091248,
      lng:-115.10030365
   },
  },
  {
    id: 38,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 18:02:57 ", 
   General_Location: "1100 HUNDRED BLOCK OF LAUREL AVE",
   Location: {
      lat:36.1570091348,
      lng:-115.10030465
   },
  },
  {
    id: 39,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 17:55:21 ", 
   General_Location: "5400 HUNDRED BLOCK OF S FORT APACHE RD",
   Location: {
      lat:36.0897865295,
      lng:-115.297386169
   },
  },
  {
    id: 40,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 17:56:21 ", 
   General_Location: "5400 HUNDRED BLOCK OF S FORT APACHE RD",
   Location: {
      lat:36.0897864295,
      lng:-115.297386189
   },
  },
  {
    id: 41,
   Crime:" BURGLARY",
   Date: "01/14/2021 17:53:36 ", 
   General_Location: "7000 HUNDRED BLOCK OF W ARBY AVE",
   Location: {
      lat:36.0593261719,
      lng:-115.245040894
   },
  },
  {
    id: 42,
   Crime:" BURGLARY",
   Date: "01/14/2021 17:54:36 ", 
   General_Location: "7000 HUNDRED BLOCK OF W ARBY AVE",
   Location: {
      lat:36.0593262719,
      lng:-115.245040994
   },
  },
  {
    id: 43,
   Crime:" MALICIOUS DESTRUCT OF PROP",
   Date: "01/14/2021 17:40:48 ", 
   General_Location: "2900 HUNDRED BLOCK OF BROCKINGTON DR",
   Location: {
      lat:36.090045929,
      lng:-115.110794067
   },
  },
  {
    id: 44,
   Crime:" MALICIOUS DESTRUCT OF PROP",
   Date: "01/14/2021 17:45:48 ", 
   General_Location: "2900 HUNDRED BLOCK OF BROCKINGTON DR",
   Location: {
      lat:36.090046929,
      lng:-115.110794267
   },
  },
  {
    id: 45,
   Crime:" MALICIOUS DESTRUCT OF PROP",
   Date: "01/14/2021 17:45:48 ", 
   General_Location: "2900 HUNDRED BLOCK OF BROCKINGTON DR",
   Location: {
      lat:36.090046329,
      lng:-115.110794167
   },
  },
  {
    id: 46,
   Crime:" MALICIOUS DESTRUCT OF PROP",
   Date: "01/14/2021 17:45:48 ", 
   General_Location: "2900 HUNDRED BLOCK OF BROCKINGTON DR",
   Location: {
      lat:36.090246329,
      lng:-115.110784167
   },
  },
  {
    id: 47,
   Crime:" MALICIOUS DESTRUCT OF PROP",
   Date: "01/14/2021 17:45:48 ", 
   General_Location: "2900 HUNDRED BLOCK OF BROCKINGTON DR",
   Location: {
      lat:36.090236329,
      lng:-115.110784157
   },
  },
  {
    id: 48,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 17:40:25 ", 
   General_Location: "1700 HUNDRED BLOCK OF KENYON PL",
   Location: {
      lat:36.1657981873,
      lng:-115.164283752
   },
  },
  {
    id: 49,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 17:41:25 ", 
   General_Location: "1700 HUNDRED BLOCK OF KENYON PL",
   Location: {
      lat:36.1657981673,
      lng:-115.164283652
   },
  },
  {
    id: 50,
   Crime:" MALICIOUS DESTRUCT OF PROP",
   Date: "01/14/2021 17:38:39 ", 
   General_Location: "4100 HUNDRED BLOCK OF N LAMB BLVD",
   Location: {
      lat:36.235206604,
      lng:-115.079978943
   },
  },
  {
    id: 51,
   Crime:" MALICIOUS DESTRUCT OF PROP",
   Date: "01/14/2021 17:24:39 ", 
   General_Location: "4100 HUNDRED BLOCK OF N LAMB BLVD",
   Location: {
      lat:36.235206504,
      lng:-115.079978923
   },
  },
  {
    id: 52,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 17:38:24 ", 
   General_Location: "100 HUNDRED BLOCK OF S 15TH ST",
   Location: {
      lat:36.16355896,
      lng:-115.129867554
   },
  },
  {
    id: 53,
   Crime:" OTHER DISTURBANCE",
   Date: "01/14/2021 17:32:24 ", 
   General_Location: "100 HUNDRED BLOCK OF S 15TH ST",
   Location: {
      lat:36.16355886,
      lng:-115.129867454
   },
  },
  {
    id: 101,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 17:29:56 ", 
   General_Location: "5300 HUNDRED BLOCK OF E CRAIG RD",
   Location: {
      lat:36.2406234741,
      lng:-115.056419373
   },
  },
  {
    id: 54,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 17:29:56 ", 
   General_Location: "5300 HUNDRED BLOCK OF E CRAIG RD",
   Location: {
      lat:36.2406234741,
      lng:-115.056419373
   },
  },
  {
    id: 55,
   Crime:" AUTO BURGLARY",
   Date: "01/14/2021 17:23:56 ", 
   General_Location: "5300 HUNDRED BLOCK OF E CRAIG RD",
   Location: {
      lat:36.2406232741,
      lng:-115.056419473
   },
  },
  {
    id: 56,
   Crime:" MALICIOUS DESTRUCT OF PROP",
   Date: "01/14/2021 17:24:31 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.2285308838,
      lng:-115.274703979
   },
  },
  {
    id: 57,
   Crime:" MALICIOUS DESTRUCT OF PROP",
   Date: "01/14/2021 17:22:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.2285338838,
      lng:-115.274703929
   },
  },
  {
    id: 58,
   Crime:" ASSAULT/BATTERY",
   Date: "01/14/2021 17:22:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.2285338838,
      lng:-115.274703929
   },
  },
  {
    id: 59,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1457977295,
      lng:-115.081871033
   },
  },
  {
    id: 60,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.2285346838,
      lng:-115.274703429
   },
  },
  {
    id: 61,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.0856781006,
      lng:-115.250732422
   },
  },
  {
    id: 62,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.0856781006,
      lng:-115.250732422
   },
  },
  {
    id: 63,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1596832275,
      lng:-115.199211121
   },
  },
  {
    id: 64,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.2285378838,
      lng:-115.274704729
   },
  },
  {
    id: 65,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.2316093445,
      lng:-115.208129883
   },
  },
  {
    id: 66,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.2316093445,
      lng:-115.208129883
   },
  },
  {
    id: 67,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1760139465,
      lng:-115.259941101
   },
  },
  {
    id: 68,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.2285348638,
      lng:-115.274713729
   },
  },
  {
    id: 69,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1368408203,
      lng:-115.161834717
   },
  },
  {
    id: 70,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1368408203,
      lng:-115.161834717
   },
  },
  {
    id: 71,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1368406203,
      lng:-115.161834517
   },
  },
  {
    id: 72,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1465950012,
      lng:-115.160179138
   },
  },
  {
    id: 73,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1465950012,
      lng:-115.160179138
   },
  },
  {
    id: 74,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1633338928,
      lng:-115.126998901
   },
  },
  {
    id: 75,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1633338928,
      lng:-115.126998901
   },
  },
  {
    id: 76,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1729888916,
      lng:-115.144851685
   },
  },
  {
    id: 77,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1729888916,
      lng:-115.144851685
   },
  },
  {
    id: 78,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1623497009,
      lng:-115.09954071
   },
  },
  {
    id: 79,
   Crime:" ASSAULT/BATTERY",
   Date: "01/13/2021 17:12:30 ", 
   General_Location: "3700 HUNDRED BLOCK OF WARMBREEZE WAY",
   Location: {
      lat:36.1623497109,
      lng:-115.09954271
   },
  },
{
 id: 80,
 General_Location: "5500 HUNDRED BLOCK OF RICOCHET AVE",
 Crime:" OTHER DISTURBANCE",
 Date: "01/14/2021 13:53:00 ", 
 Location: {
    lat:36.1730422974,
    lng:-115.050582886
 },
},
{
  id: 81,
  General_Location: "3300 HUNDRED BLOCK OF S LAS VEGAS BLVD",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 13:26:28 ", 
  Location: {
     lat:36.1241226196,
     lng:-115.168251038
  },
 },
 {
  id: 82,
  General_Location: "BLOCK OF RADWICK DR",
  Crime:" STOLEN MOTOR VEHICLE",
  Date: "01/14/2021 12:48:24 ", 
  Location: {
     lat:36.1601715088,
     lng:-115.021278381
  },
 },
 {
  id: 83,
  General_Location: "2800 HUNDRED BLOCK OF S MARYLAND PKWY",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 12:10:50 ", 
  Location: {
     lat:36.1383171082,
     lng:-115.136749268
  },
 },
 {
  id: 84,
  General_Location: "3000 HUNDRED BLOCK OF S LAS VEGAS BLVD",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 10:38:06", 
  Location: {
     lat:36.1329612732,
     lng:-115.163902283
  },
 },
 {
  id: 85,
  General_Location: "900 HUNDRED BLOCK OF SIERRA VISTA DR",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 09:36:38 ", 
  Location: {
     lat:36.1269645691,
     lng:-115.141654968
  },
 },
 {
  id: 86,
  General_Location: "6500 HUNDRED BLOCK OF BOULDER HWY",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 09:34:13 ", 
  Location: {
     lat:36.0831565857,
     lng:-115.030914307
  },
 },
 {
  id: 87,
  General_Location: "800 HUNDRED BLOCK OF PARKHURST ST",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 08:57:14 ", 
  Location: {
     lat:36.1799507141,
     lng:-115.094314575
  },
 },
 {
  id: 88,
  General_Location: "2300 HUNDRED BLOCK OF E FLAMINGO RD",
  Crime: "RECOVERED STOLEN VEHICLE",
  Date: "01/14/2021 08:54:25 ", 
  Location: {
     lat:36.1146430969,
     lng:-115.120368958
  },
 },
 {
  id: 89,
  General_Location: "2200 HUNDRED BLOCK OF FREMONT ST",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 08:43:46 ", 
  Location: {
     lat:36.1599349976,
     lng:-115.119346619
  },
 },
 {
  id: 90,
  General_Location: "2800 HUNDRED BLOCK OF E BONANZA RD",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 07:33:12 ", 
  Location: {
     lat:36.1740875244,
     lng:-115.110328674
  },
 },
 {
  id: 91,
  General_Location: "9400 HUNDRED BLOCK OF BERMUDA RD",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 07:20:11 ", 
  Location: {
     lat:36.017326355,
     lng:-115.154426575
  },
 },
 {
  id: 92,
  General_Location: "5200 HUNDRED BLOCK OF CASPIAN SPRINGS DR",
  Crime:" AUTO BURGLARY",
  Date: "01/14/2021 06:32:39 ", 
  Location: {
     lat:36.0954780579,
     lng:-115.1039505
  },
 },
 {
  id: 93,
  General_Location: "2400 HUNDRED BLOCK OF W SAHARA AVE",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 05:52:55 ", 
  Location: {
     lat:36.144241333,
     lng:-115.174385071
  },
 },
 {
  id: 94,
  General_Location: "3200 HUNDRED BLOCK OF E FLAMINGO RD",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 05:37:21 ", 
  Location: {
     lat:36.1150169373,
     lng:-115.103797913
  },
 },
 {
  id: 95,
  General_Location: "4800 HUNDRED BLOCK OF S FORT APACHE RD",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 04:39:57 ", 
  Location: {
     lat:36.1014289856,
     lng:-115.29737854
  },
 },
 {
  id: 96,
  General_Location: "2800 HUNDRED BLOCK OF ASHBY AVE",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 04:34:43 ", 
  Location: {
     lat:36.1569709778,
     lng:-115.179107666
  },
 },
 {
  id: 97,
  General_Location: "1400 HUNDRED BLOCK OF LIVING DESERT DR",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 03:45:01 ", 
  Location: {
     lat:36.1065559387,
     lng:-115.133529663
  },
 },
 {
  id: 98,
  General_Location: "400 HUNDRED BLOCK OF N 28TH ST",
  Crime:" ASSAULT/BATTERY",
  Date: "01/14/2021 03:41:37 ", 
  Location: {
     lat:36.1686019897,
     lng:-115.111602783
  },
 },
 {
  id: 99,
  General_Location: "5700 HUNDRED BLOCK OF WAYNE NEWTON BLVD",
  Crime:" OTHER DISTURBANCE",
  Date: "01/14/2021 02:08:25 ", 
  Location: {
     lat:36.0840911865,
     lng:-115.149307251
  },
 }


 ];




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
                  {locations.map(item => {
                    return(
                      <Marker key={item.id} 
                      position={item.Location}
                      onClick={() => onSelect(item)}
                      />
                    )
                  })}
                  {selected.Location && (
                    <InfoWindow
                    position={selected.Location}
                    clickable={true}
                    onCloseClick={() => setSelected({})}
                    >
                      <p>{selected.Type_Description }{selected.General_Location}</p>
                      
                    </InfoWindow>
                  )} 
     {/*}         {markers.map((marker) => (
              <Marker 
                key={marker.value}
                position={{ lat: marker.lat, lng: marker.lng }} 
              />
     ))}   */}     
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


                    
