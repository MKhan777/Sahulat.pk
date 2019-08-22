import React, { Component } from "react";
import Item from "./Item";
import { Row, Col, CardGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
class Items extends Component {
  render() {
    const { products, onReset, onIncrement, onDecrement } = this.props;
    const product = products.map(product => (
      <Col xs={12} sm={6} md={4} lg={3} key={product._id}>
        <Item
          key={product._id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          product={product}
        />
      </Col>
    ));
    return (
      <React.Fragment>
        <h1 className="featured-heading-text text-center sigmar">FLASH SALE</h1>
        <button
          onClick={onReset}
          className="btn btn-primary btn-lg btn-block luckiest"
          style={{
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            marginTop: "3vh",
            marginBottom: "3vh"
          }}
        >
          RESET THE CART
          <FontAwesomeIcon className="header-icons" icon="redo-alt" />
        </button>
        <main className="container-fluid">
          <Row>
            <CardGroup>{product}</CardGroup>
          </Row>
        </main>
      </React.Fragment>
    );
  }
}

export default Items;
