import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import axios from "axios";
class AddProduct extends Component {
  state = {
    title: "",
    value: "",
    amount: "",
    price: "",
    category: "",
    sub_category: "",
    imageUrl: "",
    body: ""
  };
  submitHandler = event => {
    const {refreshProducts}=this.props;
    event.preventDefault();
    event.target.className += " was-validated";
    axios
      .post("http://localhost:5000/api/sampleApi/addProducts", this.state)
      .then(response => {
        console.log(response);
        // this.forceUpdate();
        refreshProducts();
        setTimeout(() => {
          this.props.history.push("/admin/products");
        }, 500);
      })
      .catch(err => {
        console.log(err);
      });
    // axios({
    //   method: "post",
    //   url: "http://localhost:5000/api/sampleApi/addProducts",
    //   data: this.state
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="mt-5 pt-4">
        <MDBContainer>
          <h2 className="my-5 h2 text-center">Add Product form</h2>
          <MDBRow>
            <MDBCol className="mb-4">
              <div className="card">
                <form
                  className="needs-validation card-body"
                  onSubmit={this.submitHandler}
                  noValidate
                >
                  <MDBRow>
                    <MDBCol md="12" className="mb-2">
                      <div className="md-form">
                        <MDBInput
                          value={this.state.title}
                          name="title"
                          onChange={this.changeHandler}
                          type="text"
                          id="title"
                          label="Enter Title"
                          required
                          outline
                        >
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a Title.
                          </div>
                        </MDBInput>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="mb-2">
                      <div className="md-form">
                        <MDBInput
                          value={this.state.value}
                          name="value"
                          onChange={this.changeHandler}
                          type="number"
                          id="value"
                          label="Enter Value"
                          required
                          outline
                        >
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a Value.
                          </div>
                        </MDBInput>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="mb-2">
                      <div className="md-form">
                        <MDBInput
                          value={this.state.amount}
                          name="amount"
                          onChange={this.changeHandler}
                          type="number"
                          id="amount"
                          label="Enter Amount"
                          required
                          outline
                        >
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a Amount.
                          </div>
                        </MDBInput>
                      </div>
                    </MDBCol>
                    <MDBCol md="4" className="mb-2">
                      <div className="md-form">
                        <MDBInput
                          value={this.state.price}
                          name="price"
                          onChange={this.changeHandler}
                          type="text"
                          id="price"
                          label="Enter Price"
                          required
                          outline
                        >
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a Price.
                          </div>
                        </MDBInput>
                      </div>
                    </MDBCol>
                    <MDBCol md="4" className="mb-2">
                      <div className="md-form">
                        <MDBInput
                          value={this.state.category}
                          name="category"
                          onChange={this.changeHandler}
                          type="text"
                          id="category"
                          label="Enter category"
                          required
                          outline
                        >
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a category.
                          </div>
                        </MDBInput>
                      </div>
                    </MDBCol>
                    <MDBCol md="4" className="mb-2">
                      <div className="md-form">
                        <MDBInput
                          value={this.state.sub_category}
                          name="sub_category"
                          onChange={this.changeHandler}
                          type="text"
                          id="sub_category"
                          label="Enter sub_category"
                          required
                          outline
                        >
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a Title.
                          </div>
                        </MDBInput>
                      </div>
                    </MDBCol>
                    <MDBCol md="12" className="mb-2">
                      <div className="md-form">
                        <MDBInput
                          value={this.state.imageUrl}
                          name="imageUrl"
                          onChange={this.changeHandler}
                          type="text"
                          id="imageUrl"
                          label="Enter imageUrl"
                          required
                          outline
                        >
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a Title.
                          </div>
                        </MDBInput>
                      </div>
                    </MDBCol>
                    <MDBCol md="12" className="mb-2">
                      <div className="md-form">
                        <MDBInput
                          value={this.state.body}
                          name="body"
                          onChange={this.changeHandler}
                          type="textarea"
                          id="body"
                          label="Enter Description"
                          required
                          outline
                        >
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a Description.
                          </div>
                        </MDBInput>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Add Product
                  </button>
                </form>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default AddProduct;
