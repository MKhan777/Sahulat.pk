import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
class Services extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container fluid className="verticalbox">
          <Row className="service-partition">
            <Col xs={4}>
              <img
                src="/images/Services/t3.png"
                alt="shipping"
                className="img-fluid service-icon"
              />
            </Col>
            <Col xs={8} className="h3-responsive font-weight-bold">
              <h3 className="h6-responsive font-weight-bold">Free Shipping</h3>
              <p>Free Shipping World Wide</p>
            </Col>
          </Row>
          <Row className="service-partition">
            <Col xs={4}>
              <img
                src="/images/Services/s1.png"
                alt="shipping"
                className="img-fluid service-icon"
              />
            </Col>
            <Col xs={8} className="h3-responsive font-weight-bold">
              <h3 className="h6-responsive font-weight-bold">24 X 7 Service</h3>
              <p>Online Service For New Customer</p>
            </Col>
          </Row>
          <Row className="service-partition">
            <Col xs={4}>
              <img
                src="/images/Services/o2.png"
                alt="shipping"
                className="img-fluid service-icon"
              />
            </Col>
            <Col xs={8} className="h3-responsive font-weight-bold">
              <h3 className="h6-responsive font-weight-bold">Festival Offer</h3>
              <p>New Online Special Festival Offer</p>
            </Col>
          </Row>
          <Row className="service-partition">
            <Col xs={4}>
              <img
                src="/images/Services/c1.png"
                alt="shipping"
                className="img-fluid service-icon"
              />
            </Col>
            <Col xs={8} className="h3-responsive font-weight-bold">
              <h3 className="h6-responsive font-weight-bold">Online Payment</h3>
              <p>Contrary To Popular Belief.</p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Services;
