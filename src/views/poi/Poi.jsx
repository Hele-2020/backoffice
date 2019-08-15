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
  Col
} from "react-bootstrap";
import ShowPoi from "./ShowPoi.jsx";
import { Link} from "react-router-dom";

class Poi extends Component {

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Link to={"/Admin/CreatePoi"} className="btn btn-primary">Create POI</Link>
            </Col>
          </Row>
        </Grid>
        <br />
        <ShowPoi />
      </div>
    );
  }
}

export default Poi;