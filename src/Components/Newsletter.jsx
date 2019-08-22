import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";
class Newsletter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2 className="h1-responsive font-weight-bold text-center my-5 custom-orange">
          Subscribe to Our Newletter to get all the exciting offer{" "}
          <span className="permanent text-info">'ASAP'</span>
        </h2>
        <MDBContainer fluid className="newsletter">
          <MDBRow>
            <MDBCol md="6" className="newsletter_component" />
            <MDBCol md="6" className="newsletter_component">
              <form>
                <h2 className="h1-responsive bangers font-weight-bold">
                  KNOW IT ALL FIRST!
                </h2>
                <p className="text-danger h3-responsive font-weight-bold w-responsive gochi">
                  Never Miss Anything From Sahulat.pk By Signing Up To Our
                  Newsletter.
                </p>
                <div className="red-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn outline color="purple">
                    Subscribe
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default Newsletter;
