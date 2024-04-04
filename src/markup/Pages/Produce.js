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
  require("./../../images/produce/p_02.jpg"),
  require("./../../images/produce/p_03.jpg"),
  require("./../../images/produce/p_04.jpg"),
  require("./../../images/produce/p_05.jpg"),
  require("./../../images/produce/p_06.jpg"),
  require("./../../images/produce/p_07.jpg"),
  require("./../../images/produce/p_08.jpg"),
  require("./../../images/produce/p_10.jpg"),
  require("./../../images/produce/p_11.jpg"),
  require("./../../images/produce/p_12.jpg"),
  require("./../../images/produce/p_13.jpg"),
  require("./../../images/produce/p_14.jpg"),
  require("./../../images/produce/p_15.jpg"),
];

var img1 = require("./../../images/background/bg2.jpg");
var img3 = require("./../../images/background/bg5.jpg");

class Produce extends Component {
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
                <h1 className="text-white">Produce</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"/"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Produce</li>
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
                        Fresh, Fresh, Fresh, our produce are brought to you from
                        all around the world weekly and daily. From sweet
                        tamarind, mangoes, star fruit, kiwi, prickly pear, or
                        rambutan… from fresh oranges to ripe avocados… from
                        seedless melons to ripe vine tomatoes..from organically
                        grown vegetables to fresh spices,
                        <span style={{ color: "red" }}>Food Center</span> offers
                        you the largest and juiciest variety of produce found
                        anywhere.
                      </p>
                      <p>
                        If you prefer loose or pre-packed, our produce
                        associates offer you only the cleanest and unblemished
                        fruits and vegetables. Whether it is Idaho potatoes
                        (potatos) or sister islands roots and vegetables you are
                        sure to be pleased, guaranteed.
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

export default Produce;
