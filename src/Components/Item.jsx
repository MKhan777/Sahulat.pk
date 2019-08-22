import React, { Component } from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCardFooter,
  MDBTooltip,
  MDBCardTitle,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText
} from "mdbreact";
import { Link, Switch } from "react-router-dom";
import "../App.css";
class Item extends Component {
  render() {
    const { product, onIncrement, onDecrement } = this.props;
    let source = "images/" + product.imageUrl;
    return (
      <Switch>
        <section className="text-center my-5 h-40">
          <MDBCard narrow ecommerce className="h-100 mb-2">
            <MDBCardImage
              cascade
              top
              src={`/${source}`}
              alt="sample photo"
              className="card-img"
            />
            <MDBCardBody cascade>
              <strong>
                <a href="#!" className="text-success">
                  <h5>{product.sub_category}</h5>
                </a>
              </strong>
              <MDBCardTitle>
                <strong>
                  {product.title.length < 20
                    ? `${product.title}`
                    : `${product.title.substring(0, 50)}...`}
                </strong>
              </MDBCardTitle>
              {/* <ul className="rating">
              <li>
                <MDBIcon icon="star" />
              </li>
              <li>
                <MDBIcon icon="star" />
              </li>
              <li>
                <MDBIcon icon="star" />
              </li>
              <li>
                <MDBIcon icon="star" />
              </li>
              <li>
                <MDBIcon far icon="star" />
              </li>
            </ul> */}
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci.
              </MDBCardText>
              <MDBBtnGroup size="sm" className="mx-auto">
                {product.value > 0 ? (
                  <MDBBtn color="danger" onClick={() => onDecrement(product)}>
                    -
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    color="danger"
                    disabled
                    onClick={() => onDecrement(product)}
                  >
                    -
                  </MDBBtn>
                )}
                <MDBBtn color={this.getButtonClasses()}>
                  <Link
                    to={{
                      pathname: `/product/${product._id}`
                      // product:{product}
                    }}
                    style={{ color: "#fff" }}
                  >
                    Add To Cart{" "}
                    <span className="cards-text badge">
                      {this.formatCount()}
                    </span>
                  </Link>
                </MDBBtn>
                <MDBBtn color="success" onClick={() => onIncrement(product)}>
                  +
                </MDBBtn>
              </MDBBtnGroup>
              <MDBCardFooter className="px-1">
                <span className="float-left font-weight-bold">
                  {product.price}
                </span>
                <span className="float-right">
                  <MDBTooltip placement="top" tag="a" domElement>
                    <span color="transparent">
                      <i className="fa fa-eye orange-text ml-3"> </i>
                    </span>
                    <div>Quick look</div>
                  </MDBTooltip>
                  <MDBTooltip placement="top" tag="a" domElement>
                    <span color="transparent">
                      <i className="fa fa-heart red-text ml-3"> </i>
                    </span>
                    <div>Add to watchlist</div>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </section>
      </Switch>
    );
  }
  getButtonClasses() {
    let classes = "";
    classes += this.props.product.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.product;
    return count === 0 ? "Zero" : count;
  }
}

export default Item;
