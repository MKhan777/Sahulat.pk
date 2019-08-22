import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn} from "mdbreact";
class AdminView extends Component {
  state = {};
  handleDelete = e => {
    const refreshProducts=this.props.refreshProducts;
    console.log("id", this.props.match.params.id);
    
    axios({
      method:"delete",
      url:  "http://localhost:5000/api/sampleApi/deleteProducts",
      data:{id: this.props.match.params.id}
      })
      .then(response => {
        console.log("deleted");
        refreshProducts();
        setTimeout(() => {
          this.props.history.push("/admin/products");
        }, 500);
      })
      .catch(err => {
        console.log("Err", err);
      });
  };


  // handleUpdate = e => {
  //   console.log("id", this.props.match.params.id);
  //   axios({
  //     method:"update",
  //     url:  "http://localhost:5000/api/sampleApi/updateProducts/",
  //     data:{id: this.props.match.params.id}
  //     })
  //     .then(response => {
  //       console.log("updated");
  //       setTimeout(() => {
  //         this.props.history.push("/admin/products");
  //       }, 500);
  //     })
  //     .catch(err => {
  //       console.log("Err", err);
  //     });
  // };
  render() {
    const { products} = this.props;
    const id = this.props.match.params.id;
    var identification = new RegExp(id, "g");
    const product = products.filter(p => identification.test(p._id) === true);
    let source = "images/" + product[0].imageUrl;
    return (
      <React.Fragment>
        <Switch>
          <MDBContainer fluid>
            <MDBRow className="mt-5">
              <MDBCol
                className="h4-responsive font-weight-bold custom-orange"
              >
                {product[0].title}
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
              <MDBCol md="6">
                <img
                  src={`/${source}`}
                  alt="google"
                  className="display-img img-fluid img-thumbnail"
                />
              </MDBCol>
              <MDBCol md="6" className="h6-responsive font-weight-bold">
                <div>{product[0].title}</div>
                <div className="mt-3 custom">{product[0].price}</div>
                <div className="detail_partition" />
                <p className="mt-3 text-primary">
                  InStock <br />
                  <span className="text-dark">Quantity</span>
                </p>
                <div className="mt-3">
                  <MDBBtn className="hvr-wobble-skew hvr-shutter-out-horizontal deep-orange darken-1 mx-auto">
                    <Link
                      to="/checkout"
                      style={{ color: "#fff" }}
                    >
                      Update
                    </Link>
                  </MDBBtn>
                  <MDBBtn onClick={this.handleDelete} className="hvr-wobble-skew hvr-shutter-out-horizontal deep-orange darken-1">
                    Delete
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
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Switch>
      </React.Fragment>
    );
  }
}

export default AdminView;
