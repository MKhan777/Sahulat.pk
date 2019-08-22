import React, { Component } from "react";
import {
  MDBBtn,
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
class AdminItem extends Component {
  render() {
    const { product } = this.props;
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
              <MDBCardText>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci.
              </MDBCardText>
              <MDBBtn color="info">
                  <Link
                    to={{
                      pathname: `/admin/product/${product._id}`
                    }}
                    style={{ color: "#fff" }}
                  >
                    View
                  </Link>
                </MDBBtn>
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
}

export default AdminItem;
