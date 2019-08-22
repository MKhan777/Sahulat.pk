import React, { Component } from "react";
import { MDBCarouselItem, MDBView } from "mdbreact";
class CarouselItems extends Component {
  state = {};
  render() {
    const { image } = this.props;
    return (
      <MDBCarouselItem itemId={image._id}>
        <MDBView>
          <img className="carousel_img d-block w-100" src={image.url} alt="Third slide" />
        </MDBView>
      </MDBCarouselItem>
    );
  }
}

export default CarouselItems;
