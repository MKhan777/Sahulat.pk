import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Link, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SweetAlert from "sweetalert2-react";
import "./../App.css";

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// }

class Navigationbar extends Component {
  state = {
    imageUrl: "images/Company/sahulat-logo7.png",
    show: false
  };
  render() {
    const { totalItems } = this.props;
    const info = "There are " + totalItems + " items in the cart";
    if (this.props.history.location.pathname.match(/admin/gi)) {
      return null;
    } else {
      return (
        <Switch>
          <Navbar
            className="navbar"
            id="nav"
            collapseOnSelect
            expand="lg"
            variant="dark"
            sticky="top"
          >
            <Navbar.Brand href="#home">
              <Nav.Link>
                <Link to="/">
                  <img
                    className="Logo"
                    src={this.state.imageUrl}
                    alt="Sahulat.pk"
                  />
                </Link>
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto pb-0">
                <Nav.Link>
                  <Link to="/admin" className="navLink">
                    Features
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link to="/watches" className="navLink">
                    Pricing
                  </Link>
                </Nav.Link>
                <NavDropdown
                  title="Categories"
                  id="collasible-nav-dropdown"
                  className="navLink"
                >
                  <NavDropdown.Item>
                    <Link to="/furniture" className="navLink">
                      Furniture
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/clothing/mens" className="navLink">
                      Mens
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/clothing/womens" className="navLink">
                      Womens
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/watches" className="navLink">
                      Watches
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/electronics/laptops" className="navLink">
                      Laptops
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/electronics" className="navLink">
                      Electronics
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/furniture/tv" className="navLink">
                      TV
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/electronics/consoles" className="navLink">
                      Consoles
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/electronics/mobiles" className="navLink">
                      Mobiles
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/furniture/washing_machine" className="navLink">
                      Washing Machine
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/furniture/fridge" className="navLink">
                      Fridge
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/furniture/sofa" className="navLink">
                      Sofa
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-3"
                  style={{ width: "30vw" }}
                />
                <Button variant="outline-warning">Search</Button>
              </Form>
              <Nav>
                <Nav.Link>
                  {" "}
                  <Link to="/check" className="navLink">
                    Contact Us
                  </Link>
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="#carts"
                  onClick={() => this.setState({ show: true })}
                >
                  <FontAwesomeIcon
                    className="header-icons"
                    icon="shopping-cart"
                    size="lg"
                    color="#ff4c3b"
                  />
                  <span className="badge badge-pill badge-dark">
                    {totalItems}
                  </span>
                  <SweetAlert
                    show={this.state.show}
                    title="Cart Information"
                    text={info}
                    type="success"
                    onConfirm={() => this.setState({ show: false })}
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Switch>
      );
    }
  }
}

export default Navigationbar;
