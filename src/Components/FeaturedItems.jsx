import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { MDBMask, MDBView } from "mdbreact";
// import App from "../App";
class FeaturedItems extends Component {
  state = {};
  render() {
    return (
      <div className="box box1">
        <div className="evenboxinner">
          <Container>
            <p className="text-center IM mt-5">MADE THE HARD WAY</p>
            <h3 className="text-center frederick">FEATURED CATEGORIES</h3>
            <Switch>
              <Row className="container">
                <Col xs={12} md={6}>
                  <MDBView hover zoom>
                    <img
                      src="images/Featured/f1.jpg"
                      className="img-fluid img-thumbnail"
                      alt=""
                    />
                    <MDBMask className="flex-center">
                      <Link to="/bags">
                        <button type="button" className="btn btn-light">
                          Bags
                        </button>
                      </Link>
                    </MDBMask>
                  </MDBView>
                </Col>
                <Col xs={6} md={3}>
                  <Row>
                    <Col xs={12}>
                      <MDBView hover zoom>
                        <img
                          src="images/Featured/f4.jpg"
                          className="img-fluid img-thumbnail"
                          alt="Womens"
                        />
                        <MDBMask className="flex-center">
                          <Link to="/womens">
                            <button type="button" className="btn btn-light">
                              Womens
                            </button>
                          </Link>
                        </MDBMask>
                      </MDBView>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <MDBView hover zoom>
                        <img
                          src="images/Featured/f2.jpg"
                          className="img-fluid img-thumbnail"
                          alt="Shoes"
                        />
                        <MDBMask className="flex-center">
                          <Link to="/shoes">
                            <button type="button" className="btn btn-light">
                              Shoes
                            </button>
                          </Link>
                        </MDBMask>
                      </MDBView>
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} md={3}>
                  <MDBView hover zoom>
                    <img
                      src="images/Featured/f3.jpg"
                      className="img-fluid img-thumbnail"
                      alt="Watches"
                    />
                    <MDBMask className="flex-center">
                      <Link to="/watches">
                        <button type="button" className="btn btn-light">
                          Watches
                        </button>
                      </Link>
                    </MDBMask>
                  </MDBView>
                </Col>
              </Row>
            </Switch>
          </Container>
        </div>

        {/* <MDBContainer>
          <p className="featured-paragraph-text text-center IM mt-5">
            MADE THE HARD WAY
          </p>
          <h3 className="featured-heading-text text-center frederick">
            FEATURED CATEGORIES
          </h3>
          <Switch>
            <MDBRow>
              <MDBCol xs="6" sm="4" md="6">
                <MDBView hover zoom>
                  <img
                    src="images/Featured/f1.jpg"
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                  <MDBMask className="flex-center">
                    <Link to="/bags">
                      <button type="button" className="btn btn-light">
                        Bags
                      </button>
                    </Link>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <MDBCol xs="6" sm="4" md="3">
                <MDBView hover zoom>
                  <img
                    src="images/Featured/f2.jpg"
                    className="img-fluid img-thumbnail"
                    alt="Shoes"
                  />
                  <MDBMask className="flex-center">
                    <Link to="/shoes">
                      <button type="button" className="btn btn-light">
                        Shoes
                      </button>
                    </Link>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <MDBCol xs="6" sm="4" md="3">
              <MDBView hover zoom>
                  <img
                    src="images/Featured/f3.jpg"
                    className="img-fluid img-thumbnail"
                    alt="Watches"
                  />
                  <MDBMask className="flex-center">
                    <Link to="/watches">
                      <button type="button" className="btn btn-light">
                        Watches
                      </button>
                    </Link>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <MDBCol xs="6" sm="4" md="3">
                <MDBView hover zoom>
                  <img
                    src="images/Featured/f4.jpg"
                    className="item custom-women-image featured-images img-fluid img-thumbnail"
                    alt="Womens"
                  />
                  <MDBMask className="flex-center">
                    <Link to="/womens">
                      <button type="button" className="btn btn-light">
                        Womens
                      </button>
                    </Link>
                  </MDBMask>
                </MDBView>
              </MDBCol>
            </MDBRow>
          </Switch>
        </MDBContainer> */}
      </div>
    );
  }
}

export default FeaturedItems;
