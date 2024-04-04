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
  require("./../../images/bakery/b_02.jpg"),
  require("./../../images/bakery/b_03.jpg"),
  require("./../../images/bakery/b_04.jpg"),
  require("./../../images/bakery/b_08.jpg"),
  require("./../../images/bakery/b_09.jpg"),
  require("./../../images/bakery/b_10.jpg"),
];

var img1 = require("./../../images/background/bg2.jpg");
var img3 = require("./../../images/background/bg5.jpg");

class Bakery extends Component {
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
                <h1 className="text-white">Bakery</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"/"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Bakery</li>
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
                        <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                          Bread
                        </span>
                        ,{" "}
                        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                          Bread
                        </span>
                        , Bread everybody's favorite food. Long, round, flat,
                        short, white or wheat, we love to bake bread. Always
                        fresh, baked daily, our bakery offers you one of the
                        largest assortments of breads and pastries around.
                      </p>
                      <p>
                        Pita or rye bread, frozen or Melba toast, bread sticks
                        or breads from local bakeries, our products are always
                        fresh, guaranteed.
                      </p>
                      <p>
                        Whether you are looking for hamburger buns or birthday
                        cakes, <span style={{ color: "red" }}>Food Center</span>{" "}
                        is the place.
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
                          <img src={img} style={{ height: "400px" }} alt="" />
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

export default Bakery;
