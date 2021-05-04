//import component and dropdown menu from react-select
import { Component } from "react";
import Select from "react-select";

//a list of types of crime for users to choose from the filter
const options = [
  { label: "Arson", value: "arson" },
  { label: "Assault", value: "assault" },
  { label: "Burglary", value: "burglary" },
  { label: "Drug Violation", value: "drug_violation" },
  { label: "DUI", value: "dui" },
  { label: "Homicide", value: "homicide" },
  { label: "Robbery", value: "robbery" },
  { label: "Sex Crimes", value: "sex_crimes" },
  { label: "Shoplifting", value: "shoplifting" },
  { label: "Theft", value: "theft" },
  { label: "Traffic Incident", value: "traffic_incident" },
  { label: "Vandalism", value: "vandalism" },
  { label: "Weapons", value: "weapons" },
];

//initiate a class component called Filters that has props(properties)of selectedOption and a state to store the selected options
class Filters extends Component {
  state = {
    //all options are preselected
    selectedOption: options,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });

    //printing out the options selected
    console.log(`Option selected:`, selectedOption);
  };

  //render and return the DateRangePicker
  render() {
    //update the state according to the selectedOption
    const { selectedOption } = this.state;

    //return a dropdown menu
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        //allow users to pick multiple types of crime from the menu
        isMulti
        closeMenuOnSelect={false}
      />
    );
  }
}
//export as Filters to SubMenu.js
export default Filters;
