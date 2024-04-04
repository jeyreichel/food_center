import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

var img1 = require("./../../images/background/bg2.jpg");
var img3 = require("./../../images/background/bg5.jpg");

class Privacy extends Component {
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
                <h1 className="text-white">Privacy & Policy</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"/"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Privacy & Policy</li>
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
                      <h2>Privacy & Policy</h2>
                      <h5>
                        Daas Corporation ("d/b/a Food Center") values your
                        privacy as much as our own, as such, we do not collect
                        any private information nor use any software for such
                        endeavor. Only information sent to us through our
                        "Contact Us" link is retained.
                      </h5>
                      <h5>
                        If you do not with to enable cookies, simply adjust your
                        browser settings before using our website and turn off
                        cookies for "Food Center", "www.foodcentervi.com", or
                        our third party advertisers. Doing so, however, may
                        impede or slow responsiveness of the site. Daas
                        Corporation ("d/b/a Food Center") reserves the right to
                        disclose your personallly identifying information when
                        legally required and when the information is relevant
                        for the protection of our rights, including but not
                        limited to compliance to a legal process or court order
                        served to our website.
                      </h5>
                      <h5>
                        Our website contains links leading to other websites
                        that are not owned or managed by us. Because we are not
                        responsible for how these sites handle your privacy, we
                        encourage you to check out the Privacy Policies of those
                        other websites.
                      </h5>
                      <h5>
                        Your first name, last name, email address, and telephone
                        number are required when using the "Contact Us" page
                        (link)as a means to prevent and (or) minimize frivolouse
                        and (or) irrelevant posts.
                      </h5>
                      <h5>
                        Daas Corporation ("d/b/a Food Center") reserves the
                        right to change this Privacy Policy as it deems
                        necessary.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Privacy;
