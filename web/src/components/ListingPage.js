import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import Calendar from "react-calendar";
import "react-day-picker/lib/style.css";
import { CardImg } from "reactstrap";
import man from "../assets/man.png";
import axios from "axios";
import DatePicker from "react-datepicker";
import moment from "moment";
import Appointment from "./Appointment";
import "./ListingPage.css";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

class ListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sellers: [
        {
          id: 1,
          name: "Wasif",
          type: "seller",
          phone: "+919812343879",
          address: "Bangalore",
        },
        {
          id: 2,
          name: "Ramesh",
          type: "seller",
          phone: "+919812343879",
          address: "Bangalore",
        },
        {
          id: 3,
          name: "Khalif",
          type: "seller",
          phone: "+919812343879",
          address: "Bangalore",
        },
      ],
      sellerData: {
        id: "",
        name: "",
        address: "",
        type: "",
        phone: "",
      },
      viewModal: false,
    };
  }

  componentDidMount() {
    this._refreshBooks();
  }

  _refreshBooks() {
    axios.get("http://localhost:3000/users").then((response) => {
      this.setState({
        sellers: response.data,
      });
    });
  }

  toggleModal() {
    this.setState({
      viewModal: !this.state.viewModal,
    });
  }

  viewSeller(id, name, type, address, phone) {
    this.setState({
      sellerData: { id, name, type, address, phone },
      viewModal: !this.state.viewModal,
    });
  }

  render() {
    let sellers = this.state.sellers.map((seller) => {
      return (
        // <tr key={seller.id}>
        //   <td>{seller.id}</td>
        //   <td>{seller.name}</td>
        //   <td>{seller.address}</td>
        //   <td>{seller.type}</td>
        //   <td>{seller.phone}</td>
        //   <td>
        //     <Button
        //       color="success"
        //       size="sm"
        //       className="mr-2"
        //       onClick={this.viewSeller.bind(
        //         this,
        //         seller.id,
        //         seller.name,
        //         seller.type,
        //         seller.address,
        //         seller.phone
        //       )}
        //     >
        //       View
        //     </Button>
        //   </td>
        // </tr>

        <div className="col-sm-4">
          <div className="row box">
            <div className="col-sm-4 card-content">
              <img src={man} alt="man" className="pics" />
            </div>
            <div className="col-sm-8 card-content card-text">
              <h2>{seller.name}</h2>
              <p>Type : {seller.type}</p>
              <p>Location: {seller.address}</p>
              <p>Phone: {seller.phone}</p>
              <Button
                color="success"
                size="sm"
                className="mr-2"
                onClick={this.viewSeller.bind(
                  this,
                  seller.id,
                  seller.name,
                  seller.type,
                  seller.address,
                  seller.phone
                )}
                style={{ textAlign: "right" }}
              >
                View
              </Button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="App container">
        <h1 style={{ padding: "10px" }}>Find Your Service</h1>
        <br></br>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Search by Location: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Location"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Search by Type: </label>
              <input type="text" className="form-control" placeholder="Type" />
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.viewModal}
          toggle={this.toggleModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleModal.bind(this)}>
            Book An Appointment
          </ModalHeader>
          <ModalBody>
            <div>
              <div className="row">
                <div className="col-sm-12 center">
                  <h4 className="modal-body-header">
                    {this.state.sellerData.name}
                  </h4>
                  <p className="modal-body-content">
                    {this.state.sellerData.type}
                  </p>
                </div>
              </div>
              <Appointment />
            </div>
            {/* <Card>
              <CardBody>
                <CardTitle>Seller Information</CardTitle>
                <CardSubtitle>Name : {this.state.sellerData.name}</CardSubtitle>
                <CardText>
                  Type: {this.state.sellerData.type} <br></br>
                  Address: {this.state.sellerData.address}
                  <br></br>
                  Phone: {this.state.sellerData.phone}
                  <br></br>
                  <br></br>
                  Select Appointment Date and Time from below: <br></br>
                  <Appointment></Appointment>
                </CardText>
              </CardBody>
            </Card> */}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal.bind(this)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <div className="row">{sellers}</div>

        {/* <Card>
            <div className="pics">
            <CardImg left width="20%" src={man} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
            </div>
          </Card> */}
      </div>
    );
  }
}

export default ListingPage;
