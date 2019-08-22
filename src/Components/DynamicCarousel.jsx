import React from "react";
import { MDBCarousel, MDBCarouselInner } from "mdbreact";
import CarouselItems from "./CarouselItems";

class DynamicCarousel extends React.Component {
  state = {};
  render() {
    const { imageUrls } = this.props;
    const images = imageUrls.map(images => (
      <CarouselItems key={images._id} image={images} />
    ));
    return (
      <MDBCarousel
        activeItem={1}
        length={imageUrls.length}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>{images}</MDBCarouselInner>
      </MDBCarousel>
    );
  }
}

export default DynamicCarousel;
