import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

var img1 = require("./../../images/background/bg2.jpg");
var img3 = require("./../../images/background/bg5.jpg");

class Condition extends Component {
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
                <h1 className="text-white">Terms & Condition</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"/"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Terms & Condition</li>
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
                      <h2>Terms and Condition</h2>
                      <h5>
                        This web site, "www.foodcentervi.com" and its "content",
                        is provided by Daas Corporation ("d/b/a Food Center "),
                        conditional on your acceptance of the terms and
                        conditions of use set forth herein ("Terms and
                        Conditions"). By visiting or using this site,
                        www.foodcentervi.com, including without limitation to
                        access, use, and/or download messages, information,
                        data, text, or images, or other content from this site,
                        www.foodcentervi.com, or to send messages, information,
                        data, text, or images, or other content to this site,
                        www.foodcentervi.com, you agree on your own behalf, and
                        on behalf of any entity on whose behalf you may act, to
                        accept and abide by the Terms and Conditions for each
                        use of and each visit to this site,
                        www.foodcentervi.com. If you do not agree to these
                        "Terms and Conditions", you should not use this site,
                        www.foodcentervi.com.
                      </h5>
                      <h5>
                        Neither Food Center nor any of its directors, officers,
                        or employees assume any responsibility for errors or
                        omissions in the materials in this web site. These
                        materials are provided as is without warranty of any
                        kind, either express or implied, including but not
                        limited to, the implied warranties of merchantability,
                        fitness for a particular purpose, or non-infringement.
                        The website, site, www.foodcentervi.com, is provided on
                        an "as is" basis and Daas Corporation ("d/b/a Food
                        Center ") makes no representations or warranties in
                        relation to the accuracy or completeness of the
                        information found on it.
                      </h5>
                      <h5>
                        Our website contains links leading to other websites
                        that are not owned or managed by us. Because we are not
                        responsible for how these sites handle your privacy, we
                        encourage you to check out the Privacy Policies of those
                        other websites.
                      </h5>
                      <h5>
                        In addition, neither Food Center nor any of its
                        directors, officers or employees warrant the accuracy or
                        completeness of the information, text, graphics, links
                        or other items contained within these materials. Neither
                        Food Center nor any of its affiliates, directors,
                        officers or employees shall be liable for any special,
                        indirect, incidental, or consequential damages,
                        including without limitation, lost revenues or lost
                        profits, which may result from the use of these
                        materials. Food Center may make changes to these
                        materials, or to the products described therein, at any
                        time without notice. While the content of this site is
                        provided in good faith, we do not warrant that the
                        information will be kept up to date, be true, accurate
                        and not misleading, or that this site will always (or
                        forever) be available for use
                      </h5>
                      <h5>
                        Food Center has the right, in its sole discretion, to
                        add to, remove, modify or otherwise change any part of
                        the Terms and Conditions, in whole or in part, at any
                        time.
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

export default Condition;
