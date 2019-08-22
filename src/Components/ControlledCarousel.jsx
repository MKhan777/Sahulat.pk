import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="img-fluid uid d-block w-100"
            src="images/Carousel/c1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="animated bounceInUp delay-2s fast p-text IM">
              Provides Best Items for EveryDay Needs Only On...
            </p>
            <h3 className="animated fadeInUpBig delay-1s slow h3-text  luckiest">
              Sahulat.pk
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-100"
            src="images/Carousel/c2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2 className="animated bounceInRight delay-2s faster h3-text gochi">
              Eid Lawn
            </h2>
            <h4 className="animated bounceInRight delay-2s faster h3-text  permanent">
              UNSTITCHED
            </h4>
            <p className="animated bounceInLeft delay-1s slow p-text  gloria">
              <i>Instores & Online</i>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-100"
            src="images/Carousel/c3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="animated rubberBand delay-2s faster h3-text  permanent">
              Best & astoundingly Less Prices
            </h3>
            <Button className="animated rollIn  delay-1s slow p-text luckiest">
              Browse SmartPhones
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-100"
            src="images/Carousel/c4.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="animated zoomInRight delay-2s faster h3-text gochi">
              We Believe In Equal
            </h3>
            <p className="animated zoomInLeft delay-1s slow p-text frederick">
              Touching Lives, Improving Lives
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-100"
            src="images/Carousel/c5.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="animated rotateIn delay-4s slow h3-text  chewy">
              Lahore
            </h3>
            <p className="animated wobble delay-1s slow p-text  cabin">
              The City Of Gardens!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-100"
            src="images/Carousel/c6.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="animated rubberBand delay-2s faster h3-text  sister">
              Lahore
            </h3>
            <p className="animated flip delay-1s slow p-text  IM">
              The City Of Gardens!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-100"
            src="images/Carousel/c7.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="animated bounceInRight delay-2s faster h3-text  shojumaru">
              Lahore
            </h3>
            <p className="animated bounceInLeft delay-1s slow p-text gochi">
              The City Of Gardens!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-100"
            src="images/Carousel/c8.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="animated flip delay-2s slow h3-text  sigmar">
              Lahore
            </h3>
            <p className="animated tada delay-1s slow p-text cabin">
              Giving You The Best Food & nutrition
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-fluid d-block w-100"
            src="images/Carousel/c9.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="animated flip delay-2s slow h3-text  sigmar">
              Lahore
            </h3>
            <p className="animated tada delay-1s slow p-text cabin">
              Giving You The Best Food & nutrition
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    );
  }
}

export default ControlledCarousel;
