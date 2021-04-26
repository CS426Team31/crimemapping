import React, { Component } from "react";
import firebase from "../../firebase";
// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

let chartData = [];
let dateData = [];
let datas = [];

const chartConfigs = {
  type: "column2d", // The chart type
  dataFormat: "json", // Data type
  width: "1100", // Width of the chart
  height: "700",
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Crime Types and Occurrences",
      //Set the x-axis name
      xAxisName: "Crime Type",
      //Set the y-axis name
      yAxisName: "Number of Occurences",
      //Set the theme for your chart
      theme: "fusion",
    },
    // Chart Data
    data: chartData,
  },
};

const dateConfigs = {
  type: "column2d", // The chart type
  dataFormat: "json", // Data type
  width: "1100", // Width of the chart
  height: "700",
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Rate of Crime",
      //Set the x-axis name
      xAxisName: "Date",
      //Set the y-axis name
      yAxisName: "Number of Crimes",
      //Set the theme for your chart
      theme: "fusion",
    },
    // Chart Data
    data: dateData,
  },
};

export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveData = this.setActiveData.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      datas: [],
      chartData: [],
      dateData: [],
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
      Type: todos.Type,
      Type_Description: todos.Type_Description,
      WARD: todos.WARD,
    });

    if (chartData.length < 1) {
      chartData.push({ label: todos.Type_Description, value: 1 });
    } else if (
      chartData.filter((data) => data.label === todos.Type_Description).length >
      0
    ) {
      chartData.filter((data) => {
        if (data.label === todos.Type_Description) {
          data.value = data.value + 1;
        }
        return data;
      });
    } else {
      chartData.push({ label: todos.Type_Description, value: 1 });
    }

    var actualDate = todos.Event_Date.split(":")[0];

    if (dateData.length < 1) {
      dateData.push({ label: actualDate, value: 1 });
    } else if (
      dateData.filter((data) => data.label === actualDate).length > 0
    ) {
      dateData.filter((data) => {
        if (data.label === actualDate) {
          data.value = data.value + 1;
        }

        return data;
      });
    } else {
      dateData.push({ label: actualDate, value: 1 });
    }

    this.setState({
      datas: datas,
      chartData: chartData,
      dateData: dateData,
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
    const { datas } = this.state;

    let content;
    if (datas.length > 99) {
      content = (
        <div className="container text-denter">
          <ReactFC {...chartConfigs} />
          <hr />
          <ReactFC {...dateConfigs} />
        </div>
      );
    } else {
      content = <span>Loading map...</span>;
    }

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="datamap">{content}</div>
        </div>
      </div>
    );
  }
}
