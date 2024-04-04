import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet1: {
    breakpoint: { max: 1280, min: 1050 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1050, min: 600 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const images = [
  require("./../../images/deli/de_02.jpg"),
  require("./../../images/deli/de_03.jpg"),
  require("./../../images/deli/de_04.jpg"),
  require("./../../images/deli/de_05.jpg"),
  require("./../../images/deli/de_06.jpg"),
  require("./../../images/deli/de_07.jpg"),
  require("./../../images/deli/de_08.jpg"),
  require("./../../images/deli/de_09.jpg"),
  require("./../../images/deli/de_10.jpg"),
  require("./../../images/deli/de_11.jpg"),
];

var img1 = require("./../../images/background/bg2.jpg");
var img3 = require("./../../images/background/bg5.jpg");

class HotFood extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle"
            style={{ backgroundImage: "url(" + img1 + ")" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">HotFood</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"/"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>HotFood</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <div
              className="section-full bg-white content-inner"
              style={{
                backgroundImage: "url(" + img3 + ")",
                backgroundSize: "100%",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-center">
                      <p>
                        Need a quick bite or want to try local food? Our deli
                        was rated the best on island. Whether you’re in need of
                        a quick meal, sandwich or rotisserie chicken,{" "}
                        <span style={{ color: "red" }}>Food Center</span> serves
                        lunch and dinner.
                      </p>
                      <p>
                        Thick or thin, from the largest variety of cold cuts,
                        smoked ham, smoked or oven roasted turkey, beefs and
                        cheeses, our deli slices to order.
                      </p>
                      <p>
                        By the way… We also do Party Platters!!!…Cheeses, Meats,
                        Fruits, or Cooked Food… just contact our deli manager
                        and we will be happy to cater your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-slider">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={2000}
                  keyBoardControl={true}
                >
                  {images.map((img, index) => (
                    <div className="col" key={index}>
                      <div className="item-box shop-item style2">
                        <div className="item-img">
                          <img src={img} alt="" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
                ;
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default HotFood;
