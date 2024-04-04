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
  require("./../../images/gourmet/go_01.jpg"),
  require("./../../images/gourmet/go_02.jpg"),
  require("./../../images/gourmet/go_04.jpg"),
  require("./../../images/gourmet/go_05.jpg"),
  require("./../../images/gourmet/go_06.jpg"),
  require("./../../images/gourmet/go_07.jpg"),
  require("./../../images/gourmet/go_08.jpg"),
];

var img1 = require("./../../images/background/bg2.jpg");
var img3 = require("./../../images/background/bg5.jpg");

class Gourmet extends Component {
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
                <h1 className="text-white">Gourmet</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"/"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Gourmet</li>
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
                        Ground coffee or whole bean, regular tea or green,{" "}
                        <span style={{ color: "red" }}>Food Center</span> has
                        the largest selection of coffees and teas. So much so,
                        at times we do not have the room to fit them all on our
                        shelves.
                      </p>
                      <p>
                        At <span style={{ color: "red" }}>Food Center</span> you
                        will find the largest gourmet selection on island,
                        throughout the store, in every isle.
                      </p>
                      <p>
                        Exotic preserves and jellies, to hot sauces, to spice
                        grinders, to kosher foods. From Chinese, to Indian and
                        Mediterranean, to ethnic foods. From gourmet chips and
                        dips, gourmet snacks, to hard to find beverages,{" "}
                        <span style={{ color: "red" }}>Food Center</span> offers
                        you the largest selection available. If we do not have
                        what your looking for... bring it to our attention and
                        we will try our best to provide it for you.
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
                          <img src={img} style={{ height: "500px" }} alt="" />
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

export default Gourmet;
