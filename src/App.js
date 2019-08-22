import React, { Component } from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
//import Slider from "./Components/ElasticSlider/Slider"
import axios from "axios";
import Header from "./Components/Header";
import NavigationBar from "./Components/Navigationbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Error from "./Components/Error";
import Bags from "./Components/Bags";
import Shoes from "./Components/Shoes";
import Watches from "./Components/Watches";
import Womens from "./Components/Womens";
import Items from "./Components/Items";
import check from "./Components/check";
import View from "./Components/View";
import Admin from "./Components/Admin";
import Checkout from "./Components/Checkout";

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchData();
  }
  state = {
    // products: getProducts(),
    products: [
      {
        _id: "",
        title: "",
        value: 0,
        amount: 0,
        price: "",
        category: "",
        sub_category: "",
        imageUrl: "",
        body: ""
      }
    ],
    brands: [
      { _id: 1, url: "images/brands/b1.png" },
      { _id: 2, url: "images/brands/b2.png" },
      { _id: 3, url: "images/brands/b3.png" },
      { _id: 4, url: "images/brands/b4.png" },
      { _id: 5, url: "images/brands/b5.png" },
      { _id: 6, url: "images/brands/b3.png" }
    ],
    bagsUrl: [
      { _id: 1, url: "images/Clothing/Womens/Bags/bc1.jpg" },
      { _id: 2, url: "images/Clothing/Womens/Bags/bc2.jpg" },
      { _id: 3, url: "images/Clothing/Womens/Bags/bc3.jpg" },
      { _id: 4, url: "images/Clothing/Womens/Bags/bc4.jpg" },
      { _id: 5, url: "images/Clothing/Womens/Bags/bc5.jpg" },
      { _id: 6, url: "images/Clothing/Womens/Bags/bc6.jpg" },
      { _id: 7, url: "images/Clothing/Womens/Bags/bc7.jpg" },
      { _id: 8, url: "images/Clothing/Womens/Bags/bc8.jpg" }
    ],
    shoesUrl: [
      { _id: 1, url: "images/Clothing/Mens/Shoes/sc1.jpg" },
      { _id: 2, url: "images/Clothing/Mens/Shoes/sc2.jpg" },
      { _id: 3, url: "images/Clothing/Mens/Shoes/sc3.jpg" },
      { _id: 4, url: "images/Clothing/Mens/Shoes/sc4.jpg" },
      { _id: 5, url: "images/Clothing/Mens/Shoes/sc5.jpg" },
      { _id: 6, url: "images/Clothing/Mens/Shoes/sc6.jpg" },
      { _id: 7, url: "images/Clothing/Mens/Shoes/sc7.jpg" },
      { _id: 8, url: "images/Clothing/Mens/Shoes/sc8.jpg" },
      { _id: 9, url: "images/Clothing/Mens/Shoes/sc9.jpg" },
      { _id: 10, url: "images/Clothing/Mens/Shoes/sc10.jpg" },
      { _id: 11, url: "images/Clothing/Mens/Shoes/sc11.jpg" },
      { _id: 12, url: "images/Clothing/Mens/Shoes/sc12.jpg" }
    ],
    watchesUrl: [
      { _id: 1, url: "images/Watches/wc1.jpg" },
      { _id: 2, url: "images/Watches/wc2.jpg" },
      { _id: 3, url: "images/Watches/wc3.jpg" },
      { _id: 4, url: "images/Watches/wc4.jpg" },
      { _id: 5, url: "images/Watches/wc5.jpg" },
      { _id: 6, url: "images/Watches/wc6.jpg" },
      { _id: 7, url: "images/Watches/wc7.jpg" },
      { _id: 8, url: "images/Watches/wc8.jpg" },
      { _id: 9, url: "images/Watches/wc9.jpg" }
    ],
    womensUrl: [
      { _id: 1, url: "images/Clothing/Womens/wc1.jpg" },
      { _id: 2, url: "images/Clothing/Womens/wc2.jpg" },
      { _id: 3, url: "images/Clothing/Womens/wc3.jpg" },
      { _id: 4, url: "images/Clothing/Womens/wc4.jpg" },
      { _id: 5, url: "images/Clothing/Womens/wc5.jpg" },
      { _id: 6, url: "images/Clothing/Womens/wc6.jpg" },
      { _id: 7, url: "images/Clothing/Womens/wc7.jpg" }
    ]
  };
  fetchData = e => {
    // axios.get("http://localhost:5000/api/sampleApi/getProducts").then(response => {
    //   console.log("ma aya par agaya hoo");
    //   this.setState({ products: response.data });
    //   console.log(response.data);
    // });
    axios({
      method: "get",
      url: "http://localhost:5000/api/sampleApi/getProducts"
    })
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  componentDidMount() {
    this.fetchData();
  }
  handleReset = () => {
    const products = this.state.products.map(p => {
      p.value = 0;
      return p;
    });
    this.setState({ products });
  };
  handleIncrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product }; //to prevent
    //from directly modifying the state of products[index]
    // we clone it to to the product we recieved as a parameter
    products[index].value++;
    this.setState({ products });
    //jab bhi state change hoti ha to render is called because of update phase
    //which mean all of its childern are going to be renderd as well
    // console.log(product);
  };
  handleDecrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value--;
    this.setState({ products });
  };
  refreshProducts = () => {
    this.fetchData();
  };
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={Header} />
          <Route
            path="/"
            render={props => (
              <NavigationBar
                {...props}
                totalItems={this.state.products.filter(p => p.value > 0).length}
              />
            )}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  products={this.state.products}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  brands={this.state.brands}
                />
              )}
            />
            <Route
              path="/bags"
              render={props => (
                <Bags
                  {...props}
                  products={this.state.products.filter(
                    p => /Bags/.test(p.sub_category) === true
                  )}
                  imageUrls={this.state.bagsUrl}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/shoes"
              render={props => (
                <Shoes
                  {...props}
                  products={this.state.products.filter(
                    p => /Shoes/.test(p.sub_category) === true
                  )}
                  imageUrls={this.state.shoesUrl}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/watches"
              render={props => (
                <Watches
                  {...props}
                  products={this.state.products.filter(
                    p => /Watches/.test(p.sub_category) === true
                  )}
                  imageUrls={this.state.watchesUrl}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/womens"
              render={props => (
                <Womens
                  {...props}
                  products={this.state.products.filter(
                    p => /Womens/.test(p.sub_category) === true
                  )}
                  imageUrls={this.state.womensUrl}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              exact
              path="/furniture"
              render={props => (
                <Items
                  {...props}
                  products={this.state.products.filter(
                    p => /Furniture/.test(p.category) === true
                  )}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/clothing/mens"
              render={props => (
                <Items
                  {...props}
                  products={this.state.products.filter(
                    p => /Mens/.test(p.sub_category) === true
                  )}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/clothing/womens"
              render={props => (
                <Items
                  {...props}
                  products={this.state.products.filter(
                    p => /Womens/.test(p.sub_category) === true
                  )}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              exact
              path="/electronics/laptops"
              render={props => (
                <Items
                  {...props}
                  products={this.state.products.filter(
                    p => /Computers/.test(p.sub_category) === true
                  )}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              exact
              path="/electronics"
              render={props => (
                <Items
                  {...props}
                  products={this.state.products.filter(
                    p => /Electronics/.test(p.category) === true
                  )}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/furniture/tv"
              render={props => (
                <Items
                  {...props}
                  products={this.state.products.filter(
                    p => /TV/.test(p.sub_category) === true
                  )}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/electronics/consoles"
              render={props => (
                <Items
                  {...props}
                  products={this.state.products.filter(
                    p => /Gaming/.test(p.sub_category) === true
                  )}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/electronics/mobiles"
              render={props => (
                <Items
                  {...props}
                  products={this.state.products.filter(
                    p => /Mobile/.test(p.sub_category) === true
                  )}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/furniture/washing_machine"
              render={props => (
                <Items
                  {...props}
                  products={this.state.products.filter(
                    p => /Washing Machine/.test(p.sub_category) === true
                  )}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/furniture/sofa"
              render={props => (
                <Items
                  {...props}
                  products={this.state.products.filter(
                    p => /Sofa/.test(p.sub_category) === true
                  )}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/furniture/fridge"
              render={props => (
                <Items
                  {...props}
                  products={this.state.products.filter(
                    p => /Fridge/.test(p.sub_category) === true
                  )}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route
              path="/product/:id"
              render={props => (
                <View
                  {...props}
                  products={this.state.products}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              )}
            />
            <Route path="/check" component={check} />
            <Route
              path="/checkout"
              render={props => (
                <Checkout
                  {...props}
                  cartItems={this.state.products.filter(p => p.value > 0)}
                  totalItems={
                    this.state.products.filter(p => p.value > 0).length
                  }
                />
              )}
            />
            <Route
              path="/admin"
              render={props => (
                <Admin
                  {...props}
                  products={this.state.products}
                  refreshProducts={this.refreshProducts}
                />
              )}
            />
            <Route path="/404_not_Found" component={Error} />
            <Redirect from="*" to="/404_not_Found" />
          </Switch>
          <Route path="/" component={Footer} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
