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
import { Link} from "react-router-dom";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';
import { Redirect } from 'react-router'

class CreatePoi extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "", 
      adress:"",
      postal:"",
      hour:"",
      phone:"",
      site:"",
      latitude:"",
      longitude:"",
      region_id:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return (this.state.name.length > 0 && this.state.adress.length > 0 
      && this.state.postal.length > 0 && this.state.phone.length > 0 
      && this.state.latitude.length > 0 && this.state.longitude.length > 0);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const poi = {
      name: this.state.name,
      adress: this.state.adress,
      postal: this.state.postal,
      phone: this.state.phone,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      description: this.state.description,
      site: this.state.site,
      hour: this.state.hour,
      region_id: this.state.region_id,
      isCreate: false
    };
    // console.log(poi);

    axios.post(`http://127.0.0.1:3333/poi/create`, poi)
    .then(res => {
      // console.log(res.data); 
      this.setState({ isCreate: true }); 
      alert("successfully created !");  
    })
    .catch(error => {
    // console.log(error)
    this.setState({ result: "Please fill in the required fields * !" });
      alert(this.state.result);
    });
  }

  render() {
    if (this.state.isCreate) {
      return (
      <div>
        <Redirect to={{ pathname: "/admin/Poi" }} />
      </div>
      )
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
                title="Create POI"
                category="Please fill in the required fields *"
                content={
                  <form onSubmit={this.handleSubmit}>
                    {/* select pour la region en cours
                    <label>
                      Region :
                      <select value={this.state.region_id} onChange={this.handleChange}>
                        <option value="grapefruit">Pamplemousse</option>
                        <option value="lime">Citron vert</option>
                        <option value="coconut">Noix de coco</option>
                        <option value="mango">Mangue</option>
                      </select>
                    </label> */}
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {  
                          label: "region_id *",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "region_id",
                          onChange:this.handleChange,
                          id:"region_id"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {  
                          label: "Name *",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Name",
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
                          id:"phone"
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
                          id:"site"  
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
                          id:"hour"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Address *",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Adress",
                          onChange:this.handleChange,
                          id:"adress"  
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
                          id:"postal"  
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
                          id:"latitude"  
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
                          id:"longitude" 
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
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" disabled={!this.validateForm()} pullRight fill type="submit">
                        Create POI
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

export default CreatePoi;