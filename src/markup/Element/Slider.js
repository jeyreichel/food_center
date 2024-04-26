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
                <h2 className="title">Welcome To FoodCenter</h2>
                <Link to={"/about_us"} className="btn btnhover">
                  About Us
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="slide"
              style={{ backgroundImage: "url(" + slider2 + ")" }}
            ></div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="slide"
              style={{ backgroundImage: "url(" + slider3 + ")" }}
            ></div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
