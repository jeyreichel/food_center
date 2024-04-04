import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

var img1 = require("./../../images/background/bg2.jpg");
var img3 = require("./../../images/background/bg5.jpg");

class Disclaimer extends Component {
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
                <h1 className="text-white">Disclaimer</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"/"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Disclaimer</li>
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
                      <h2>Disclaimer</h2>
                      <h5>
                        By using or accessing this website you are accepting all
                        the terms of this disclaimer notice. If you do not agree
                        with anything in this notice you should not use or
                        access this website.
                      </h5>
                      <h5>
                        While every effort is made to ensure that the content of
                        this website is accurate, the website is provided on an
                        "as is" basis and Daas Corporation ("d/b/a Food Center
                        ") makes no representations or warranties in relation to
                        the accuracy or completeness of the information found on
                        it.
                      </h5>
                      <h5>
                        While the content of this site is provided in good
                        faith, we do not warrant that the information will be
                        kept up to date, be true, accurate and not misleading,
                        or that this site will always (or forever) be available
                        for use.
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

export default Disclaimer;
