/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

class EditPoi extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      poiss: {},
      isModify: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange = event => {
    let poiss = this.state.poiss;
    poiss[event.target.id] = event.target.value;
    this.setState({
      poiss: poiss
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post(`http://127.0.0.1:3333/poi/update/${this.state.id}`, this.state.poiss)
    .then(res => {
      // console.log(res.data);  
      this.setState({ isCreate: true }); 
      alert("successfully update !");              
    })
    .catch(error => {
      // console.log(error)
    });
  }

  validateForm() {
    return (this.state.name.length > 0 && this.state.adress.length > 0 
      && this.state.postal.length > 0 && this.state.phone.length > 0 
      && this.state.latitude.length > 0 && this.state.longitude.length > 0);
  }

  componentDidMount(){
  // console.log("here", this.state.id);
    axios.get(`http://127.0.0.1:3333/poi/edit/${this.state.id}`)
    .then(response => {
      console.log(response.data);
      this.setState({ 
        poiss: response.data
    });
    console.log(this.state.poiss)
    // console.log("data", response.data);
    // console.log("name", response.data.name);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
  render() {
  // console.log(this.state.poiss)
  if (this.state.isModify) {
    return <Redirect to={{ pathname: "/admin/Poi" }} />;
  } else {
    return (
      <div className="content">
        <Grid fluid>
        <Row>
            <Col md={8}>
            <Link to={"/Admin/Poi"} className="btn btn-primary">Back</Link>
            <br />
            </Col>
        </Row>
        <Row>
            <Col md={8}>
              <Card
                title="Edit POI"
                category="Please fill in the required fields *"
                content={
                  <form onSubmit={this.handleSubmit}>
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {  
                            label: "Name *",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Name",
                            value:this.state.poiss.name,
                            onChange:this.handleChange,
                            id:"name"
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Phone *",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Phone",
                            onChange:this.handleChange,
                            id:"phone",
                            value:this.state.poiss.phone,
                          },
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                          properties={[
                            {
                              label: "Site",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Site",
                              controlId:"site",
                              onChange:this.handleChange,
                              id:"site",
                              value:this.state.poiss.site,  
                            }
                          ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {  
                            label: "Horaire",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Horaire",
                            onChange:this.handleChange,
                            id:"hour",
                            value:this.state.poiss.hour,  
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Adress *",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Adress",
                            onChange:this.handleChange,
                            id:"adress",
                            value:this.state.poiss.adress,    
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Postal Code *",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "ZIP Code",
                            onChange:this.handleChange,
                            id:"postal",
                            value:this.state.poiss.postal,     
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Latitude *",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Latitude",
                            onChange:this.handleChange,
                            id:"latitude",
                            value:this.state.poiss.latitude,  
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Longitude *",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Longitude",
                            onChange:this.handleChange,
                            id:"longitude",
                            value:this.state.poiss.longitude,  
                          }
                        ]}
                      />
                      <Row>
                        <Col md={12}>
                          <FormGroup controlId="description">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl
                              rows="5"
                              componentClass="textarea"
                              bsClass="form-control"
                              placeholder="Here can be your description"
                              onChange={this.handleChange}
                              value={this.state.poiss.description}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button bsStyle="info" disabled={!this.validateForm()} pullRight fill type="submit">
                        Update POI
                      </Button>
                      <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>   
      </div>
    );
    }
  }
}

export default EditPoi;