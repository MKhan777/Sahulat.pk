import React, { Component } from "react";
import AdminItem from "./AdminItem";
import { MDBBtn } from "mdbreact";
import { Row, Col, CardGroup } from "react-bootstrap";
import { Link, Switch } from "react-router-dom";
import "../App.css";
class AdminItems extends Component {
  render() {
    const { products } = this.props;
    const product = products.map(product => (
      <Col xs={12} sm={6} lg={4} key={product._id}>
        <AdminItem key={product._id} product={product} />
      </Col>
    ));
    return (
      <React.Fragment>
        <Switch>
          <MDBBtn color="info">
            <Link
              to={{
                pathname: `/admin/products/addProduct`
              }}
            >
              <i class="fas fa-plus" />
            </Link>
          </MDBBtn>
        </Switch>
        <h1 className="featured-heading-text text-center sigmar">
          Products Panel
        </h1>
        <main className="container-fluid">
          <Row>
            <CardGroup>{product}</CardGroup>
          </Row>
        </main>
      </React.Fragment>
    );
  }
}

export default AdminItems;
