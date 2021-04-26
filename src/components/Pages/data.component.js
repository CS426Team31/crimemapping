import React, { Component } from "react";
import DataDataService from "../../services/data.service";
import { Modal } from 'react-bootstrap';


export default class Data extends Component {
  constructor(props) {
    super(props);
    this.onChangeBeat = this.onChangeBeat.bind(this);
    this.onChangeEventNumber = this.onChangeEventNumber.bind(this);
    this.updateEventDate = this.updateEventDate.bind(this);
    this.updateData = this.updateData.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      currentData: {
        key: null,
        Beat: "",
        Disposition: "",
        Event_Date: "",
        Event_Number: "",
        General_Location: "",
        LAT: "",
        LONG: "",
        Type: "",
        Type_Description: "",
        WARD: 0
      },
      message: "",
      visible: true
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    if (prevState.currentData.key !== data.key) {
      return {
        currentData: data,
        message: "",
        visible: true
      };
    }

    return prevState.currentData;
  }

  componentDidMount() {
    this.setState({
      currentData: this.props.data,
      visible: true
    });
  }

  closeModal(){
    this.setState(function (prevState) {
      return {
        visible: false
      };
    });

  }

  onChangeBeat(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentData: {
          ...prevState.currentData,
          Beat: title,
        },
      };
    });
  }

  onChangeEventNumber(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentData: {
        ...prevState.currentData,
        Event_Number: description,
      },
    }));
  }

  updateEventDate(status) {
    DataDataService.update(this.state.currentData.key, {
      Event_Date: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentData: {
            ...prevState.currentData,
            Event_Date: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateData() {
    const data = {
      Beat: this.state.currentData.Beat,
      Event_Number: this.state.currentData.Event_Number,
    };

    DataDataService.update(this.state.currentData.key, data)
      .then(() => {
        this.setState({
          message: "The data was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }


  render() {
    const { currentData, visible } = this.state;


    return (

      <div>

        {currentData ? (
          // onChange={this.onChangeBeat}
          <Modal show={visible} backdrop="static" keyboard={true} onClick={() => this.closeModal()}>
            <Modal.Header closeButton>
              <Modal.Title>
                Crime Info
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{currentData.Type_Description}</p>
              <p><em>{currentData.Event_Number}</em></p>
            </Modal.Body>
            <Modal.Footer>
              <p><em>{currentData.Event_Date}</em></p><br/>
              <p><em>{currentData.General_Location}</em></p>
            </Modal.Footer>
          </Modal>

        ) : (
          <div>
            <br />
            <p>Please click on a Data...</p>
          </div>
        )}

      </div>


    );
  }
}
