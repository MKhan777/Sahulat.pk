import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";
class Checkout extends Component {
  state = {
    fname: "",
    lname: "",
    uname: "",
    email: "",
    address: "",
    country: "",
    state: "",
    zip: "",
    saveinfo: "",
    sameaddress: "",
    pmethods: "",
    namecard: "",
    numbercard: "",
    expire: "",
    securitycode: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { cartItems, totalItems } = this.props;
    var totalPrice = 0;
    const cartItem = cartItems.map(product => (
      <MDBListGroupItem
        className="d-flex justify-content-between lh-condensed"
        key={product._id}
      >
        <div>
          <h6 className="my-0">{product.category}</h6>
          <small className="text-muted">
            {product.title.length < 20
              ? `${product.title}`
              : `${product.title.substring(0, 30)}...`}
          </small>
        </div>
        <span className="text-muted">{product.price}</span>
      </MDBListGroupItem>
    ));
    for (var i = 0; i < totalItems; i++) {
      totalPrice += cartItems[i].amount * cartItems[i].value;
    }
    const emptyCart = (
      <MDBListGroupItem className="d-flex justify-content-between lh-condensed">
        <div>
          <h2 className="my-0 luckiest">
            Your Cart Is Empty
            <img
              src="images/error/emoji.png"
              alt="Crying Emoji"
              width="50vw"
              height="50vh"
            />
          </h2>
        </div>
      </MDBListGroupItem>
    );
    return (
      <div className="mt-5 pt-4">
        <MDBContainer>
          <h2 className="my-5 h2 text-center">Checkout form</h2>
          <MDBRow>
            <MDBCol md="8" className="mb-4">
              <div className="card">
                <form
                  className="needs-validation card-body"
                  onSubmit={this.submitHandler}
                  noValidate
                >
                  <MDBRow>
                    <MDBCol md="6" className="mb-2">
                      <div className="md-form ">
                        <MDBInput
                          value={this.state.fname}
                          name="fname"
                          onChange={this.changeHandler}
                          type="text"
                          id="FNameEx"
                          label="First name"
                          required
                          outline
                        >
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a First Name.
                          </div>
                        </MDBInput>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="mb-2">
                      <div className="md-form ">
                        <MDBInput
                          value={this.state.lname}
                          name="lname"
                          onChange={this.changeHandler}
                          type="text"
                          id="LNameEx"
                          label="Last name"
                          required
                          outline
                        >
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a Last Name.
                          </div>
                        </MDBInput>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12" className="mb-2">
                      <div className="md-form ">
                        <MDBInput
                          value={this.state.uname}
                          name="uname"
                          onChange={this.changeHandler}
                          type="text"
                          id="UNameEx"
                          label="User name"
                          required
                          outline
                        >
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a Last Name.
                          </div>
                        </MDBInput>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <div className="md-form mb-5">
                    <MDBInput
                      value={this.state.email}
                      onChange={this.changeHandler}
                      type="email"
                      id="EmailEx"
                      name="email"
                      label="Email"
                      required
                      outline
                    >
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </MDBInput>
                  </div>
                  <div className="md-form mb-5">
                    <MDBInput
                      value={this.state.address}
                      onChange={this.changeHandler}
                      type="text"
                      id="AddressEx"
                      name="address"
                      label="Address"
                      required
                      outline
                    >
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please provide a Your Address.
                      </div>
                    </MDBInput>
                  </div>
                  <MDBRow>
                    <MDBCol lg="4" md="6" className="mb-4">
                      <select
                        className="custom-select d-block w-100"
                        id="CountryEx"
                        required
                        value={this.state.country}
                        onChange={this.changeHandler}
                        name="country"
                        label="Country"
                      >
                        <option value="">Choose...</option>
                        <option>United States</option>
                        <option>Pakistan</option>
                        <option>Saudia Arabia</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-4">
                      <select
                        className="custom-select d-block w-100"
                        id="StateEx"
                        required
                        value={this.state.state}
                        onChange={this.changeHandler}
                        name="state"
                        label="State"
                      >
                        <option value="">Choose...</option>
                        <option>Balochistan</option>
                        <option>AJK</option>
                        <option>Punjab</option>
                        <option>KPK</option>
                        <option>Sindh</option>
                        <option>Gilgit Baltistan</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-4">
                      <MDBInput
                        value={this.state.zip}
                        name="zip"
                        onChange={this.changeHandler}
                        type="text"
                        id="ZipEx"
                        label="ZIP"
                        required
                        outline
                      >
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Zip code required /.
                        </div>
                      </MDBInput>
                    </MDBCol>
                  </MDBRow>

                  <hr />

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="saveinfo"
                      value={this.state.saveinfo}
                      onChange={this.changeHandler}
                      name="saveinfo"
                      required
                    />
                    <label className="custom-control-label" for="saveinfo">
                      Save this information for next time
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="sameaddress"
                      value={this.state.sameaddress}
                      onChange={this.changeHandler}
                      name="sameaddress"
                      required
                    />
                    <label className="custom-control-label" for="sameaddress">
                      Shipping address is the same as my billing address
                    </label>
                  </div>

                  <hr />

                  <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                      <input
                        id="credit"
                        type="radio"
                        className="custom-control-input"
                        checked
                        required
                        value={this.state.pmethods}
                        onChange={this.changeHandler}
                        name="pmethods"
                      />
                      <label className="custom-control-label" for="credit">
                        Credit card
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="debit"
                        type="radio"
                        className="custom-control-input"
                        required
                        value={this.state.pmethods}
                        onChange={this.changeHandler}
                        name="pmethods"
                      />
                      <label className="custom-control-label" for="debit">
                        Debit card
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        id="paypal"
                        type="radio"
                        className="custom-control-input"
                        required
                        value={this.state.pmethods}
                        onChange={this.changeHandler}
                        name="pmethods"
                      />
                      <label className="custom-control-label" for="paypal">
                        Paypal
                      </label>
                    </div>
                  </div>
                  <MDBRow>
                    <MDBCol md="6" className="mb-3">
                      <MDBInput
                        value={this.state.namecard}
                        onChange={this.changeHandler}
                        className="form-control"
                        type="text"
                        id="CcEx"
                        name="namecard"
                        label="Name on card"
                        required
                        outline
                      >
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                        <small className="text-muted m-0">
                          Full name as displayed on card
                        </small>
                      </MDBInput>
                    </MDBCol>
                    <MDBCol md="6" className="mb-3">
                      <MDBInput
                        value={this.state.numbercard}
                        onChange={this.changeHandler}
                        className="form-control"
                        type="text"
                        id="CcnEx"
                        name="numbercard"
                        label="Credit card number"
                        required
                        outline
                      >
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </MDBInput>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="3" className="mb-3">
                      <MDBInput
                        value={this.state.expire}
                        onChange={this.changeHandler}
                        className="form-control"
                        type="text"
                        id="ExpireEx"
                        name="expire"
                        label="Expiration"
                        required
                        outline
                      >
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </MDBInput>
                    </MDBCol>
                    <MDBCol md="3" className="mb-3">
                      <MDBInput
                        value={this.state.securitycode}
                        onChange={this.changeHandler}
                        className="form-control"
                        type="text"
                        id="SecurityEx"
                        name="securitycode"
                        label="CVV"
                        required
                        outline
                      >
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </MDBInput>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Continue to checkout
                  </button>
                </form>
              </div>
            </MDBCol>
            <MDBCol md="4" className="mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-pill badge-secondary">
                  {totalItems}
                </span>
              </h4>
              <MDBListGroup style={{ width: "22rem" }}>
                {totalItems > 0 ? cartItem : emptyCart}
                {totalItems > 0 && (
                  <React.Fragment>
                    {" "}
                    <MDBListGroupItem className="d-flex justify-content-between bg-light">
                      <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                      </div>
                      <span className="text-success">-$5</span>
                    </MDBListGroupItem>
                    <MDBListGroupItem className=" d-flex justify-content-between">
                      <div>
                        <h6 className="my-0">Total Rupees</h6>
                      </div>
                      <strong>{totalPrice}</strong>
                    </MDBListGroupItem>
                  </React.Fragment>
                )}
              </MDBListGroup>
              <form className="card p-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-secondary btn-md waves-effect m-0"
                      type="button"
                    >
                      Redeem
                    </button>
                  </div>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Checkout;
