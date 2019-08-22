import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import "./../App.css";

class Header extends Component {
  render() {
    if (this.props.history.location.pathname.match(/admin/gi)) {
      return null;
    } else {
      return (
        <Container fluid="true">
          <Row className="header white-text">
            <Col xs={3} lg={4} xl={7}>
              <p className="header-text righteous">Welcome to Sahulat.pk</p>
            </Col>
            <Col xs={2} lg={2} xl={1}>
              <FontAwesomeIcon
                className="header-icons"
                icon="heart"
                color="#ff4c3b"
                size="md"
              />
              <p className="header-text righteous">WishList</p>
            </Col>
            <Col xs={2} lg={2} xl={1}>
              <FontAwesomeIcon
                className="header-icons"
                icon="sync-alt"
                color="#ff4c3b"
                size="md"
              />
              <p className="header-text righteous">Compare</p>
            </Col>
            <Col xs={2} lg={2} xl={1}>
              <FontAwesomeIcon
                className="header-icons"
                icon="users"
                color="#ff4c3b"
                size="md"
              />
              <p className="header-text righteous">Users</p>
            </Col>
            <Col xs={3} lg={2} xl={2}>
              <FontAwesomeIcon
                className="header-icons"
                icon="phone"
                color="#ff4c3b"
                size="md"
              />
              <p className="header-text righteous">Call Us: 123 - 456 - 7890</p>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default Header;
