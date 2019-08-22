import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBBtnGroup } from "mdbreact";
import Services from "./Services";
import Breadcrum from "./Breadcrum";
import TabsPage from "./TabsPage";
class Bags extends Component {
  state = {};
  render() {
    const { products, onIncrement, onDecrement } = this.props;
    const id = this.props.match.params.id;
    var identification = new RegExp(id, "g");
    // const p=this.props.location.product;
    const product = products.filter(p => identification.test(p._id) === true);
    // const obj = product.reduce((accumulator, currentValue) => {
    //   accumulator[currentValue] = currentValue;
    //   return accumulator;
    // }, {});
    let source = "images/" + product[0].imageUrl;
    return (
      <React.Fragment>
        <Switch>
          <MDBContainer fluid>
            <MDBRow className="mt-5">
              <MDBCol
                sm="6"
                md="8"
                className="h4-responsive font-weight-bold custom-orange"
              >
                {product[0].title}
              </MDBCol>
              <MDBCol sm="6" md="4">
                <Breadcrum
                  category={product[0].category}
                  sub_category={product[0].sub_category}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
              <MDBCol md="4">
                <Services />
              </MDBCol>
              <MDBCol md="4">
                <img
                  src={`/${source}`}
                  alt="google"
                  className="display-img img-fluid img-thumbnail"
                />
              </MDBCol>
              <MDBCol md="4" className="h6-responsive font-weight-bold">
                <div>{product[0].title}</div>
                <div className="mt-3 custom">{product[0].price}</div>
                <div className="detail_partition" />
                <p className="mt-3 text-primary">
                  InStock <br />
                  <span className="text-dark">Quantity</span>
                </p>
                <div>
                  <MDBBtnGroup size="sm" className="mx-auto">
                    {product[0].value > 0 ? (
                      <MDBBtn
                        color="danger"
                        onClick={() => onDecrement(product[0])}
                      >
                        &lt;
                      </MDBBtn>
                    ) : (
                      <MDBBtn color="danger" disabled>
                        &lt;
                      </MDBBtn>
                    )}
                    <MDBBtn className="hvr-pulse">
                      Add To Cart{" "}
                      <span className="cards-text badge">
                        {product[0].value}
                      </span>
                    </MDBBtn>
                    <MDBBtn
                      color="success"
                      onClick={() => onIncrement(product[0])}
                    >
                      &gt;
                    </MDBBtn>
                  </MDBBtnGroup>
                </div>
                <div className="mt-3">
                  <MDBBtn className="hvr-wobble-skew hvr-shutter-out-horizontal deep-orange darken-1 mx-auto">
                    <Link
                      to="/checkout"
                      style={{ color: "#fff" }}
                    >
                      Checkout
                    </Link>
                  </MDBBtn>
                  <MDBBtn className="hvr-wobble-skew hvr-shutter-out-horizontal deep-orange darken-1">
                    Buy Now
                  </MDBBtn>
                </div>
                <div className="detail_partition" />
                <p className="mt-3 text-primary">Product Details</p>
                <p>
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem,
                </p>
                <div className="detail_partition" />
                <p className="mt-3 text-primary">Share It</p>
                <span className="fb-ic ml-0">
                  <i className="fab fa-facebook-f mr-lg-3"> </i>
                </span>
                <span className="tw-ic">
                  <i className="fab fa-twitter mr-lg-3"> </i>
                </span>
                <span className="gplus-ic">
                  <i className="fab fa-google-plus-g mr-lg-3"> </i>
                </span>
                <span className="li-ic">
                  <i className="fab fa-linkedin-in mr-lg-3"> </i>
                </span>
                <span className="ins-ic">
                  <i className="fab fa-instagram mr-lg-3"> </i>
                </span>
                <span className="indigo-text">
                  Add To Wishlist
                  <i className="fas fa-heart pl-2 pr-2 mr-lg-3" />
                </span>
                <div className="detail_partition" />
                <p className="mt-3 text-primary">Time Reminder</p>
                <div className="text-danger">
                  <span className="pr-1 mr-3 grey lighten-4">25: Days</span>
                  <span className="pr-1 mr-3 grey lighten-4">22 : Hrs</span>
                  <span className="pr-1 mr-3 grey lighten-4">13 : Min</span>
                  <span className="mr-3 grey lighten-4">57 : sec</span>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
              <MDBCol>
                <TabsPage product={product[0]} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Switch>
      </React.Fragment>
    );
  }
}

export default Bags;
