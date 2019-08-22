import React, { Component } from "react";
import ControlledCarousel from "./ControlledCarousel";
import FeaturedItems from "./FeaturedItems";
import Items from "./Items";
import Pagination from "./Pagination";
import Tags from "./Tags";
import Parallax from "./Parallax";
import Slider from "./Slider";
import Newsletter from "./Newsletter";
class Home extends Component {
  state = {};
  render() {
    const { products, onReset, onIncrement, onDecrement, brands } = this.props;
    return (
      <React.Fragment>
        <ControlledCarousel />
        <main className="container-fluid">
          <FeaturedItems />
          <Items
            products={products}
            onReset={onReset}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
          <Pagination />
          <Tags brands={brands} />
          <Parallax />
          <Slider
            products={products}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </main>
        <Newsletter />
      </React.Fragment>
    );
  }
}
export default Home;
