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
  require("./../../images/dairy/da_02.jpg"),
  require("./../../images/dairy/da_04.jpg"),
  require("./../../images/dairy/da_05.jpg"),
  require("./../../images/dairy/da_06.jpg"),
  require("./../../images/dairy/da_07.jpg"),
  require("./../../images/dairy/da_08.jpg"),
  require("./../../images/dairy/da_09.jpg"),
  require("./../../images/dairy/da_10.jpg"),
  require("./../../images/dairy/da_11.jpg"),
  require("./../../images/dairy/da_12.jpg"),
  require("./../../images/dairy/da_13.jpg"),
  require("./../../images/dairy/da_14.jpg"),
  require("./../../images/dairy/da_15.jpg"),
];

var img1 = require("./../../images/background/bg2.jpg");
var img3 = require("./../../images/background/bg5.jpg");

class Dairy extends Component {
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
                <h1 className="text-white">Dairy</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"/"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Dairy</li>
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
                        Got Milk? We sure do. Our milk is brought to you fresh
                        weekly. At{" "}
                        <span style={{ color: "red" }}>Food Center</span> we are
                        pleased to offer a very wide range of regular, 2%, low
                        fat or fat free milks. We also carry organic, soy,
                        almond, rice, and lactose free milk. In our grocery
                        department you can find long-life non-refrigerated milk
                        as well as powdered milk such as Parmalat, Borden, Klim,
                        Vitasoy, and Edensoy among others.
                      </p>
                      <p>
                        Fresh OJ to exotic passion fruit, from organic to
                        pomegranate, we have juices to meet most demanding
                        tastes.
                      </p>
                      <p>
                        From hot dogs to cold cuts, from local cheeses to the
                        exotic, from yogurt to butter, our dairy department is
                        bursting from the seams with the freshest and largest
                        selection anywhere on island. Whether its bagels and
                        cream cheese or bacon and eggs for breakfast,{" "}
                        <span style={{ color: "red" }}>Food Center</span> is
                        your one stop shopping place.
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

export default Dairy;
