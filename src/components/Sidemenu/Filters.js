import { Component } from "react";
import Select from "react-select";

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

class Filters extends Component {
  state = {
    selectedOption: options,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti
        closeMenuOnSelect={false}
      />
    );
  }
}

export default Filters;
