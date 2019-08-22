import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Tag from "./Tag";

class Tags extends Component {
  render() {
    const { brands } = this.props;
    const brand = brands.map(brand => (
      <MDBCol sm="2" key={brand._id}>
        <Tag key={brand._id} brand={brand} />
      </MDBCol>
    ));
    return (
      <React.Fragment>
        <h2 className="h1-responsive font-weight-bold text-center my-5 custom-orange">
          Our bestsellers
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>{brand}</MDBRow>
      </React.Fragment>
    );
  }
}

export default Tags;
