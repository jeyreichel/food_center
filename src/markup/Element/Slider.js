import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import slider2 from "./../../images/main-slider/image333d.jpg";
import slider1 from "./../../images/main-slider/s_01.jpg";
import slider3 from "./../../images/main-slider/s_11.jpg";

class Slider extends Component {
  render() {
    return (
      <div className="main-slider">
        <Carousel indicators={false}>
          <Carousel.Item>
            <div
              className="slide"
              style={{ backgroundImage: "url(" + slider1 + ")" }}
            >
              <div className="content">
                <span>Food Shop</span>
                <h2 className="title">Welcome To FoodCenter</h2>
                <Link to={"/about-1"} className="btn btnhover">
                  About Us
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="slide"
              style={{ backgroundImage: "url(" + slider2 + ")" }}
            >
              {/* <img className="d-block w-100 slider"	src={require('./../../images/main-slider/slide2.jpg')}	alt="Second slide"	/> */}
              <div className="content">
                <span>Cakes & Bakery</span>
                <h2 className="title">Occasion Cakes</h2>
                <h4 className="sub-title">The Best Coffee In China</h4>
                <Link to={"/about-1"} className="btn btnhover">
                  About Us
                </Link>
                <Link
                  to={""}
                  className="btn white"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Subscribe Now
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="slide"
              style={{ backgroundImage: "url(" + slider3 + ")" }}
            >
              <div className="content">
                <span>Cakes & Bakery</span>
                <h2 className="title">Occasion Cakes</h2>
                <h4 className="sub-title">The Best Coffee In China</h4>
                <Link to={"/about-1"} className="btn btnhover">
                  About Us
                </Link>
                <Link
                  to={""}
                  className="btn white"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Subscribe Now
                </Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
