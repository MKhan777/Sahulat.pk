import React, { Component } from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
class Breadcrum extends Component {
  state = {};
  render() {
    const { category, sub_category } = this.props;
    return (
      <MDBBreadcrumb bold uppercase className="text-success font-weight-bold">
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>{category}</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>{sub_category}</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Item</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    );
  }
}

export default Breadcrum;