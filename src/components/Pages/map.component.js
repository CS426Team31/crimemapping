import React, { Component } from "react";
import firebase from "../firebase";

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

const datas = [];
const markers = [];

export default class MapData extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveData = this.setActiveData.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      datas: [],
      markers: [],
      currentData: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    var count = 99099;

    var refreshId = setInterval(() => {
      const db = firebase.ref(`/${count}`);
      db.on("value", this.onDataChange);
      count++;
      if (count > 99300) {
        clearInterval(refreshId);
      }
    }, 40);
  }

  componentWillUnmount() {
    // DataDataService.getAll().off("value", this.onDataChange);
  }

  onDataChange(snapshot) {
    const todos = snapshot.val();

    datas.push({
      key: todos.ObjectId,
      Beat: todos.Beat,
      Disposition: todos.Disposition,
      Event_Date: todos.Event_Date,
      Event_Number: todos.Event_Number,
      General_Location: todos.General_Location,
      LAT: todos.LAT,
      LONG: todos.LONG,
      Map_X: todos.Map_X,
      Map_Y: todos.Map_Y,
      New_Y: todos.New_Y,
      ObjectId: todos.ObjectId,
      Type: todos.Type,
      Type_Description: todos.Type_Description,
      WARD: todos.WARD,
    });

    markers.push([todos.LAT, todos.LONG]);

    this.setState({
      datas: datas,
      markers: markers,
    });
  }

  refreshList() {
    this.setState({
      currentData: null,
      currentIndex: -1,
    });
  }

  setActiveData(data, index) {
    this.setState({
      currentData: data,
      currentIndex: index,
    });
  }

  render() {
    const { datas, markers } = this.state;

    let content;
    if (markers.length > 99) {
      content = (
        <div id="mapid">
          <MapContainer center={markers[90]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            {markers.map((position, idx) => (
              <Marker key={`marker-${idx}`} position={position}>
                <Popup>
                  <div>
                    <p>{datas[idx].Event_Date} </p>
                    <p>{datas[idx].General_Location}</p>
                    <hr />
                    <p>
                      <strong>{datas[idx].Type_Description}</strong>{" "}
                    </p>
                    <p>
                      <em>{datas[idx].Event_Number}</em>
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      );
    } else {
      content = <span>Loading map...</span>;
    }

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="datamap">{content}</div>
          <p>
            <em>Click on marker to view more data</em>
          </p>
        </div>
      </div>
    );
  }
}
