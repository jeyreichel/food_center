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
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const images = [
  require("./../../images/store/s_01.jpg"),
  require("./../../images/store/s_02.jpg"),
  require("./../../images/store/s_03.jpg"),
  require("./../../images/store/s_04.jpg"),
  require("./../../images/store/s_05.jpg"),
  require("./../../images/store/s_06.jpg"),
  require("./../../images/store/s_07.jpg"),
  require("./../../images/store/s_08.jpg"),
  require("./../../images/store/s_09.jpg"),
  require("./../../images/store/s_10.jpg"),
  require("./../../images/store/s_11.jpg"),
  require("./../../images/store/s_12.jpg"),
];

var img1 = require("./../../images/background/bg2.jpg");
var img2 = require("./../../images/background/bg1.jpg");
var img3 = require("./../../images/background/bg5.jpg");

class Store extends Component {
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
                <h1 className="text-white">Our Store</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"/"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Our Store</li>
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
                      <div className="icon-bx icon-bx-xl">
                        <img src={require("./../../images/cake1.jpg")} alt="" />
                      </div>
                      <h3>About Our Food Center</h3>
                      <p>
                        Food Center offers you a unique shopping experience.
                        From computer controlled refrigeration to daily specials
                        throughout the store, feel confident that you are
                        purchasing the freshest products available. Variety and
                        Service are our driving forces. You are sure to be
                        impressed by the sheer variety of products in our store.
                        So take your time while visiting us, as our shelves are
                        packed with goodies. Save time and money from chasing
                        store to store just not to find what you're looking for.
                        Be it candy, produce, liquor, beer, meats, frozen foods,
                        snacks, beverages, or those hard to find items, at Food
                        Center you are most certain to find them in one
                        convenient place. Our floor associates are more than
                        happy to assist you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-full content-inner bg-line-top bg-line-bottom"
              style={{
                backgroundImage: "url(" + img1 + " )",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-center text-white">
                      <h3 className="text-white">
                        For your shopping convenience
                      </h3>
                      <p>
                        Food Center is open 7:00 a.m. to 10:00 p.m. Daily
                        (including Holidays)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section-full content-inner-1 bg-white"
              style={{ backgroundImage: "url(" + img2 + ")" }}
            >
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

export default Store;
