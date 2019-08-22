import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol
} from "mdbreact";
class TabsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "description"
    };
  }
  render() {
    const { product } = this.props;
    return (
      <Tabs
        id="controlled-tab-example"
        className="h5-responsive font-weight-bold"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="description" title="DESCRIPTION">
          <MDBContainer>
            <MDBListGroup>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
              <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
              <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
              <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
              <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            </MDBListGroup>
          </MDBContainer>
        </Tab>
        <Tab eventKey="details" title="DETAILS">
          <p className="h5-responsive font-weight-bold">
            {product.body !== "" ? (
              product.body
            ) : (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia ididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi deserunt mollit anim id est laborum. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteurididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            )}
          </p>
        </Tab>
        <Tab eventKey="video" title="VIDEO">
          <iframe
            title="lhdsau"
            class="iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dbok-clxaU4?start=10"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Tab>
        <Tab eventKey="write-review" title="WRITE REVIEW">
          <form>
            <MDBRow className="custom-orange">
              <MDBCol sm="6">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
              </MDBCol>
              <MDBCol sm="6">
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
              </MDBCol>
              <MDBCol sm="12">
                <MDBInput
                  label="Enter Your Review Subjects"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
              </MDBCol>
              <MDBCol sm="12">
                <MDBInput
                  label="Write Your Testimonial Here"
                  icon="pencil-alt"
                  group
                  type="textarea"
                  validate
                  error="wrong"
                  success="right"
                />
              </MDBCol>
            </MDBRow>
            <div className="text-center">
              <MDBBtn outline color="purple">
                Sumbit Your Review
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </Tab>
      </Tabs>
    );
  }
}

export default TabsPage;
