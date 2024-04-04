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
  require("./../../images/meat/m_01.jpg"),
  require("./../../images/meat/m_02.jpg"),
  require("./../../images/meat/m_03.jpg"),
  require("./../../images/meat/m_04.jpg"),
  require("./../../images/meat/m_05.jpg"),
  require("./../../images/meat/m_06.jpg"),
  require("./../../images/meat/m_07.jpg"),
  require("./../../images/meat/m_08.jpg"),
  require("./../../images/meat/m_09.jpg"),
  require("./../../images/meat/m_10.jpg"),
];

var img1 = require("./../../images/background/bg2.jpg");
var img3 = require("./../../images/background/bg5.jpg");

class Meat extends Component {
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
                <h1 className="text-white">Meat</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"/"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Meat</li>
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
                        Black Angus, NY Strip, fillet mignon, live lobster,
                        fresh dolphin, fresh snapper, baby-back ribs and on and
                        on and on … At{" "}
                        <span style={{ color: "red" }}>Food Center</span> our
                        butchers offer you the freshest cuts of beef, the
                        freshest seafood, the juiciest ham, and the plumest
                        chicken you will find anywhere.
                      </p>
                      <p>
                        Cut to order, packaged daily, our meats bring water to
                        your mouth. Whether you are looking for a turkey or
                        steak, be it a marinated chicken breast or a freshly
                        steamed lobster cooked while you wait, our butchers are
                        here to please.
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

export default Meat;
