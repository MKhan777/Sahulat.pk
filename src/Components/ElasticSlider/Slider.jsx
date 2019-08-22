import React, { Component } from "react";
import "./css/normalize.css";
import "./css/demo.css";
import "./css/component.css";
import "./fonts/font-awesome-4.3.0/css/font-awesome.min.css";
import "./js/classie";
import "./js/main";
import { Row, Col } from "react-bootstrap";
class Slider extends Component {
  state = {};
  render() {
    return (
      <div className="js">
        <Row>
          <Col sm={12}>
            <div className="container">
              <div className="deco deco--title" />
              <div id="slideshow" className="slideshow">
                <div className="slide">
                  <h2 className="slide__title slide__title--preview">
                    Macadamia Skin Oil <span className="slide__price">$39</span>
                  </h2>
                  <div className="slide__item">
                    <div className="slide__inner">
                      <img
                        className="slide__img slide__img--small"
                        src="images/small/1.png"
                        alt="Something"
                      />
                      <button
                        className="action action--open"
                        aria-label="View details"
                      >
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="slide__content">
                    <div className="slide__content-scroller">
                      <img
                        className="slide__img slide__img--large"
                        src="images/1.png"
                        alt="Something"
                      />
                      <div className="slide__details">
                        <h2 className="slide__title slide__title--main">
                          Macadamia Skin Oil
                        </h2>
                        <p className="slide__description">
                          Hydration for very dry skin
                        </p>
                        <div>
                          <span className="slide__price slide__price--large">
                            $39
                          </span>
                          <button className="button button--buy">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <h2 className="slide__title slide__title--preview">
                    Grapeseed Skin Oil <span className="slide__price">$19</span>
                  </h2>
                  <div className="slide__item">
                    <div className="slide__inner">
                      <img
                        className="slide__img slide__img--small"
                        src="images/small/2.png"
                        alt="Something"
                      />
                      <button
                        className="action action--open"
                        aria-label="View details"
                      >
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="slide__content">
                    <div className="slide__content-scroller">
                      <img
                        className="slide__img slide__img--large"
                        src="images/2.png"
                        alt="Something"
                      />
                      <div className="slide__details">
                        <h2 className="slide__title slide__title--main">
                          Grapeseed Skin Oil
                        </h2>
                        <p className="slide__description">
                          Moisture control for all skin types
                        </p>
                        <div>
                          <span className="slide__price slide__price--large">
                            $19
                          </span>
                          <button className="button button--buy">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <h2 className="slide__title slide__title--preview">
                    Jojoba Skin Oil <span className="slide__price">$35</span>
                  </h2>
                  <div className="slide__item">
                    <div className="slide__inner">
                      <img
                        className="slide__img slide__img--small"
                        src="images/small/3.png"
                        alt="Something"
                      />
                      <button
                        className="action action--open"
                        aria-label="View details"
                      >
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="slide__content">
                    <div className="slide__content-scroller">
                      <img
                        className="slide__img slide__img--large"
                        src="images/3.png"
                        alt="Something"
                      />
                      <div className="slide__details">
                        <h2 className="slide__title slide__title--main">
                          Jojoba Skin Oil
                        </h2>
                        <p className="slide__description">
                          Protection for sensitive skin
                        </p>
                        <div>
                          <span className="slide__price slide__price--large">
                            $35
                          </span>
                          <button className="button button--buy">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <h2 className="slide__title slide__title--preview">
                    Amaranth Skin Oil <span className="slide__price">$29</span>
                  </h2>
                  <div className="slide__item">
                    <div className="slide__inner">
                      <img
                        className="slide__img slide__img--small"
                        src="images/small/4.png"
                        alt="Something"
                      />
                      <button
                        className="action action--open"
                        aria-label="View details"
                      >
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="slide__content">
                    <div className="slide__content-scroller">
                      <img
                        className="slide__img slide__img--large"
                        src="images/4.png"
                        alt="Something"
                      />
                      <div className="slide__details">
                        <h2 className="slide__title slide__title--main">
                          Amaranth Skin Oil
                        </h2>
                        <p className="slide__description">
                          Rich hydration for mature skin
                        </p>
                        <div>
                          <span className="slide__price slide__price--large">
                            $29
                          </span>
                          <button className="button button--buy">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <h2 className="slide__title slide__title--preview">
                    Argan Skin Oil <span className="slide__price">$59</span>
                  </h2>
                  <div className="slide__item">
                    <div className="slide__inner">
                      <img
                        className="slide__img slide__img--small"
                        src="images/small/5.png"
                        alt="Something"
                      />
                      <button
                        className="action action--open"
                        aria-label="View details"
                      >
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="slide__content">
                    <div className="slide__content-scroller">
                      <img
                        className="slide__img slide__img--large"
                        src="images/5.png"
                        alt="Something"
                      />
                      <div className="slide__details">
                        <h2 className="slide__title slide__title--main">
                          Argan Skin Oil
                        </h2>
                        <p className="slide__description">
                          Moisture for problematic &amp; dry skin
                        </p>
                        <div>
                          <span className="slide__price slide__price--large">
                            $59
                          </span>
                          <button className="button button--buy">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <h2 className="slide__title slide__title--preview">
                    Avocado Skin Oil <span className="slide__price">$39</span>
                  </h2>
                  <div className="slide__item">
                    <div className="slide__inner">
                      <img
                        className="slide__img slide__img--small"
                        src="images/small/6.png"
                        alt="Something"
                      />
                      <button
                        className="action action--open"
                        aria-label="View details"
                      >
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="slide__content">
                    <div className="slide__content-scroller">
                      <img
                        className="slide__img slide__img--large"
                        src="images/6.png"
                        alt="Something"
                      />
                      <div className="slide__details">
                        <h2 className="slide__title slide__title--main">
                          Avocado Skin Oil
                        </h2>
                        <p className="slide__description">
                          Deep repair for stressed skin
                        </p>
                        <div>
                          <span className="slide__price slide__price--large">
                            $39
                          </span>
                          <button className="button button--buy">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="action action--close" aria-label="Close">
                  <i className="fa fa-close" />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Slider;
