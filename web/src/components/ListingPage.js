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
  CardText
} from "reactstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import moment from "moment";
import Appointment from "./Appointment";

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
          address: "Bangalore"
        },
        {
          id: 2,
          name: "Ramesh",
          type: "seller",
          phone: "+919812343879",
          address: "Bangalore"
        },
        {
          id: 3,
          name: "Khalif",
          type: "seller",
          phone: "+919812343879",
          address: "Bangalore"
        }
      ],
      sellerData: {
        id: "",
        name: "",
        address: "",
        type: "",
        phone: ""
      },
      viewModal: false
    };
  }

  componentDidMount() {
    this._refreshBooks();
  }

  _refreshBooks() {
    axios.get("http://localhost:3000/users").then(response => {
      this.setState({
        sellers: response.data
      });
    });
  }

  toggleModal() {
    this.setState({
      viewModal: !this.state.viewModal
    });
  }

  viewSeller(id, name, type, address, phone) {
    this.setState({
      sellerData: { id, name, type, address, phone },
      viewModal: !this.state.viewModal
    });
  }

  render() {
    let sellers = this.state.sellers.map(seller => {
      return (
        <tr key={seller.id}>
          <td>{seller.id}</td>
          <td>{seller.name}</td>
          <td>{seller.address}</td>
          <td>{seller.type}</td>
          <td>{seller.phone}</td>
          <td>
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
            >
              View
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <div className="App container">
        <h1 style={{ padding: "10px" }}>List of Sellers</h1>

        <Modal
          isOpen={this.state.viewModal}
          toggle={this.toggleModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleModal.bind(this)}>
            Seller Information
          </ModalHeader>
          <ModalBody>
            <Card>
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
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal.bind(this)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{sellers}</tbody>
        </Table>
      </div>
    );
  }
}

export default ListingPage;
