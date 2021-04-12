import React, { Component } from "react";
import firebase from "../../firebase";

import Data from "./data.component";


const datas = [];
const markers = [];

export default class DataList extends Component {

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
      WARD: todos.WARD
    });

    markers.push([todos.LAT, todos.LONG]);

    this.setState({
      datas: datas,
      markers: markers
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
    const { datas, currentData, currentIndex } = this.state;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>Beat </th>
                  <th>Disposition</th>
                  <th>Event_Date</th>
                  <th>Event_Number</th>
                  <th>General_Location</th>
                  <th>LAT</th>
                  <th>LONG</th>
                  <th>Type </th>
                  <th>Type_Description</th>
                  <th>WARD </th>
                </tr>
              </thead>
              <tbody>
                {datas &&
                  datas.map((data, index) => (
                    <tr className={
                      "item " +
                      (index === currentIndex ? "active" : "")
                    }
                      onClick={() => this.setActiveData(data, index)}
                      key={index}>
                      <td>{data.Beat}</td>
                      <td>{data.Disposition}</td>
                      <td>{data.Event_Date}</td>
                      <td>{data.Event_Number}</td>
                      <td>{data.General_Location}</td>
                      <td>{data.LAT}</td>
                      <td>{data.LONG}</td>
                      <td>{data.Type}</td>
                      <td>{data.Type_Description}</td>
                      <td>{data.WARD}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6">
          {currentData ? (
            <Data
              data={currentData}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click on a Data...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
