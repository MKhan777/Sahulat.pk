// import React from "react";
// import Swiper from "react-id-swiper";
// // Need to add Pagination, Navigation modules
// import { Pagination, Navigation } from "swiper/dist/js/swiper.esm";
// import Cards from "./Cards";

// class Slider extends React.Component {
//   render() {
//     const { products, onIncrement, onDecrement } = this.props;
//     const product = products.map(product => (
//       <Cards
//         key={product._id}
//         onIncrement={onIncrement}
//         onDecrement={onDecrement}
//         product={product}
//       />
//     ));

//     const params = {
//       modules: [Pagination, Navigation],
//       slidesPerView: 1,
//       spaceBetween: 30,
//       slidesPerGroup: 1,
//       loop: true,
//       loopFillGroupWithBlank: true,
//       pagination: {
//         el: ".swiper-pagination",
//         type: "bullets",
//         clickable: true
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev"
//       }
//     };
//     return (
//       <React.Fragment>
//         <p className="featured-paragraph-text text-center IM">
//           MADE THE HARD WAY
//         </p>
//         <h3 className="featured-heading-text text-center frederick">
//           FEATURED BRANDS
//         </h3>
//         <Swiper {...params} shouldSwiperUpdate>{product}</Swiper>
//       </React.Fragment>
//     );
//   }
// }

// export default Slider;
import React from "react";
import Slides from "react-slick";
import { MDBContainer } from "mdbreact";
import Cards from "./Cards";

class Slider extends React.Component {
  render() {
    var settings = {
      dots: true,
      centerPadding: 30,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      className: "slides"
    };
    const { products, onIncrement, onDecrement } = this.props;
    const product = products.map(product => (
      <Cards
        key={product._id}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        product={product}
      />
    ));
    return (
      <MDBContainer fluid>
        <h2 className="h1-responsive font-weight-bold text-center my-5 text-danger">
          Grab Your Favourite Item{" "}
          <span className="permanent text-secondary">'Easily'</span>
        </h2>
        <Slides {...settings}>{product}</Slides>
      </MDBContainer>
    );
  }
}
export default Slider;
