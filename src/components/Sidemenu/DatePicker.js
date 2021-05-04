//import component from react and Airbnb datapicker API
import React, { Component } from "react";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";

//initiate a class component called DatePicker that has props(properties)of startDate and endDate
class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  //render and return the DateRangePicker
  render() {
    return (
      <div>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          //add options

          //change the orientation of datepicker to veritcal
          orientation="vertical"
          //adjust the heigh
          verticalHeight={450}
          block
          //allow user to pick past days
          isOutsideRange={() => false}
          daySize={60}
          showClearDates
          //allow user to pick just one day instead of a date range
          minimumNights={0}
          reopenPickerOnClearDates
        />
      </div>
    );
  }
}
//export as DatePicker to SubMenu.js
export default DatePicker;
